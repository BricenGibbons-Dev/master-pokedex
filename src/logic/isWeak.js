const typeChart = require('../data/typeChart');


// Check if an attacking type is weak against a defending type
function isWeak(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();

    return typeChart[att].half.includes(def);
}

module.exports = isWeak; // export helper function
