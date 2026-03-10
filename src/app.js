const typeChart = require('./data/typeChart');


/**
 * Calculates the damage multiplier for a type matchup between attacking and defending types.
 * @param {string} attType - The attacking Pokémon type (case-insensitive).
 * @param {string} defType - The defending Pokémon type (case-insensitive).
 * @returns {number} The damage multiplier: 0 (no effect), 0.5 (not very effective), 1 (normal), or 2 (super effective).
 */
function multiplier(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();
    
    const rules = typeChart[att];
    if (!rules) {
        console.error(`Invalid attacking type: ${attType}`);
        return 1;
    }

    if (typeChart[att].zero.includes(def)) return 0;
    if (typeChart[att].double.includes(def)) return 2;
    if (typeChart[att].half.includes(def)) return 0.5;
    return 1;
}

/* Test cases
console.log(multiplier("normal", "rocky"));
console.log(multiplier("dragon", "dragon"));
console.log(multiplier("water", "fire"));
console.log(multiplier("fire", "water"));
*/

/**
 * Recommends attack types based on a defending Pokémon type.
 * @param {string} defType - The defending Pokémon type (case-insensitive).
 * @returns {Object|null} An object containing:
 *   - defType: the normalized defending type
 *   - use: array of attack types that are super effective (2x damage)
 *   - avoid: array of attack types that are not very effective (0.5x damage)
 *   - immune: array of attack types that have no effect (0x damage)
 *   Returns null if the defending type is invalid.
 */
function recommendedTypes(defType) {
     const def = defType.trim().toLowerCase();

  // Validate user input (defender type)
  if (!Object.hasOwn(typeChart, def)) {
    console.error(`Invalid defending type: ${defType}`);
    return null;
  }

  const use = [];
  const avoid = [];
  const immune = [];

  for (const attType of Object.keys(typeChart)) {
    const m = multiplier(attType, def);

    if (m === 2) use.push(attType);
    else if (m === 0.5) avoid.push(attType);
    else if (m === 0) immune.push(attType);
  }

  return { defType: def, use, avoid, immune };
}
// Test cases
console.log(recommendedTypes("fired"));
console.log(recommendedTypes("water"));
console.log(recommendedTypes("dragon"));
console.log(recommendedTypes("ghost"));
