import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

// eslint-disable-next-line no-unused-vars
const SvgMateria = props => (
  <Svg width="50" height="53" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16 0.0100098H3C1.794 0.0100098 0 0.80901 0 3.01001V17.01C0 19.211 1.794 20.01 3 20.01H18V18.01H3.012C2.55 17.998 2 17.815 2 17.01C2 16.909 2.009 16.819 2.024 16.737C2.136 16.162 2.607 16.02 3.011 16.01H17C17.018 16.01 17.031 16.001 17.049 16H18V2.01001C18 0.90701 17.103 0.0100098 16 0.0100098ZM16 14.01H2V3.01001C2 2.20401 2.55 2.02201 3 2.01001H10V9.01001L12 8.01001L14 9.01001V2.01001H16V14.01Z"
      fill="white"
    />
  </Svg>
);

export default SvgMateria;
