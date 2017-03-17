# tilecalculator
Calculate the size of xyz tiles for bounding box and range of zoom levels in
Bytes (using average size of 30000).

## Install

```bash
npm install
```
To build distribution version.
```bash
npm run build
```
To run tests
```bash
npm test
```
## Usage

### `getTilesSize(bounds, minzoom, maxzoom)`

* `box` {Number} bounds in the form `[w, s, e, n]` in WGS84.
* `minzoom` {Number} minimum zoom.
* `maxzoom` {Number} maximum zoom.
