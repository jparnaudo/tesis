import React, {Component, PropTypes} from "react";
import {View, Text, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MAX_LEVEL_NUMBER} from './RushHourLevels'
import style from "./RushHourSuccessScreenStyle"

export default class RushHourSuccessScreenView extends React.Component {


  render() {
    return (
      <View style={style.container}>

        <Text style={style.content}>Nivel {this.props.actualLevelNumber} finalizado</Text>

        <Icon.Button name="replay" size={25} style={style.btn} onPress={() => {this.replayLevel()}} >
          <Text style={style.btnText}>Volver a jugar</Text>
        </Icon.Button>

        {this.nextLevelButton()}

        <Icon.Button name="list" size={25} style={style.btn} onPress={() => this._levelSelectionMenu()} >
          <Text style={style.btnText}>Seleccion de niveles</Text>
        </Icon.Button>

      </View>
    );
  }

  nextLevelButton() {
    let nextLevelButton = null;
    if (this.props.nextLevelNumber <= MAX_LEVEL_NUMBER) {
      nextLevelButton = <Icon.Button name="play-arrow" size={25} style={style.btn} onPress={() => {this.chooseLevel(this.props.nextLevelNumber)}} >
        <Text style={style.btnText}>Siguiente nivel</Text>
      </Icon.Button>;
    }
    return nextLevelButton;
  }

  chooseLevel(levelNumber) {
    this.props.navigator.resetTo({
      id: 'rush-hour-lvl',
      levelNumber: levelNumber
    });
  }

  replayLevel() {
    this.chooseLevel(this.props.actualLevelNumber);
  }

  _levelSelectionMenu() {
    this.props.navigator.resetTo({id: 'rush-hour-level-selection'});
  }
}