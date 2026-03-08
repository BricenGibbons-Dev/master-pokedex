const typeChart = require('./data/typeChart');

// Function to get damage multiplier based on type matchup
function multiplier(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();
    
    // Error handling for defending type (user input)
    if (!typeChart[def]) {
        console.error(`Invalid defending type: ${defType}`);
        return 1;
    }

    if (typeChart[att].zero.includes(def)) return 0;
    if (typeChart[att].double.includes(def)) return 2;
    if (typeChart[att].half.includes(def)) return 0.5;
    return 1;
}

// Test cases
console.log(multiplier("normal", "rocky"));
console.log(multiplier("dragon", "dragon"));
