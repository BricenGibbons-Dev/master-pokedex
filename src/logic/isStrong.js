// Check if an attacking type is strong against a defending type
function isStrong(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();
    
    // TODO: add error handling for invalid types
    
    return typeChart[att].double.includes(def);
}
