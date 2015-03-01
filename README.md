remove-degenerate-cells
=======================
### Removes degenerate cells in a simplicial complex

Removes degenerate cells in a simplicial complex and reindexes the cells array.

Install
-------

```bash
$ npm install remove-degenerate-cells
```

Usage
-----

Using cell indices alone

```javascript
var removeDegenerateCells = require('remove-degenerate-cells');

var mesh = {
  cells: [
    [0, 1, 2],
    [0, 1, 1]
  ],
  positions: [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
  ]
}

mesh.cells = removeDegenerateCells(mesh.cells);

console.log(mesh);
/*
{ 
  cells: [ 
    [0, 1, 2]
  ],
  positions: [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0]
  ]
}
*/
```

Using vertex positions

```javascript
var removeDegenerateCells = require('remove-degenerate-cells');

var mesh = {
  cells: [
    [0, 1, 2],
    [0, 1, 3]
  ],
  positions: [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
}

mesh.cells = removeDegenerateCells(mesh.cells, mesh.positions);

console.log(mesh);
/*
{ 
  cells: [
    [0, 1, 2]
  ],
  positions: [ 
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ] 
}
*/
```
