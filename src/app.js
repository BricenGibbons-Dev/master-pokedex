console.log('Pika Pika');

// Function to get damage multiplier based on type matchup
function multiplier(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();
    
    // TODO: add error handling for invalid types
   
    if (typeChart[att].double.includes(def)) return 2;

    if (typeChart[att].half.includes(def)) return 0.5;

    if (typeChart[att].zero.includes(def)) return 0;

    return 1;
}

// Test cases
console.log(multiplier("normal", "rock"));
console.log(multiplier("dragon", "dragon"));

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { multiplier, isStrong, isWeak, isImmune };
}
