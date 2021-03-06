import {Dimensions, Platform} from 'react-native';
var {width, height} = Dimensions.get('window');

const DEVICE_HEIGHT = height;
const DEVICE_WIDTH = width;
const IS_ANDROID = Platform.OS === 'android';

const NAV_BAR_HEIGHT = DEVICE_HEIGHT * 0.07;
const NAV_BAR_WIDTH = DEVICE_WIDTH;

const BOARD_MARGIN_TOP = 80;
const BOARD_WIDTH = DEVICE_WIDTH;
const TILE_SIZE = DEVICE_WIDTH / 7;
const BOARD_HEIGHT = TILE_SIZE * 6;
const BOARD_MARGIN = TILE_SIZE / 2;

const TILE_SHADOW_DEPTH = 6;
const TILE_BORDER_RADIUS = TILE_SIZE * 0.27;
const MAX_SPACE_IN_BETWEEN_TILES = TILE_SIZE * 0.1;

const BUTTONS_PER_ROW = 3;
const LEVEL_SELECTION_BUTTON_MARGIN = 10;
const LEVEL_SELECTION_BUTTON_WIDTH = (DEVICE_WIDTH - BUTTONS_PER_ROW * 2 * LEVEL_SELECTION_BUTTON_MARGIN)/BUTTONS_PER_ROW;

const ZOOLOGIC_SQUARE_SIZE = DEVICE_WIDTH / 6;
const ZOOLOGIC_PIECES_BAR_PADDING = 5;
const ZOOLOGIC_PIECES_BAR_WIDTH = DEVICE_WIDTH;
const ZOOLOGIC_PIECES_BAR_HEIGHT = ZOOLOGIC_SQUARE_SIZE * 4 + ZOOLOGIC_PIECES_BAR_PADDING * 4;

const RUSH_HOUR_DIMENSIONS = {
  tileSize: TILE_SIZE,
  maxSpaceInBetweenTiles: MAX_SPACE_IN_BETWEEN_TILES,
  boardWidth: BOARD_WIDTH,
  boardHeight: BOARD_HEIGHT
};

export default {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  NAV_BAR_HEIGHT,
  NAV_BAR_WIDTH,
  IS_ANDROID,

  LEVEL_SELECTION_BUTTON_WIDTH,
  LEVEL_SELECTION_BUTTON_MARGIN,

  BOARD_MARGIN,
  BOARD_MARGIN_TOP,
  BOARD_WIDTH,
  TILE_SIZE,
  BOARD_HEIGHT,

  TILE_SHADOW_DEPTH,
  TILE_BORDER_RADIUS,
  MAX_SPACE_IN_BETWEEN_TILES,

  ZOOLOGIC_PIECES_BAR_PADDING,
  ZOOLOGIC_PIECES_BAR_WIDTH,
  ZOOLOGIC_PIECES_BAR_HEIGHT,
  ZOOLOGIC_SQUARE_SIZE,

  RUSH_HOUR_DIMENSIONS
};
