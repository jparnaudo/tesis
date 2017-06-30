import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from './LevelNavBarStyle'
import LevelMenuModal from './LevelMenuModal';

export default class LevelNavBarView extends Component {

  constructor(props){
    super(props);
    this.title = 'Nivel ' + props.levelNumber;
  }

  render() {

    return (
    <View>
      <View style={style.container}>
        <LevelMenuModal navigator={this.props.navigator} levelNumber={this.props.levelNumber}/>
        <Text style={style.content}>{this.title}</Text>
      </View>
    </View>
    )
  }
}
