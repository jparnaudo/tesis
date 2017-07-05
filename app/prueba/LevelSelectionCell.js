import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PlayerResults from './PlayerResults';

export default class LevelSelectionCell extends Component {
  constructor(props) {
    super(props);
    this.navigator = props.navigator;
    this.level = props.level
  }

  render() {
    return(
      <TouchableHighlight onPress={() => { this.chooseLevel() }}>
        <View>
          <Text>{`${this.level.levelNumber} - ${this.level.difficulty}       ${this.levelCompletedTick()}`}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  levelCompletedTick() {
    if (PlayerResults.levelCompleted(this.level.levelNumber)) {
      return '☑'
    } else {
      return ''
    }
  }

  chooseLevel() {
    this.props.navigator.push({
      id: 'rush-hour-lvl',
      levelNumber: this.level.levelNumber
    });
  }
}