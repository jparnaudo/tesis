/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import RushHourMainView from './rush-hour/view/RushHourMainView'
import RushHourLevelView from './rush-hour/view/RushHourLevelView';
import RushHourSuccessScreenView from './rush-hour/view/RushHourSuccessScreenView';
import ZoologicMainView from './zoologic/view/ZoologicMainView';
import GameSelectionView from './GameSelectionView';
import ZoologicLevelView from './zoologic/view/ZoologicLevelView';
import ZoologicSuccessScreenView from './zoologic/view/ZoologicSuccessScreenView';
import LevelSelectionView from './LevelSelectionView';
import ZoologicLevels from './zoologic/model/ZoologicLevels';
import RushHourLevels from './rush-hour/model/RushHourLevels';
import zoologicStyle from './zoologic/style/ZoologicLevelSelectionStyle'
import rushHourStyle from './rush-hour/style/RushHourLevelSelectionStyle'

export default class Navigation extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'game-selection', levelNumber: 1}}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'game-selection':
        return (<GameSelectionView navigator={navigator} />);

      case 'rush-hour-main':
        return (<RushHourMainView navigator={navigator} />);
      case 'rush-hour-lvl':
        return (<RushHourLevelView navigator={navigator} levelNumber={route.levelNumber}/>);
      case 'rush-hour-success-screen':
        return (<RushHourSuccessScreenView navigator={navigator} actualLevelNumber={route.levelNumber}/>);
      case 'rush-hour-level-selection':
        return (<LevelSelectionView levels={RushHourLevels.LEVELS} navigator={navigator} levelSelectionRouteId="rush-hour-lvl" backRouteId='rush-hour-main' style={rushHourStyle}/>);

      case 'zoologic-main':
        return (<ZoologicMainView navigator={navigator}/>);
      case 'zoologic-lvl':
        return (<ZoologicLevelView navigator={navigator} levelNumber={route.levelNumber}/>);
      case 'zoologic-success-screen':
        return (<ZoologicSuccessScreenView navigator={navigator} actualLevelNumber={route.levelNumber}/>);
      case 'zoologic-level-selection':
        return (<LevelSelectionView levels={ZoologicLevels.LEVELS} navigator={navigator} levelSelectionRouteId="zoologic-lvl" backRouteId='zoologic-main' style={zoologicStyle}/>);
    }
  }

}
