// src/logic/index.js
// central export point for the small type-chart helpers

const isImmune = require('./isImmune');
const isStrong = require('./isStrong');
const isWeak   = require('./isWeak');

module.exports = { isImmune, isStrong, isWeak };
