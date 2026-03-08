const typeChart = require('./data/typeChart');


// Check if an attacking type is immune against a defending type
function isImmune(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();
    
    // TODO: add error handling for invalid types
    
    return typeChart[att].zero.includes(def);
}
