const typeChart = require('./data/typeChart');


// Check if an attacking type is weak against a defending type
function isWeak(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();
    
    // TODO: add error handling for invalid types
    
    return typeChart[att].half.includes(def);
}
