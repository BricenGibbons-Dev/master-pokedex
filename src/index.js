console.log('Pika Pika');

const typeChart = {
    normal: { double: [], half: ["rock"], zero: ["ghost"] },
    fire:  { double: [], half: [], zero: [] },
    water:  { double: [], half: [], zero: [] },
    electric:  { double: [], half: [], zero: [] },
    grass:  { double: [], half: [], zero: [] },
    ice:  { double: [], half: [], zero: [] },
    fighting:  { double: [], half: [], zero: [] },
    poison:  { double: [], half: [], zero: [] },
    ground:  { double: [], half: [], zero: [] },
    flying:  { double: [], half: [], zero: [] },
    psychic:  { double: [], half: [], zero: [] },
    bug:  { double: [], half: [], zero: [] },
    rock:  { double: [], half: [], zero: [] },
    ghost:  { double: [], half: [], zero: [] },
    dragon:  { double: ["dragon"], half: [], zero: [] }
}

function multiplier(attType, defType) {
    const att = attType.trim().toLowerCase();
    const def = defType.trim().toLowerCase();
    
    //TODO: add error handling for invalid types
   
    if (typeChart[att].double.includes(def)) return 2;

    if (typeChart[att].half.includes(def)) return 0.5;

    if (typeChart[att].zero.includes(def)) return 0;

    return 1;
}
//Test cases
console.log(multiplier("normal", "rock"));
console.log(multiplier("dragon", "dragon"));

