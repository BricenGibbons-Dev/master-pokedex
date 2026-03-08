// Type effectiveness chart for Pokemon battles
const typeChart = {
    normal:   { double: [], half: ["rock"], zero: ["ghost"] },
    fire:     { double: ["grass","ice","bug"], half: ["fire","water","rock","dragon"], zero: [] },
    water:    { double: ["fire","ground","rock"], half: ["water","grass","dragon"], zero: [] },
    electric: { double: ["water","flying"], half: ["electric","grass","dragon"], zero: ["ground"] },
    grass:    { double: ["water","ground","rock"], half: ["fire","grass","poison","flying","bug","dragon"], zero: [] },
    ice:      { double: ["grass","ground","flying","dragon"], half: ["fire","water","ice"], zero: [] },
    fighting: { double: ["normal","ice","rock"], half: ["poison","flying","psychic","bug"], zero: ["ghost"] },
    poison:   { double: ["grass","bug"], half: ["poison","ground","rock","ghost"], zero: [] },
    ground:   { double: ["fire","electric","poison","rock"], half: ["grass","bug"], zero: ["flying"] },
    flying:   { double: ["grass","fighting","bug"], half: ["electric","rock"], zero: [] },
    psychic:  { double: ["fighting","poison"], half: ["psychic"], zero: [] },
    bug:      { double: ["grass","psychic"], half: ["fire","fighting","poison","flying","ghost"], zero: [] },
    rock:     { double: ["fire","ice","flying","bug"], half: ["fighting","ground"], zero: [] },
    ghost:    { double: ["psychic","ghost"], half: ["poison"], zero: ["normal"] },
    dragon:   { double: ["dragon"], half: [], zero: [] }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = typeChart;
}
