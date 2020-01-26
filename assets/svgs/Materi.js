/* eslint-disable no-unused-vars */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgMateri = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19 2.01001H6C4.794 2.01001 3 2.80901 3 5.01001V19.01C3 21.211 4.794 22.01 6 22.01H21V20.01H6.012C5.55 19.998 5 19.815 5 19.01C5 18.909 5.009 18.819 5.024 18.737C5.136 18.162 5.607 18.02 6.011 18.01H20C20.018 18.01 20.031 18.001 20.049 18H21V4.01001C21 2.90701 20.103 2.01001 19 2.01001ZM19 16.01H5V5.01001C5 4.20401 5.55 4.02201 6 4.01001H13V11.01L15 10.01L17 11.01V4.01001H19V16.01Z"
      fill="#F93939"
    />
  </Svg>
);

export default SvgMateri;
