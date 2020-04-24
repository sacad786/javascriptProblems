/*Given a 3x3 matrix of a completed tic-tac-toe game, create a function 
that returns whether the game is a win for "X", "O", or a "Draw",
 where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.

Examples
ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
]) ➞ "X"

ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) ➞ "O"

ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]) ➞ "Draw"
Notes
Make sure that if O wins, you return the letter "O" and not the integer 0 (zero)
 and if it's a draw, make sure you return the capitalised word "Draw". If you return "X" or "O", 
 make sure they're capitalised too.
 
 ways someone can win
 horizontal 
    console.log("comparing " + arr[i][0] + " with " + arr[i][1]  + " with " + arr[i][2]);

 vertical 
    console.log("comparing " + arr[0][i] + " with " + arr[1][i]  + " with " + arr[2][i]);

 acroos the board
   / console.log("comparing " + arr[0][i+2] + " with " + arr[1][i+1]  + " with " + arr[2][i]);
   \ console.log("comparing " + arr[0][i] + " with " + arr[1][i+1]  + " with " + arr[2][i+1]);
 
 */


//   loop through the each array 
//   if the first item is equal to the next item till the end return true or false - checking horizontally
//   if the [arr[i]i] is equal to the next [arr[i]i++] return true or false - vertically
function ticTacToe(arr) {
    let horizontal = checkHor(arr)
    let vertical = checkVert(arr)
    let diagonal = checkdiagonal(arr)

   return ttt(horizontal, vertical, diagonal);
}

console.log("expecting top hor");

console.log(ticTacToe([
  ["X", "X", "X"],
  ["X", "O", "O"],
  ["O", "X", "O"]
]))

console.log("expecting mid hor");

console.log(ticTacToe([
  ["X", "O", "O"],
  ["X", "X", "X"],
  ["O", "X", "O"]
]))

console.log("expecting bottom hor");

console.log(ticTacToe([
  ["X", "O", "O"],
  ["O", "O", "X"],
  ["X", "X", "X"]
]))

console.log("expecting left vert");

console.log(ticTacToe([
  ["X", "O", "O"],
  ["X", "O", "X"],
  ["X", "X", "O"]
]))

console.log("expecting mid vert");
console.log(ticTacToe([
  ["X", "X", "O"],
  ["O", "X", "X"],
  ["O", "X", "O"]
]))

console.log("expecting right vert");
console.log(ticTacToe([
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["O", "X", "X"]
]))

console.log("expecting left diag");
console.log(ticTacToe([
  ["X", "O", "O"],
  ["X", "X", "O"],
  ["O", "X", "X"]
]))

console.log("expecting right diag");

console.log(ticTacToe([
  ["X", "O", "O"],
  ["X", "O", "X"],
  ["O", "X", "O"]
]))


function checkHor(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      if (i == 0) {
        console.log("won with top horizontal");

      } else if (i == 1) {
        console.log("won with mid horizontal");

      } else if (i == 2) {
        console.log("won with bottom horizontal");

      }

      return arr[i][0];

    }
  }
}
function checkVert(arr) {
  for (i = 0; i < arr.length; i++) {

  if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
    if (i == 0) {
      console.log("won with left vertical");

    } 
    else if (i == 1) {
      console.log("won with mid vertical");

    } 
    else if (i == 2) {
      console.log("won with right vertical");

    }

    return arr[0][i];

  }
}
}
function checkdiagonal(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[0][i + 2] === arr[1][i + 1] && arr[1][i + 1] === arr[2][i]) {
    console.log("won with the right diag");
    
    return arr[0][i + 2]
  }

  if (arr[0][i] === arr[1][i + 1] && arr[1][i + 1] === arr[2][i + 2]) {
    console.log("won with the left diag");
    return arr[0][i]
  }

}
}

function ttt(horizontal,vertical,diagonal) {
  if (horizontal) {
    return horizontal
  }if (vertical) {
    return vertical
  }if (diagonal) {
    return diagonal
  }else{
    return "Draw";
  }
}