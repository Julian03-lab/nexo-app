import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const CarreersIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.fill || "#000"}
      d="M11.8166 3.26422C11.5169 3.09966 11.1538 3.09966 10.8541 3.26422L0.798645 8.78486C0.452748 8.97477 0.452836 9.47174 0.798799 9.66152L3.86242 11.3421C4.02247 11.4299 4.12195 11.5979 4.12195 11.7805V17.1162C4.12195 17.4811 4.32069 17.817 4.64051 17.9926L10.8539 21.4056C11.1538 21.5702 11.517 21.5702 11.8168 21.4056L18.0302 17.9926C18.35 17.817 18.5488 17.4811 18.5488 17.1162V11.7805C18.5488 11.5979 18.6482 11.4299 18.8083 11.3421L20.6097 10.3539V16.5211C20.6097 17.0734 21.0575 17.5211 21.6097 17.5211H21.6707C22.223 17.5211 22.6707 17.0734 22.6707 16.5211V9.51922C22.6707 9.33674 22.5713 9.16875 22.4113 9.08093L11.8166 3.26422ZM18.3633 9.22333L11.3354 13.0818L4.30744 9.22333L11.3354 5.36487L18.3633 9.22333ZM16.4878 16.4839L11.3354 19.3051L6.18292 16.4839V12.6151L11.0945 15.3143C11.2445 15.3967 11.4262 15.3967 11.5762 15.3143L16.4878 12.6151V16.4839Z"
    />
  </Svg>
);

export const SugerenceIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.fill || "#000"}
      fillRule="evenodd"
      d="M3 5a2 2 0 0 1 2-2h13.3a2 2 0 0 1 2 2v10.8a2 2 0 0 1-2 2h-2.527l-2.459 2.459a2 2 0 0 1-2.828 0L8.027 17.8H5a2 2 0 0 1-2-2V5Zm2.8-.2a1 1 0 0 0-1 1V15a1 1 0 0 0 1 1h2.973l3.127 3.127L15.027 16H17.5a1 1 0 0 0 1-1V5.8a1 1 0 0 0-1-1H5.8Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.fill || "#000"}
      fillRule="evenodd"
      d="M15.5 11a.9.9 0 0 1-.9.9H8.9a.9.9 0 1 1 0-1.8h5.7a.9.9 0 0 1 .9.9Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const HeadingsIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.fill || "#000"}
      d="M13.2 7.36842V5.68421H9.8V7.36842H13.2ZM4.7 9.89474V17.4737C4.7 17.9368 5.0825 18.3158 5.55 18.3158H17.45C17.9175 18.3158 18.3 17.9368 18.3 17.4737V9.89474C18.3 9.43158 17.9175 9.05263 17.45 9.05263H5.55C5.0825 9.05263 4.7 9.43158 4.7 9.89474ZM18.3 7.36842C19.2435 7.36842 20 8.1179 20 9.05263V18.3158C20 19.2505 19.2435 20 18.3 20H4.7C3.7565 20 3 19.2505 3 18.3158L3.0085 9.05263C3.0085 8.1179 3.7565 7.36842 4.7 7.36842H8.1V5.68421C8.1 4.74947 8.8565 4 9.8 4H13.2C14.1435 4 14.9 4.74947 14.9 5.68421V7.36842H18.3Z"
    />
  </Svg>
);

export const BackArrowIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.fill || "#000"}
      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
    />
  </Svg>
);

export const IconArrow = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.fill || "#000"}
      d="M21.3068 7.68952L11.9991 16.9972L2.69141 7.68952L3.75488 6.62605L11.9991 14.8703L20.2433 6.62605L21.3068 7.68952Z"
    />
  </Svg>
);
