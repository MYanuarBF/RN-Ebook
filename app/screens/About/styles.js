/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  person: {
    elevation: 3,
    position: 'relative',
    backgroundColor: '#ffffff',
    width: scale(320),
    height: scale(60),
    marginLeft: METRICS.tripleSmallMargin,
    marginTop: METRICS.doubleBaseMargin,
    borderRadius: scale(5),
    flexDirection: 'row'
  },
  personRole: {
    width: scale(70),
    height: scale(15),
    backgroundColor: '#F93939',
    borderRadius: scale(5),
    marginTop: METRICS.smallMargin
  },
  personRoleText: {
    fontSize: scale(8),
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: scale(2)
  },
  personInfo: {
    fontSize: scale(13),
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.baseMargin
  },
  aboutImg: {
    width: scale(50),
    height: scale(50),
    marginLeft: METRICS.doubleBaseMargin,
    marginTop: scale(10)
  }
});

export default styles;
