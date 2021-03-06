import CarImage from "../img/CarImages";
import RushHourPiece from './RushHourPiece';

export default class HorizontalVehicle extends RushHourPiece {
  constructor(id, x = 0, y = 0, board, color, orientation = 'left', vehicleType) {
    let image = CarImage.for(vehicleType.typeName, color, orientation);
    super(id, x, y, vehicleType.lengthInTiles, 1, board, image);
  }

  setPosition(x, y) {
    this.x = x;
  }
}
