/* eslint-disable no-unused-vars */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgSoala = props => (
  <Svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10.07 10H5.06999C4.80478 10 4.55042 10.1054 4.36289 10.2929C4.17535 10.4804 4.07 10.7348 4.07 11C4.07 11.2652 4.17535 11.5196 4.36289 11.7071C4.55042 11.8946 4.80478 12 5.06999 12H10.07C10.3352 12 10.5896 11.8946 10.7771 11.7071C10.9646 11.5196 11.07 11.2652 11.07 11C11.07 10.7348 10.9646 10.4804 10.7771 10.2929C10.5896 10.1054 10.3352 10 10.07 10ZM11.07 18H3.07C2.80478 18 2.55042 17.8946 2.36289 17.7071C2.17535 17.5196 2.07 17.2652 2.07 17V3C2.07 2.73478 2.17535 2.48043 2.36289 2.29289C2.55042 2.10536 2.80478 2 3.07 2H8.06999V5C8.06999 5.79565 8.38607 6.55871 8.94868 7.12132C9.51128 7.68393 10.2743 8 11.07 8H14.07V9C14.07 9.26522 14.1754 9.51957 14.3629 9.70711C14.5504 9.89464 14.8048 10 15.07 10C15.3352 10 15.5896 9.89464 15.7771 9.70711C15.9646 9.51957 16.07 9.26522 16.07 9V7C16.0743 6.98024 16.0743 6.95976 16.07 6.94C16.0615 6.84679 16.0379 6.75559 16 6.67V6.58C15.9519 6.47718 15.8878 6.38267 15.81 6.3L9.81 0.3C9.72513 0.220265 9.62699 0.155965 9.52 0.11H9.43999C9.34145 0.0529776 9.23277 0.0156205 9.12 0H3.12C2.32435 0 1.56128 0.316071 0.998675 0.87868C0.436066 1.44129 0.119995 2.20435 0.119995 3V17C0.119995 17.7956 0.436066 18.5587 0.998675 19.1213C1.56128 19.6839 2.32435 20 3.12 20H11.12C11.3852 20 11.6396 19.8946 11.8271 19.7071C12.0146 19.5196 12.12 19.2652 12.12 19C12.12 18.7348 12.0146 18.4804 11.8271 18.2929C11.6396 18.1054 11.3852 18 11.12 18H11.07ZM10.07 3.41L12.65 6H11.07C10.8048 6 10.5504 5.89464 10.3629 5.70711C10.1754 5.51957 10.07 5.26522 10.07 5V3.41ZM15.64 18.29C15.5925 18.247 15.5424 18.2069 15.49 18.17C15.3801 18.0986 15.2581 18.0477 15.13 18.02C14.9693 17.9878 14.8032 17.9956 14.6463 18.0427C14.4894 18.0898 14.3464 18.1747 14.23 18.29C14.1363 18.383 14.0619 18.4936 14.0111 18.6154C13.9603 18.7373 13.9342 18.868 13.9342 19C13.9342 19.132 13.9603 19.2627 14.0111 19.3846C14.0619 19.5064 14.1363 19.617 14.23 19.71C14.4163 19.8947 14.6677 19.9989 14.93 20C15.0946 20.0008 15.2569 19.961 15.4024 19.884C15.548 19.8071 15.6723 19.6954 15.7643 19.5589C15.8563 19.4223 15.9132 19.2652 15.9299 19.1014C15.9466 18.9377 15.9226 18.7723 15.86 18.62C15.8056 18.4985 15.7313 18.3869 15.64 18.29ZM10.07 14H5.06999C4.80478 14 4.55042 14.1054 4.36289 14.2929C4.17535 14.4804 4.07 14.7348 4.07 15C4.07 15.2652 4.17535 15.5196 4.36289 15.7071C4.55042 15.8946 4.80478 16 5.06999 16H10.07C10.3352 16 10.5896 15.8946 10.7771 15.7071C10.9646 15.5196 11.07 15.2652 11.07 15C11.07 14.7348 10.9646 14.4804 10.7771 14.2929C10.5896 14.1054 10.3352 14 10.07 14ZM14.93 11C14.4031 10.9997 13.8853 11.1381 13.4289 11.4014C12.9725 11.6648 12.5935 12.0437 12.33 12.5C12.2643 12.6143 12.2218 12.7403 12.2049 12.871C12.1879 13.0017 12.1969 13.1344 12.2313 13.2616C12.2656 13.3888 12.3247 13.508 12.4051 13.6124C12.4855 13.7168 12.5857 13.8043 12.7 13.87C12.8142 13.9357 12.9403 13.9782 13.071 13.9951C13.2017 14.0121 13.3344 14.0031 13.4616 13.9687C13.5888 13.9344 13.708 13.8753 13.8124 13.7949C13.9168 13.7144 14.0043 13.6143 14.07 13.5C14.1579 13.3478 14.2844 13.2214 14.4367 13.1336C14.589 13.0458 14.7617 12.9998 14.9375 13C15.1133 13.0003 15.2859 13.0469 15.438 13.1351C15.59 13.2234 15.7161 13.3501 15.8035 13.5026C15.891 13.6551 15.9367 13.828 15.936 14.0038C15.9353 14.1796 15.8884 14.3521 15.7998 14.5039C15.7112 14.6558 15.5841 14.7816 15.4314 14.8687C15.2787 14.9558 15.1058 15.0011 14.93 15C14.6648 15 14.4104 15.1054 14.2229 15.2929C14.0354 15.4804 13.93 15.7348 13.93 16C13.93 16.2652 14.0354 16.5196 14.2229 16.7071C14.4104 16.8946 14.6648 17 14.93 17C15.7256 17 16.4887 16.6839 17.0513 16.1213C17.6139 15.5587 17.93 14.7956 17.93 14C17.93 13.2044 17.6139 12.4413 17.0513 11.8787C16.4887 11.3161 15.7256 11 14.93 11ZM5.06999 8H6.06999C6.33521 8 6.58957 7.89464 6.7771 7.70711C6.96464 7.51957 7.06999 7.26522 7.06999 7C7.06999 6.73478 6.96464 6.48043 6.7771 6.29289C6.58957 6.10536 6.33521 6 6.06999 6H5.06999C4.80478 6 4.55042 6.10536 4.36289 6.29289C4.17535 6.48043 4.07 6.73478 4.07 7C4.07 7.26522 4.17535 7.51957 4.36289 7.70711C4.55042 7.89464 4.80478 8 5.06999 8Z"
      fill="black"
    />
  </Svg>
);

export default SvgSoala;
