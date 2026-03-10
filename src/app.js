const typeChart = require('./data/typeChart');
const { isImmune, isStrong, isWeak } = require('./logic');

// Function to get damage multiplier based on type matchup
// delegates the decision to focussed helpers in `logic/`
function multiplier(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();

    if (!Object.prototype.hasOwnProperty.call(typeChart, att)) {
        console.error(`Invalid attacking type: ${attType}`);
        return 1;
    }

    if (isImmune(att, def)) return 0;
    if (isStrong(att, def)) return 2;
    if (isWeak(att, def)) return 0.5;
    return 1;
}

/* Test cases
console.log(multiplier("normal", "rocky"));
console.log(multiplier("dragon", "dragon"));
*/

function recommendedTypes(defType) {
    const def = defType.trim().toLowerCase();

    // Validate user input (defender type)
    if (!Object.prototype.hasOwnProperty.call(typeChart, def)) {
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
/* Test cases
console.log(recommendedTypes("fire"));
console.log(recommendedTypes("rock"));
*/

module.exports = { multiplier, recommendedTypes };
