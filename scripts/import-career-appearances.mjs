import fs from 'node:fs';
import assert from 'node:assert/strict';

// Input is an authorized, manually verified export of competition totals.
// No request is made to the source and no headline total is inferred.
const [input, target = 'seed.json'] = process.argv.slice(2);
assert(input, 'Usage: node scripts/import-career-appearances.mjs verified-export.json [seed.json]');
const records = JSON.parse(fs.readFileSync(input, 'utf8'));
const board = JSON.parse(fs.readFileSync(target, 'utf8'));
assert(Array.isArray(records), 'Expected an array of verified player records');
const seen = new Set();
let count = 0;
for (const record of records) {
  assert(!seen.has(record.id), 'Duplicate player record');
  seen.add(record.id);
  const player = board.players.find(p => p.id === record.id);
  assert(player && player.name === record.name, 'Player ID and name must match the board');
  assert(Number.isInteger(record.providerPlayerId) && record.providerPlayerId > 0, 'Missing source player ID');
  assert(/^\d{4}-\d{2}-\d{2}$/.test(record.checkedAt), 'Missing review date');
  const evidence = {provider: 'Rugby Database', providerPlayerId: record.providerPlayerId, checkedAt: record.checkedAt};
  for (const [key, field, scope] of [['npc', 'npcTotal', 'division_one_npc'], ['superRugby', 'srTotal', 'senior_super_rugby']]) {
    const total = record[key];
    if (total == null) continue;
    const url = new URL(total.sourceUrl);
    assert(['rugbydatabase.co.nz', 'www.rugbydatabase.co.nz'].includes(url.hostname) && url.protocol === 'https:', 'Source must be Rugby Database');
    assert(url.searchParams.get('playerId') === String(record.providerPlayerId), 'Evidence player mismatch');
    assert(total.scope === scope && total.basis === 'verified_competition_total', 'Headline provincial/professional totals are not accepted');
    assert(total.playedOnly === true && total.deduplicated === true, 'Played appearances and competition overlap must be reconciled');
    assert(/^\d{4}-\d{2}-\d{2}$/.test(total.throughDate), 'Missing source coverage date');
    assert(Number.isInteger(total.apps) && total.apps >= 0, 'Invalid appearance total');
    assert(total.throughDate >= '2026-10-20', 'Stale totals cannot replace current career totals');
    player[field] = total.apps;
    evidence[key] = total;
    player.sources ??= [];
    if (!player.sources.some(s => s.url === total.sourceUrl)) player.sources.push({title: 'Verified Rugby Database career competition total', url: total.sourceUrl});
    count++;
  }
  player.careerAppearance = {...player.careerAppearance, ...evidence, status: evidence.npc && evidence.superRugby ? 'verified' : 'partially_verified'};
  player.careerNote = 'Career totals use verified Rugby Database competition records. Unknown fields remain pending. Source coverage dates appear in the career record.';
}
fs.writeFileSync(target, JSON.stringify(board, null, 2) + '\n');
console.log(`Imported ${count} verified competition totals across ${records.length} players`);
