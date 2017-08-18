import {observable, autorun} from 'mobx';
import Metrics from '../Metrics';

export default class ZoologicSquare {

  constructor(x = 0, y = 0, type = 'black', squareNumber, squares) {
    this.x = x;
    this.y = y;
    this.width = Metrics.ZOOLOGIC_SQUARE_SIZE;
    this.height = Metrics.ZOOLOGIC_SQUARE_SIZE;
    this.type = type;
    this.generateKey(x, y);
    this.squareNumber = squareNumber;
    this.squares = squares;
  }

  allows(pieceType) {
    if (this.type === 'black') return false;
    else {
      let neighboursDontAllow = this.getNeighbours().map(square => square.canBeAdjacentTo(pieceType)).includes(false);
      return !neighboursDontAllow;
    }
  }

  canBeAdjacentTo(pieceType){
    return this.type === 'black' || this.type === pieceType;
  }

  generateKey(i, j) {
    this.key = 'square-' + i + '-' + j;
  }

  getNeighbours() {
    let neighbours = [this.leftNeighbour(), this.rightNeighbour(), this.topNeighbour(), this.bottomNeighbour()];
    return neighbours.filter(x => x);
  }

  leftNeighbour() {
    if ([0, 5, 10, 15, 20].includes(this.squareNumber)) return null;
    return this.squares[this.squareNumber - 1];
  }

  rightNeighbour() {
    if ([4, 9, 14, 19, 24].includes(this.squareNumber)) return null;
    return this.squares[this.squareNumber + 1];
  }

  topNeighbour() {
    if (this.squareNumber < 5) return null;
    return this.squares[this.squareNumber - 5];
  }

  bottomNeighbour() {
    if (this.squareNumber >= 20) return null;
    return this.squares[this.squareNumber + 5];
  }
}
