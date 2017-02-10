import Sphericalmercator from 'sphericalmercator';
import range from 'lodash.range';

export default function getTilesSize(box, minzoom, maxzoom) {
    const sphericalmercator = new Sphericalmercator();
    const levels = range(minzoom, maxzoom + 1);
    const numTiles = levels.reduce((tiles, level) => {
        const bounds = sphericalmercator.xyz(box, level);
        const boundTotal = (bounds.maxX - bounds.minX) *
            (bounds.maxY - bounds.minY);
        const levelTotal = boundTotal === 0 ? 1 : boundTotal;
        return tiles + levelTotal;
    }, 0);
    return numTiles * 30000;
}

