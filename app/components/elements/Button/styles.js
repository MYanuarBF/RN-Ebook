import { StyleSheet } from 'react-native';

import {
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_WHITE,
  COLOR_FONT_PRIMARY_RED
} from '../../../styles';

const container = {
  width: 340,
  height: 48,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 30,
  borderWidth: 2,
  borderColor: COLOR_BASE_PRIMARY_MAIN
};

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: COLOR_WHITE
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent'
  },
  containerPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  text: {
    color: COLOR_FONT_PRIMARY_RED
  },
  textDisabled: {
    color: COLOR_FONT_PRIMARY_RED
  },
  textPressed: {
    color: COLOR_FONT_PRIMARY_RED
  },
  button: {
    lineHeight: 40
  },
  buttonPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  buttonDisabled: {}
});
