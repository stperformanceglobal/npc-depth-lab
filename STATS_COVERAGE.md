# NPC performance-stat coverage and AGI experience adjustment

Reviewed 21 October 2026. Rated coverage: 50 of 400 profiles, up from 23. The 27 newly verified metric records are preserved in research/verified-season-metrics-2026-10-21.json. No exclusions, careerAppearance records or legacyAppearanceRecord metadata were changed. Olly Ryan's saved 2026 NPC appearance count was corrected to 12 from the RuckMob competition career-season row.

## Displayed AGI

Keep the existing positional AGI v1.0 as base AGI. The displayed score is:
min(100, base AGI + floor(verified NPC career games / 25) + 2 * floor(verified Super Rugby career games / 25)).

Completed blocks only. With a base of 50, 24 NPC plus 24 Super Rugby games yields 50; 25 plus 25 yields 53; 50 plus 75 yields 58. Base 99 with a bonus of 8 yields 100. Experience cannot create a score without the required 2026 performance inputs and 160 sample minutes.

Only exact Rugby Database competition totals with matching player ID, scope, evidence URL, playedOnly, deduplicated, throughDate and verified_competition_total basis qualify. A numeric headline or legacy partial record is insufficient. Unknown components remain pending. Only verified components are included. AGI* / 100 denotes incomplete experience verification; the player-name asterisk continues to denote unresolved prior Super Rugby involvement. The popup separates base AGI, NPC bonus and Super Rugby bonus.

Scores use a continuous RGB interpolation: 0 #8b1e2d; 50 #915b00; 100 #106535. NR is #687381. Current injury icons use a medical plus inside a circle, preserving the dated-injury evidence rule.

## Why players remain unrated

NR means insufficient verified inputs, not poor ability or necessarily no online statistics. The expanded census previously contained mostly participation/scoring rows. There are four distinct problems:

1. Detailed current-season profiles have not been imported.
2. A current NPC overview can coexist with a deep profile for 2025 or Super Rugby; those inputs cannot rate NPC 2026.
3. Some NPC 2026 profiles contain raw rates but no position-group percentile rankings.
4. Small samples can fail the 160-minute rule.

Examples inspected on 21 October: Ofa Topeni's deep profile was NPC 2025; Tito Tuipulotu's was Super Rugby 2024-25. Riley Tofilau and Moses Hafoka showed NPC 2026 raw metrics without the position-group rankings required by the current model. None was assigned an invented percentile.

## Completing the remaining coverage

Prioritize the remaining NR profiles by 2026 games played, then reconcile their complete RuckMob NPC 2026 season profiles. Check identity, competition, season, metric-sample minutes, exact metric definitions and reference group before importing. Per-match trait percentages are not substitutes for the detailed per-80 percentile fields.

Forwards require metres/80 and carries/80; tackles/80, tackle success and turnovers won/80; penalties conceded/80.
Backs require metres/80, clean breaks/80, defenders beaten/carry and try involvements/80; tackles/80 and tackle success; penalties conceded/80 and turnovers lost/10 touches.

Record source URL, provider player identifier, review date, metric sample games/minutes and source reference group in metricEvidence. Keep appearance totals separate from full-box-score coverage. Preserve previous source notes as historical context when correcting them. Do not silently combine an older cached season snapshot with a newer one.

For systematic completion, seek an authorized full-season RuckMob export of these inputs and peer-group percentiles. A licensed Opta/Stats Perform NPC export is the professional alternative; verify 2026 coverage, metric definitions and public-display rights before changing provider. Official Provincial Rugby leaderboards are useful checks but do not establish complete per-player coverage.

Do not compute percentiles from only the 400 eligible candidates: that would change the comparison population. A raw-data percentile model would require all NPC players in each comparison group, including contracted and All Blacks players in the reference population, with consistent minutes, definitions, ties and eligibility. Version that separately rather than relabeling it AGI v1.0.

## Future coach preferences

Preserve the standard AGI. A future coach preference prompt can produce explicit, editable position-specific weights as a separate named preset, with version and missing-data coverage displayed. A prompt cannot supply unavailable scrum, lineout, aerial or decision-quality evidence.
