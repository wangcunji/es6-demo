let result = Infinity;
var minPathSum = function (grid) {
    const wide = grid.length;
    if (wide === 0) return 0;
    const length = grid[0].length;
    result = Infinity;
    calcPath(grid, 0, 0, wide, length, 0);
    return result;
};

function calcPath(grid, x, y, wide, length, count) {
    if (x < length && y < wide) {
        count += grid[y][x];
    }
    if (x === length - 1 && y === wide - 1 && count < result) {
        result = count;
    }
    if (x < length && count < result) {
        calcPath(grid, x + 1, y, wide, length, count);
    }
    if (y < wide && count < result) {
        calcPath(grid, x, y + 1, wide, length, count);
    }
}

let c = [[1]];

console.log(minPathSum(c));
