import React, {Component} from 'react';
import {View, Image, PanResponder, Animated} from 'react-native';
import {observer} from 'mobx-react/native'

@observer
export default class RushHourPieceView extends Component {
  constructor(props) {
    super(props);
    this._setupPanResponder();
    this.state = {scale: new Animated.Value(1)};
  }

  render() {

    const width = this.props.area.width;
    const height = this.props.area.height;

    return (

      <Animated.Image {...this._panResponder.panHandlers}
                      style={{
                        width: width, height: height, left: this._currentX(), top: this._currentY(),
                        position: 'absolute',
                        transform: [{rotate: '0deg'}, {scale: this.state.scale}]
                      }}
                      source={this.props.area.image}
      />
    )
  }

  _currentX() {
    return this.props.area.x;
  }

  _currentY() {
    return this.props.area.y;
  }

  _setupPanResponder() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (_evt, gestureState) => {
        this._scaleDown();

        this.gestureStartX = this._currentX();
        this.gestureStartY = this._currentY();
      },
      onPanResponderMove: (evt, gestureState) => {
        let newX = this.gestureStartX + gestureState.dx;
        let newY = this.gestureStartY + gestureState.dy;
        this.props.area.pushTowards(newX, newY);
      },
      onPanResponderRelease: (e, gestureState) => {
        this.props.area.snapYoAss();
        this._scaleUp();
      }
    });
  }

  _scaleDown() {
    Animated.spring(
      this.state.scale,
      {toValue: 0.96, friction: 3}
    ).start();
  }

  _scaleUp() {
    Animated.spring(
      this.state.scale,
      {toValue: 1, friction: 3}
    ).start();
  }
}
