import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: scale(20),
    paddingBottom: 20
  },
  text: {
    flex: 1,
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: COLOR_BLACK,
    justifyContent: 'flex-start',
    marginTop: scale(36),
    marginHorizontal: scale(38)
  },
  textDesc: {
    fontSize: 12,
    marginLeft: scale(38),
    marginRight: scale(33),
    marginBottom: scale(36)
  },
  greet: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 50,
    paddingTop: 50
  },
  greetTitle: {
    fontSize: 30,
    fontFamily: 'Gotham',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    color: COLOR_BLACK,
    fontWeight: 'bold'
  },
  greetStyle: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  bar: {
    width: 10,
    height: 90,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 20
  },
  h2: {
    color: '#0f0f0f',
    paddingLeft: 20
  },
  h3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 20
  },
  image: {
    width: 400,
    height: 250,
    resizeMode: 'cover'
  },
  btn: {
    paddingHorizontal: 10
  },
  btn1: {
    paddingTop: 10
  }
});
