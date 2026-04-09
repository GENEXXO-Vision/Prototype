// ═══════════════════════════════════════════════════════════
// GATEWAYS MERGE
// Combines all sector gateway objects into the single GATEWAYS
// constant used by the engine. Load this AFTER all sector files.
// To add a new sector: create data/sectors/mysector.js with
// const GATEWAYS_MYSECTOR = { ... }; then add it to the spread below.
// ═══════════════════════════════════════════════════════════

const GATEWAYS = {
  ...GATEWAYS_ADVENTURE,
  ...GATEWAYS_WELLNESS,
  ...GATEWAYS_FINANCE,
  ...GATEWAYS_FASHION,
};
