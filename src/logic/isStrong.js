const typeChart = require('../data/typeChart');


// Check if an attacking type is strong against a defending type
function isStrong(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();

    return typeChart[att].double.includes(def);
}

module.exports = isStrong; // export helper function
