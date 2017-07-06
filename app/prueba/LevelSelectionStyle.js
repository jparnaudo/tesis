import {StyleSheet} from 'react-native';
import Metrics from './Metrics'

const style = StyleSheet.create({

  list: {
    backgroundColor: '#3e9184',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  btn: {
    flexDirection: 'column',
    width: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    height: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    margin: Metrics.LEVEL_SELECTION_BUTTON_MARGIN,
    borderColor: '#3e9184',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnBeginner: {
    backgroundColor: '#64963a',
  },
  btnIntermediate: {
    backgroundColor: '#d4b727',
  },
  btnAdvanced: {
    backgroundColor: '#bb7722',
  },
  btnExpert: {
    backgroundColor: '#710809',
  },

  btnTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
  },

  levelCompletedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
  },

  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

export default style;
