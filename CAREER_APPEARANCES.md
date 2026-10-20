# Career appearance source

Rugby Database is the selected provider for career NPC and Super Rugby appearances. RuckMob remains the source for 2026 NPC season appearances and impact metrics.

The career feed is pending accessible source competition records or an authorized export. Direct retrieval of inspected competition pages returned access errors on 20 October 2026. No complete feed is claimed. Existing six RuckMob numeric records are preserved in legacyAppearanceRecord rather than presented as reconciled Rugby Database totals.

NZ Rugby History credits NZ Rugby Almanacks and the NZ Rugby Register but currently covers men through 2025. Its provincial totals can include non NPC matches. Its Rugby hides full historical seasons behind membership on inspected pages. Neither broad provincial nor professional totals may populate career NPC or Super Rugby fields.

## Verified export contract

Run node scripts/import-career-appearances.mjs verified-export.json seed.json. Input is an array. Every record requires id, exact name, providerPlayerId and checkedAt (YYYY-MM-DD). Optional npc and superRugby objects each require apps (nonnegative integer), sourceUrl (exact player evidence URL), throughDate (coverage date), basis (verified_competition_total), playedOnly (true), deduplicated (true) and scope (division_one_npc or senior_super_rugby). Null means not verified and never means zero.

NPC must use All Time Division One NPC, across its branding changes. Super Rugby must include verified senior regional variants and all applicable franchises. Deduplicate match IDs. Shield games that also belong to NPC count once. Exclude unused reserves, friendlies and development matches. Never scrape around access restrictions or bypass membership.

Player identities must be verified before matching. Known initial IDs: Joe Gavigan 3553, Neria Fomai 1523. Career evidence dates and provider IDs must remain with imported totals.
