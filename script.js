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
      checkMovements(element.coordinates, boardEnd);
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
        let horizontalTotal = currentSquare[0] + movement[0];
        let verticalTotal = currentSquare[1] + movement[1];
        let destCoordinates = [horizontalTotal, verticalTotal];
        console.log(
          `Start square : ${currentSquare} -> ${movement} = ${destCoordinates}`,
        );
        if (
          horizontalTotal <= boardEnd &&
          verticalTotal <= boardEnd &&
          horizontalTotal >= 0 &&
          verticalTotal >= 0
        ) {
          console.log(
            `the destination: ${destCoordinates} is not out of bound !`,
          );
        }
        //console.log(`the destination ${destCoordinates} is out of bound !`);
      });
      //check with all 8 possible movement
      //if movement is possible add the destination to canMoveTo array
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
