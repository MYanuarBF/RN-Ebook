/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import metrics from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  item: {
    width: metrics.screenWidth,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 18
  }
});

export default styles;
