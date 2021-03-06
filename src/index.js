'use strict';
const scale = require('./mode');
const chord = require('./chord');
const clip = require('./clip');
const pattern = require('./pattern');
const midi = require('./midi');
const scales = require('./modes');
const setMiddleC = require('./setMiddleC');
let modes = Object.keys(scales);

// Allow scale to be denoted by mode as well
module.exports = {mode: scale, scale, chord: chord.getChord, listChords: chord.listChords, modes, scales: modes, clip, pattern, midi, setMiddleC: setMiddleC.setMiddleC, transposeNote: setMiddleC.transposeNote};
