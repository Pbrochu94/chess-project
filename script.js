class Square {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.canMoveTo = [];
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
        let newSquare = new Square([horizontal, vertical]);
        this.squareArr.push(newSquare);
      }
    }
    let boardEnd = this.horizontal - 1; //initialize a variable to hold the board limit to not surpass and give to the checkMove fn
    this.squareArr.forEach((element) => {
      checkMovements(element, boardEnd);
    });
    function checkMovements(currentSquare) {
      let all8PossibleMovments = [
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
      ];
      all8PossibleMovments.forEach((movement) => {
        let horizontalTotal = currentSquare.coordinates[0] + movement[0];
        let verticalTotal = currentSquare.coordinates[1] + movement[1];
        let destCoordinates = [horizontalTotal, verticalTotal];
        /*console.log(
          `Start square : ${currentSquare.coordinates} -> ${movement} = ${destCoordinates}`,
        );*/
        if (
          horizontalTotal <= boardEnd &&
          verticalTotal <= boardEnd &&
          horizontalTotal >= 0 &&
          verticalTotal >= 0
        ) {
          /*console.log(
            `the destination: ${destCoordinates} is not out of bound !`,
          );*/
          //currentSquare.canMoveTo.push(destCoordinates);
          createEdge(currentSquare, destCoordinates);
        }
      });
    }
    function createEdge(currentSquare, destCoordinates) {
      console.log(`${currentSquare.coordinates}-----${destCoordinates}`);
      board.squareArr.forEach((element) => {
        console.log(element);
      });
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
