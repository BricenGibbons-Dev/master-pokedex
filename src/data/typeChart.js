// Type effectiveness chart for Pokemon battles
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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = typeChart;
}
