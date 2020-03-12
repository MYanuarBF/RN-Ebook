import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';

import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  video: {
    paddingLeft: scale(11)
  }
});

export default styles;
