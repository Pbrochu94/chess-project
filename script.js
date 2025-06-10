class ChessBoard {
  constructor(size) {
    this.vertical = size;
    this.horizontal = size;
    this.squareArr = [];
    this.buildBoard();
  }
  buildBoard() {
    for (let vertical = 0; vertical < this.horizontal; vertical++) {
      for (let horizontal = 0; horizontal < this.vertical; horizontal++) {
        this.squareArr.push([vertical, horizontal]);
      }
    }
  }
}

let board = new ChessBoard(8);
