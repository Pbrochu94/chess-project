class Square {
  constructor(vertical, horizontal) {
    this.horizontal = horizontal;
    this.vertical = vertical;
    this.canMoveTo = [];
    this.allMovePoss = [
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
    ];
  }
}

class ChessBoard {
  constructor(size) {
    this.vertical = size;
    this.horizontal = size;
    this.squareArr = [];
    this.buildBoard();
  }
  buildBoard() {
    //Create each square object
    for (let horizontal = 0; horizontal < this.horizontal; horizontal++) {
      for (let vertical = 0; vertical < this.vertical; vertical++) {
        let newSquare = new Square(vertical, horizontal);
        this.squareArr.push(newSquare);
      }
    }
    this.squareArr.forEach((element) => {
      this.availableMove(element);
    });
  }
  availableMove(currentPosition) {
    let boardEdge = this.horizontal - 1; //declare the board size limit to pass to the canMove fn
    currentPosition.allMovePoss.forEach((movement) => {
      if (canMove(currentPosition, movement, boardEdge)) {
        currentPosition.canMoveTo.push(movement);
      }
    });
    function canMove(currentPosition, movementDigit, boardEdge) {
      if (
        //if the knight next square is off the board
        currentPosition.vertical + movementDigit[0] > boardEdge ||
        currentPosition.vertical + movementDigit[0] < 0 ||
        currentPosition.horizontal + movementDigit[1] > boardEdge ||
        currentPosition.horizontal + movementDigit[1] < 0
      ) {
        return false;
      }
      return true;
    }
  }
  knightMove(startingPt, destination) {
    //console.log(startingPt)
    //startingpt ==
    //if knight position is destination
    //return square path array
    //for each possibility in movementPoss array
    //knightMove(element)
  }
}

let board = new ChessBoard(3);
console.log(board);
