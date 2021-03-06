import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import {autorun} from 'mobx';
import {observer} from "mobx-react/native"
import style from '../style/ZoologicLevelStyle'
import LevelNavBarView from './LevelNavBarView';
import ZoologicBoardView from "./ZoologicBoardView";
import ZoologicBoardInitializer from "../model/ZoologicBoardInitializer";

@observer
export default class ZoologicLevelView extends React.Component {

  constructor(props) {
    super(props);
    this.board = new ZoologicBoardInitializer(this.props.levelNumber).getBoard();
    autorun(() => this.transitionToSuccessScreen());
  }

  render() {
    return (
      <View style={style.container}>
        <LevelNavBarView navigator={this.props.navigator} levelNumber={this.props.levelNumber} />
        <ZoologicBoardView board={this.board}/>
      </View>
    );
  }

  transitionToSuccessScreen() {
    if(this.board.playerHasWon) {
      this.props.navigator.push({id: 'zoologic-success-screen', levelNumber: this.props.levelNumber});
    }
  }

}
