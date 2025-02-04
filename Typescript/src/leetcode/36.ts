/**
 * 36. Valid Sudoku
Medium
Topics
Companies
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 */

function isValidSudoku(board: string[][]): boolean {
  let rowMap = new Map<number, Set<string>>();
  let colMap = new Map<number, Set<string>>();
  let subBoardMap = new Map<string, Set<string>>();
  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      if (board[i][k] == '.') {
        continue;
      }
      //Push to row map
      if (rowMap.get(i) !== undefined) {
        if (rowMap.get(i)!.has(board[i][k])) {
          return false;
        }

        rowMap.set(i, rowMap.get(i)!.add(board[i][k]));
      } else {
        let newRowSet = new Set<string>();
        newRowSet.add(board[i][k]);
        rowMap.set(i, newRowSet);
      }

      //Push to col map
      if (colMap.get(k) !== undefined) {
        if (colMap.get(k)!.has(board[i][k])) {
          return false;
        }

        colMap.set(k, colMap.get(k)!.add(board[i][k]));
      } else {
        let newColSet = new Set<string>();
        newColSet.add(board[i][k]);
        colMap.set(k, newColSet);
      }

      //Find subBoard location
      let subLocateRow = Math.ceil(((i + 1) / 9) * 3) - 1;
      let subLocateCol = Math.ceil(((k + 1) / 9) * 3) - 1;

      //Push to sub board map

      let subMapKey = subLocateRow.toString() + subLocateCol.toString();

      if (subBoardMap.get(subMapKey) !== undefined) {
        if (subBoardMap.get(subMapKey)!.has(board[i][k])) {
          return false;
        }

        subBoardMap.set(subMapKey, subBoardMap.get(subMapKey)!.add(board[i][k]));
      } else {
        let newSubBoardSet = new Set<string>();
        newSubBoardSet.add(board[i][k]);
        subBoardMap.set(subMapKey, newSubBoardSet);
      }
    }
  }

  return true;
}

let board = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.']
];

console.log(isValidSudoku(board));
