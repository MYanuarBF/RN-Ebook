import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    paddingVertical: 20
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  appTitle: {
    fontFamily: 'Gotham',
    fontSize: 40,
    color: COLOR_BLACK,
    marginBottom: METRICS.doubleSection
  },
  greet: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 125,
    paddingTop: 50
  },
  greetTitle: {
    fontSize: 50,
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
  login: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontFamily: 'Gotham',
    color: COLOR_BLACK,
    paddingHorizontal: 20
  },
  bar: {
    width: 10,
    height: 70,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  forgetPass: {
    alignSelf: 'flex-end',
    marginRight: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection
  },
  margin: { marginBottom: METRICS.baseMargin },
  outlined: { backgroundColor: COLOR_WHITE, borderColor: COLOR_BASE_PRIMARY_MAIN, borderWidth: 2 },
  outlinedText: { color: COLOR_BASE_PRIMARY_MAIN },
  btnLogin: {
    paddingTop: 10
  }
});

export default styles;
