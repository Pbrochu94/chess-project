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
    let checkMovements = (currentSquare) => {
      let all8PossibleMovements = [
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
      ];
      all8PossibleMovements.forEach((movement) => {
        //check for each movement if the current square can move to it
        let horizontalTotal = currentSquare.coordinates[0] + movement[0];
        let verticalTotal = currentSquare.coordinates[1] + movement[1];
        let destCoordinates = [horizontalTotal, verticalTotal];
        if (
          horizontalTotal <= boardEnd &&
          verticalTotal <= boardEnd &&
          horizontalTotal >= 0 &&
          verticalTotal >= 0
        ) {
          let createEdge = (currentSquare, destCoordinates) => {
            //need to compare the destination coordinates with every square to find the square and link it
            this.squareArr.forEach((element) => {
              if (
                JSON.stringify(destCoordinates) ==
                JSON.stringify(element.coordinates)
              ) {
                currentSquare.canMoveTo.push(element);
              }
            });
          };
          createEdge(currentSquare, destCoordinates);
        }
      });
    };
    this.squareArr.forEach((element) => {
      //first function to be called
      checkMovements(element, boardEnd, this.squareArr);
    });
  }
  knightMove(startingPt, destination) {
    let findCoordMatchingSqr = (coordinates) => {
      let matchingSqr = null;
      this.squareArr.forEach((square) => {
        if (JSON.stringify(coordinates) == JSON.stringify(square.coordinates)) {
          matchingSqr = square;
          return;
        }
      });
      return matchingSqr;
    };
    let IsCoordValid = (sqrToCheck) => {
      //store the function in a value to access this in function scope
      let coordinatesJSON = JSON.stringify(sqrToCheck);
      let squareFound = false;
      this.squareArr.forEach((element) => {
        if (squareFound) {
          return squareFound;
        }
        let currSqrCoordJSON = JSON.stringify(element.coordinates);
        if (coordinatesJSON == currSqrCoordJSON) {
          squareFound = true;
          return;
        }
      });
      return squareFound;
    };
    let move = (currentSqr, nextSqr) => {
      currentSqr.canMoveTo.forEach((element) => {
        if (element === nextSqr) {
          console.log(
            `can move from ${currSqrObj.coordinates} to ${nextSqr.coordinates}`,
          );
        }
      });
    };
    if (!IsCoordValid(startingPt) || !IsCoordValid(destination)) {
      throw new Error("Invalid coordinates");
    }

    let currSqrObj = findCoordMatchingSqr(startingPt);
    let nextSqrObj = findCoordMatchingSqr(destination);
    move(currSqrObj, nextSqrObj);
  }
}

let board = new ChessBoard(3);
board.knightMove([0, 0], [1, 2]);
board.knightMove([1, 2], [2, 0]);
console.log(board);
