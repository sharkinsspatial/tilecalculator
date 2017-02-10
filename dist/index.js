'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getTilesSize;

var _sphericalmercator = require('sphericalmercator');

var _sphericalmercator2 = _interopRequireDefault(_sphericalmercator);

var _lodash = require('lodash.range');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTilesSize(box, minzoom, maxzoom) {
    var sphericalmercator = new _sphericalmercator2.default();
    var levels = (0, _lodash2.default)(minzoom, maxzoom + 1);
    var numTiles = levels.reduce(function (tiles, level) {
        var bounds = sphericalmercator.xyz(box, level);
        var boundTotal = (bounds.maxX - bounds.minX) * (bounds.maxY - bounds.minY);
        var levelTotal = boundTotal === 0 ? 1 : boundTotal;
        return tiles + levelTotal;
    }, 0);
    return numTiles * 30000;
}