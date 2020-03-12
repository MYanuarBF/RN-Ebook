/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: scale(20)
  },
  content: {
    paddingVertical: scale(90),
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  cardwide: {
    marginTop: scale(30),
    backgroundColor: '#FF6060',
    height: scale(100),
    width: scale(300),
    borderRadius: 10
  },
  cardsmall: {
    marginTop: scale(30),
    backgroundColor: '#FF6060',
    height: scale(100),
    width: scale(140),
    borderRadius: 10
  },
  cardslim: {
    marginTop: scale(30),
    backgroundColor: '#FF6060',
    height: scale(50),
    width: scale(140),
    borderRadius: 10
  },
  titleCard: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold'
  },
  title: {
    fontSize: 18
  }
});

export default styles;
