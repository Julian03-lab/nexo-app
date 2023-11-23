import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

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
      d="M16.3077 21.3577L7 12.05L16.3077 2.74228L17.3712 3.80575L9.12692 12.05L17.3712 20.2942L16.3077 21.3577Z"
      fill="#767575"
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

export const GoogleIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M24 12.8158C24 11.9991 23.932 11.1825 23.7959 10.3825H12.2487V14.999H18.8641C18.592 16.4823 17.7077 17.8156 16.4152 18.6489V21.6488H20.3607C22.6735 19.5655 24 16.4823 24 12.8158Z"
      fill="#4285F4"
    />
    <Path
      d="M12.2491 24.5488C15.5484 24.5488 18.3369 23.4821 20.3607 21.6488L16.4152 18.6489C15.3098 19.3822 13.8987 19.799 12.2491 19.799C9.05196 19.799 6.34796 17.6824 5.3786 14.8491H1.31411V17.949C3.38887 21.9989 7.62343 24.5488 12.2491 24.5488Z"
      fill="#34A853"
    />
    <Path
      d="M5.3786 14.8491C4.86833 13.3659 4.86882 11.7492 5.37909 10.2492V7.166H1.31394C-0.437981 10.5492 -0.437981 14.5491 1.31394 17.9323L5.3786 14.8491Z"
      fill="#FBBC04"
    />
    <Path
      d="M12.2491 5.2994C14.0008 5.26606 15.6844 5.91604 16.9429 7.09934L20.4462 3.66612C18.2183 1.63285 15.2933 0.516221 12.2491 0.549553C7.62343 0.549553 3.38871 3.11613 1.31394 7.166L5.3786 10.2659C6.34796 7.41599 9.05196 5.2994 12.2491 5.2994Z"
      fill="#EA4335"
    />
  </Svg>
);

export const LinkedinIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M22.25 1.11141H2.75C2.30756 1.10691 1.8814 1.27811 1.56504 1.58745C1.24867 1.89678 1.06794 2.31898 1.0625 2.76141V22.3402C1.06892 22.7819 1.25009 23.2032 1.56634 23.5117C1.8826 23.8202 2.3082 23.9909 2.75 23.9864H22.25C22.6925 23.9899 23.1183 23.8181 23.4345 23.5086C23.7507 23.1991 23.9316 22.777 23.9375 22.3345V2.75579C23.9296 2.31466 23.7479 1.89447 23.4319 1.58655C23.1159 1.27864 22.6912 1.10789 22.25 1.11141Z"
      fill="#0076B2"
    />
    <Path
      d="M4.44871 9.68555H7.84434V20.6112H4.44871V9.68555ZM6.14746 4.24805C6.53692 4.24805 6.91764 4.36356 7.24144 4.57997C7.56523 4.79638 7.81757 5.10397 7.96653 5.46382C8.11548 5.82367 8.15436 6.21962 8.07824 6.60157C8.00213 6.98352 7.81444 7.33432 7.53891 7.60958C7.26339 7.88484 6.91242 8.07219 6.5304 8.14795C6.14837 8.2237 5.75246 8.18444 5.39275 8.03515C5.03304 7.88585 4.7257 7.63322 4.50959 7.30921C4.29349 6.98521 4.17834 6.60438 4.17871 6.21492C4.17921 5.6931 4.38685 5.19282 4.75601 4.82402C5.12517 4.45521 5.62564 4.24805 6.14746 4.24805ZM9.97434 9.68555H13.2293V11.1855H13.2743C13.7281 10.3268 14.8343 9.42117 16.4862 9.42117C19.925 9.41367 20.5625 11.6768 20.5625 14.6112V20.6112H17.1668V15.2955C17.1668 14.0299 17.1443 12.4005 15.4025 12.4005C13.6606 12.4005 13.3643 13.7805 13.3643 15.213V20.6112H9.97434V9.68555Z"
      fill="white"
    />
  </Svg>
);

export const EyeOff = (props) => (
  <Svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <Path
      d="M10.4834 9.56566L9.75008 8.83232C10.039 8.04344 9.88897 7.38788 9.30008 6.86566C8.71119 6.34344 8.0723 6.2101 7.38342 6.46566L6.65008 5.73232C6.83897 5.6101 7.05008 5.52121 7.28341 5.46566C7.51675 5.4101 7.75564 5.38232 8.00008 5.38232C8.78897 5.38232 9.45842 5.65732 10.0084 6.20732C10.5584 6.75732 10.8334 7.42677 10.8334 8.21566C10.8334 8.4601 10.8029 8.70177 10.7417 8.94066C10.6806 9.17955 10.5945 9.38788 10.4834 9.56566ZM12.6334 11.7157L11.9667 11.049C12.5112 10.649 12.9862 10.2018 13.3917 9.70732C13.7973 9.21288 14.0945 8.71566 14.2834 8.21566C13.7279 6.98232 12.8945 6.00732 11.7834 5.29066C10.6723 4.57399 9.46675 4.21566 8.16675 4.21566C7.70008 4.21566 7.2223 4.2601 6.73342 4.34899C6.24453 4.43788 5.86119 4.54344 5.58342 4.66566L4.81675 3.88232C5.20564 3.70455 5.70286 3.54899 6.30841 3.41566C6.91397 3.28232 7.50564 3.21566 8.08342 3.21566C9.6723 3.21566 11.1251 3.66844 12.4417 4.57399C13.7584 5.47955 14.7223 6.69344 15.3334 8.21566C15.0445 8.92677 14.6723 9.57677 14.2167 10.1657C13.7612 10.7545 13.2334 11.2712 12.6334 11.7157ZM13.6001 15.4823L10.8001 12.7323C10.4112 12.8879 9.9723 13.0073 9.48342 13.0907C8.99453 13.174 8.50008 13.2157 8.00008 13.2157C6.37786 13.2157 4.90564 12.7629 3.58341 11.8573C2.26119 10.9518 1.28897 9.73788 0.666748 8.21566C0.88897 7.63788 1.1973 7.07399 1.59175 6.52399C1.98619 5.97399 2.46675 5.44899 3.03341 4.94899L0.933415 2.84899L1.63341 2.13232L14.2501 14.749L13.6001 15.4823ZM3.71675 5.64899C3.30564 5.94899 2.90841 6.34344 2.52508 6.83232C2.14175 7.32121 1.86675 7.78232 1.70008 8.21566C2.26675 9.44899 3.11953 10.424 4.25841 11.1407C5.3973 11.8573 6.68897 12.2157 8.13342 12.2157C8.50008 12.2157 8.86119 12.1934 9.21675 12.149C9.5723 12.1045 9.83897 12.0379 10.0167 11.949L8.95008 10.8823C8.82786 10.9379 8.67786 10.9795 8.50008 11.0073C8.3223 11.0351 8.15564 11.049 8.00008 11.049C7.2223 11.049 6.55564 10.7768 6.00008 10.2323C5.44453 9.68788 5.16675 9.01566 5.16675 8.21566C5.16675 8.04899 5.18064 7.88232 5.20842 7.71566C5.23619 7.54899 5.27786 7.39899 5.33342 7.26566L3.71675 5.64899Z"
      fill="#1F2269"
    />
  </Svg>
);

export const EyeOn = (props) => (
  <Svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <Path
      d="M8.0018 10.5003C8.78938 10.5003 9.45817 10.2247 10.0082 9.67336C10.5582 9.12206 10.8332 8.45261 10.8332 7.66503C10.8332 6.87745 10.5575 6.20866 10.0062 5.65866C9.4549 5.10866 8.78546 4.83366 7.99787 4.83366C7.21029 4.83366 6.5415 5.10931 5.9915 5.66063C5.4415 6.21193 5.1665 6.88137 5.1665 7.66896C5.1665 8.45654 5.44216 9.12533 5.99347 9.67533C6.54477 10.2253 7.21422 10.5003 8.0018 10.5003ZM7.99592 9.53366C7.47631 9.53366 7.03595 9.3518 6.67484 8.98808C6.31373 8.62434 6.13317 8.18268 6.13317 7.66308C6.13317 7.14347 6.31503 6.7031 6.67875 6.34199C7.04249 5.98088 7.48415 5.80033 8.00375 5.80033C8.52337 5.80033 8.96373 5.98219 9.32484 6.34591C9.68595 6.70964 9.8665 7.15131 9.8665 7.67091C9.8665 8.19052 9.68464 8.63088 9.32092 8.99199C8.95719 9.3531 8.51552 9.53366 7.99592 9.53366ZM7.99984 12.667C6.37762 12.667 4.91095 12.2059 3.59984 11.2837C2.28873 10.3614 1.31095 9.15588 0.666504 7.66699C1.31095 6.1781 2.28873 4.97255 3.59984 4.05033C4.91095 3.1281 6.37762 2.66699 7.99984 2.66699C9.62206 2.66699 11.0887 3.1281 12.3998 4.05033C13.7109 4.97255 14.6887 6.1781 15.3332 7.66699C14.6887 9.15588 13.7109 10.3614 12.3998 11.2837C11.0887 12.2059 9.62206 12.667 7.99984 12.667ZM7.99702 11.667C9.34334 11.667 10.5804 11.3031 11.7082 10.5753C12.8359 9.84755 13.6943 8.8781 14.2832 7.66699C13.6943 6.45588 12.8369 5.48644 11.711 4.75866C10.5851 4.03088 9.34897 3.66699 8.00265 3.66699C6.65633 3.66699 5.41928 4.03088 4.2915 4.75866C3.16373 5.48644 2.29984 6.45588 1.69984 7.66699C2.29984 8.8781 3.16279 9.84755 4.28869 10.5753C5.4146 11.3031 6.65071 11.667 7.99702 11.667Z"
      fill="#1F2269"
    />
  </Svg>
);

export const HappyFace = (props) => (
  <Svg width={58} height={58} fill="none" viewBox="0 0 58 58" {...props}>
    <Path
      d="M37.0045 25.6538C37.7563 25.6538 38.3917 25.3907 38.9107 24.8645C39.4296 24.3382 39.6891 23.6992 39.6891 22.9474C39.6891 22.1956 39.426 21.5602 38.8998 21.0413C38.3735 20.5223 37.7345 20.2628 36.9827 20.2628C36.2309 20.2628 35.5955 20.526 35.0765 21.0522C34.5575 21.5785 34.2981 22.2175 34.2981 22.9693C34.2981 23.7211 34.5612 24.3564 35.0875 24.8754C35.6137 25.3944 36.2528 25.6538 37.0045 25.6538ZM21.0173 25.6538C21.7691 25.6538 22.4045 25.3907 22.9235 24.8645C23.4425 24.3382 23.7019 23.6992 23.7019 22.9474C23.7019 22.1956 23.4388 21.5602 22.9125 21.0413C22.3863 20.5223 21.7472 20.2628 20.9955 20.2628C20.2437 20.2628 19.6083 20.526 19.0893 21.0522C18.5704 21.5785 18.3109 22.2175 18.3109 22.9693C18.3109 23.7211 18.574 24.3564 19.1002 24.8754C19.6265 25.3944 20.2655 25.6538 21.0173 25.6538ZM29 40.8045C31.3051 40.8045 33.4282 40.1686 35.3693 38.8967C37.3104 37.6249 38.7689 35.9371 39.7449 33.8333H37.3375C36.4514 35.3236 35.2733 36.5017 33.8031 37.3677C32.333 38.2337 30.7319 38.6667 29 38.6667C27.2681 38.6667 25.667 38.2337 24.1969 37.3677C22.7267 36.5017 21.5486 35.3236 20.6625 33.8333H18.2551C19.2311 35.9371 20.6896 37.6249 22.6307 38.8967C24.5718 40.1686 26.6949 40.8045 29 40.8045ZM29.0081 50.75C26.0004 50.75 23.1727 50.1793 20.525 49.0379C17.8773 47.8964 15.5741 46.3473 13.6154 44.3905C11.6569 42.4337 10.1063 40.1327 8.96378 37.4875C7.82126 34.8422 7.25 32.0157 7.25 29.0081C7.25 26.0004 7.82072 23.1727 8.96215 20.525C10.1036 17.8773 11.6527 15.5741 13.6095 13.6154C15.5663 11.6569 17.8673 10.1063 20.5125 8.96378C23.1578 7.82126 25.9843 7.25 28.9919 7.25C31.9996 7.25 34.8273 7.82072 37.475 8.96215C40.1227 10.1036 42.4259 11.6527 44.3846 13.6095C46.3431 15.5663 47.8937 17.8673 49.0362 20.5125C50.1787 23.1578 50.75 25.9843 50.75 28.9919C50.75 31.9996 50.1793 34.8273 49.0379 37.475C47.8964 40.1227 46.3473 42.4259 44.3905 44.3846C42.4337 46.3431 40.1327 47.8937 37.4875 49.0362C34.8422 50.1787 32.0157 50.75 29.0081 50.75ZM29 48.3333C34.3972 48.3333 38.9688 46.4604 42.7146 42.7146C46.4604 38.9688 48.3333 34.3972 48.3333 29C48.3333 23.6028 46.4604 19.0312 42.7146 15.2854C38.9688 11.5396 34.3972 9.66667 29 9.66667C23.6028 9.66667 19.0312 11.5396 15.2854 15.2854C11.5396 19.0312 9.66667 23.6028 9.66667 29C9.66667 34.3972 11.5396 38.9688 15.2854 42.7146C19.0312 46.4604 23.6028 48.3333 29 48.3333Z"
      fill="#1AD9E5"
    />
  </Svg>
);

export const NotificationIcon = (props) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      d="M5.91016 18.8015V17.8015H7.52553V9.87838C7.52553 8.57198 7.939 7.42294 8.76593 6.43128C9.59285 5.43959 10.6409 4.82196 11.9102 4.57838V4.03223C11.9102 3.75444 12.0072 3.51833 12.2012 3.32388C12.3952 3.12944 12.6307 3.03223 12.9079 3.03223C13.1851 3.03223 13.4214 3.12944 13.6169 3.32388C13.8124 3.51833 13.9102 3.75444 13.9102 4.03223V4.57838C15.1794 4.82196 16.2275 5.43959 17.0544 6.43128C17.8813 7.42294 18.2948 8.57198 18.2948 9.87838V17.8015H19.9102V18.8015H5.91016ZM12.9068 21.4169C12.4616 21.4169 12.0816 21.2587 11.7669 20.9423C11.4521 20.626 11.2948 20.2457 11.2948 19.8015H14.5255C14.5255 20.2489 14.367 20.63 14.05 20.9447C13.733 21.2595 13.3519 21.4169 12.9068 21.4169ZM8.52553 17.8015H17.2948V9.87838C17.2948 8.66299 16.8679 7.62838 16.014 6.77453C15.1602 5.92069 14.1255 5.49378 12.9102 5.49378C11.6948 5.49378 10.6602 5.92069 9.80631 6.77453C8.95246 7.62838 8.52553 8.66299 8.52553 9.87838V17.8015Z"
      fill="#1F2269"
    />
  </Svg>
);

export const LogOutIcon = (props) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      d="M6.52553 20.0322C6.06528 20.0322 5.68099 19.8781 5.37266 19.5697C5.06432 19.2614 4.91016 18.8771 4.91016 18.4169V5.6476C4.91016 5.18735 5.06432 4.80306 5.37266 4.49473C5.68099 4.18639 6.06528 4.03223 6.52553 4.03223H12.9294V5.03223H6.52553C6.3717 5.03223 6.23067 5.09633 6.10246 5.22453C5.97426 5.35274 5.91016 5.49377 5.91016 5.6476V18.4169C5.91016 18.5707 5.97426 18.7117 6.10246 18.8399C6.23067 18.9681 6.3717 19.0322 6.52553 19.0322H12.9294V20.0322H6.52553ZM17.3717 15.5707L16.6698 14.8515L18.989 12.5322H10.1025V11.5322H18.989L16.6698 9.213L17.3717 8.49375L20.9102 12.0322L17.3717 15.5707Z"
      fill="#1F2269"
    />
  </Svg>
);

export const SearchIcon = (props) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      d="M20.3947 20.2181L14.1332 13.9566C13.6332 14.3822 13.0582 14.7117 12.4082 14.945C11.7582 15.1784 11.105 15.295 10.4485 15.295C8.84688 15.295 7.49134 14.7406 6.38192 13.6318C5.27249 12.523 4.71777 11.1682 4.71777 9.5674C4.71777 7.9666 5.27218 6.61075 6.381 5.49985C7.48981 4.38895 8.84462 3.8335 10.4454 3.8335C12.0462 3.8335 13.4021 4.3882 14.513 5.49762C15.6239 6.60704 16.1793 7.96259 16.1793 9.56427C16.1793 10.2591 16.0562 10.9316 15.8101 11.5816C15.5639 12.2316 15.2409 12.7873 14.8409 13.2489L21.1024 19.5104L20.3947 20.2181ZM10.4485 14.295C11.7755 14.295 12.8957 13.8383 13.8091 12.9248C14.7226 12.0114 15.1793 10.8912 15.1793 9.56427C15.1793 8.23736 14.7226 7.11716 13.8091 6.2037C12.8957 5.29023 11.7755 4.8335 10.4485 4.8335C9.12163 4.8335 8.00144 5.29023 7.08797 6.2037C6.17452 7.11716 5.7178 8.23736 5.7178 9.56427C5.7178 10.8912 6.17452 12.0114 7.08797 12.9248C8.00144 13.8383 9.12163 14.295 10.4485 14.295Z"
      fill="#1F2269"
      fill-opacity="0.5"
    />
  </Svg>
);

export const PublishIcon = (props) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      d="M6.02553 20.1221C5.56528 20.1221 5.18099 19.9679 4.87266 19.6596C4.56432 19.3512 4.41016 18.9669 4.41016 18.5067V5.73745C4.41016 5.2772 4.56432 4.8929 4.87266 4.58457C5.18099 4.27624 5.56528 4.12207 6.02553 4.12207H15.3332V5.12207H6.02553C5.8717 5.12207 5.73067 5.18617 5.60246 5.31437C5.47426 5.44259 5.41016 5.58361 5.41016 5.73745V18.5067C5.41016 18.6605 5.47426 18.8016 5.60246 18.9298C5.73067 19.058 5.8717 19.1221 6.02553 19.1221H18.7948C18.9486 19.1221 19.0897 19.058 19.2179 18.9298C19.3461 18.8016 19.4102 18.6605 19.4102 18.5067V9.199H20.4102V18.5067C20.4102 18.9669 20.256 19.3512 19.9477 19.6596C19.6393 19.9679 19.255 20.1221 18.7948 20.1221H6.02553ZM8.91016 16.6221V15.6221H15.9102V16.6221H8.91016ZM8.91016 13.6221V12.6221H15.9102V13.6221H8.91016ZM8.91016 10.6221V9.62207H15.9102V10.6221H8.91016ZM18.4102 8.12207V6.12207H16.4102V5.12207H18.4102V3.12207H19.4102V5.12207H21.4102V6.12207H19.4102V8.12207H18.4102Z"
      fill={props.fill || "#BCBABA"}
    />
  </Svg>
);

export const PersonIcon = (props) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      d="M6.19615 17.5491C7.04615 16.9375 7.94807 16.4539 8.90193 16.0981C9.85577 15.7423 10.8885 15.5645 12 15.5645C13.1115 15.5645 14.1442 15.7423 15.0981 16.0981C16.0519 16.4539 16.9538 16.9375 17.8039 17.5491C18.4641 16.8657 18.9952 16.0587 19.3971 15.1279C19.799 14.1971 20 13.176 20 12.0645C20 9.84779 19.2208 7.96029 17.6625 6.40195C16.1042 4.84362 14.2167 4.06445 12 4.06445C9.78333 4.06445 7.89583 4.84362 6.3375 6.40195C4.77917 7.96029 4 9.84779 4 12.0645C4 13.176 4.20096 14.1971 4.60288 15.1279C5.00481 16.0587 5.5359 16.8657 6.19615 17.5491ZM12.0006 12.5645C11.1579 12.5645 10.4471 12.2752 9.86827 11.6968C9.28942 11.1183 9 10.4077 9 9.56503C9 8.72233 9.28923 8.01156 9.86768 7.43273C10.4461 6.85388 11.1567 6.56445 11.9994 6.56445C12.8421 6.56445 13.5529 6.85369 14.1317 7.43215C14.7106 8.0106 15 8.72118 15 9.56388C15 10.4066 14.7108 11.1173 14.1323 11.6962C13.5539 12.275 12.8433 12.5645 12.0006 12.5645ZM12 21.0645C10.7449 21.0645 9.56987 20.8308 8.475 20.3635C7.38013 19.8962 6.42757 19.2574 5.6173 18.4472C4.80705 17.6369 4.16827 16.6843 3.70095 15.5895C3.23365 14.4946 3 13.3196 3 12.0645C3 10.8093 3.23365 9.63432 3.70095 8.53945C4.16827 7.44459 4.80705 6.49202 5.6173 5.68175C6.42757 4.8715 7.38013 4.23272 8.475 3.7654C9.56987 3.2981 10.7449 3.06445 12 3.06445C13.2551 3.06445 14.4301 3.2981 15.525 3.7654C16.6199 4.23272 17.5724 4.8715 18.3827 5.68175C19.1929 6.49202 19.8317 7.44459 20.299 8.53945C20.7663 9.63432 21 10.8093 21 12.0645C21 13.3196 20.7663 14.4946 20.299 15.5895C19.8317 16.6843 19.1929 17.6369 18.3827 18.4472C17.5724 19.2574 16.6199 19.8962 15.525 20.3635C14.4301 20.8308 13.2551 21.0645 12 21.0645ZM12 20.0645C12.9218 20.0645 13.8289 19.9032 14.7212 19.5808C15.6135 19.2584 16.3846 18.817 17.0346 18.2568C16.3846 17.735 15.6327 17.3225 14.7788 17.0193C13.925 16.7161 12.9987 16.5645 12 16.5645C11.0013 16.5645 10.0718 16.7129 9.21155 17.0097C8.35128 17.3064 7.60256 17.7221 6.96537 18.2568C7.61538 18.817 8.38653 19.2584 9.27885 19.5808C10.1711 19.9032 11.0782 20.0645 12 20.0645ZM12 11.5645C12.5615 11.5645 13.0353 11.3715 13.4212 10.9856C13.8071 10.5997 14 10.126 14 9.56445C14 9.00292 13.8071 8.5292 13.4212 8.1433C13.0353 7.7574 12.5615 7.56445 12 7.56445C11.4385 7.56445 10.9647 7.7574 10.5788 8.1433C10.1929 8.5292 10 9.00292 10 9.56445C10 10.126 10.1929 10.5997 10.5788 10.9856C10.9647 11.3715 11.4385 11.5645 12 11.5645Z"
      fill={props.fill || "#BCBABA"}
    />
  </Svg>
);
export const MenuIcon = (props) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      d="M12 19.3338C11.5875 19.3338 11.2344 19.1869 10.9406 18.8932C10.6469 18.5994 10.5 18.2463 10.5 17.8338C10.5 17.4213 10.6469 17.0682 10.9406 16.7745C11.2344 16.4807 11.5875 16.3338 12 16.3338C12.4125 16.3338 12.7656 16.4807 13.0593 16.7745C13.3531 17.0682 13.5 17.4213 13.5 17.8338C13.5 18.2463 13.3531 18.5994 13.0593 18.8932C12.7656 19.1869 12.4125 19.3338 12 19.3338ZM12 13.5646C11.5875 13.5646 11.2344 13.4177 10.9406 13.1239C10.6469 12.8302 10.5 12.4771 10.5 12.0646C10.5 11.6521 10.6469 11.299 10.9406 11.0052C11.2344 10.7115 11.5875 10.5646 12 10.5646C12.4125 10.5646 12.7656 10.7115 13.0593 11.0052C13.3531 11.299 13.5 11.6521 13.5 12.0646C13.5 12.4771 13.3531 12.8302 13.0593 13.1239C12.7656 13.4177 12.4125 13.5646 12 13.5646ZM12 7.79534C11.5875 7.79534 11.2344 7.64846 10.9406 7.35471C10.6469 7.06098 10.5 6.70786 10.5 6.29536C10.5 5.88288 10.6469 5.52976 10.9406 5.23601C11.2344 4.94228 11.5875 4.79541 12 4.79541C12.4125 4.79541 12.7656 4.94228 13.0593 5.23601C13.3531 5.52976 13.5 5.88288 13.5 6.29536C13.5 6.70786 13.3531 7.06098 13.0593 7.35471C12.7656 7.64846 12.4125 7.79534 12 7.79534Z"
      fill="black"
    />
  </Svg>
);

export const EditIcon = (props) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      d="M5.61538 20.0643C5.15513 20.0643 4.77083 19.9102 4.4625 19.6018C4.15417 19.2935 4 18.9092 4 18.449V5.6797C4 5.21945 4.15417 4.83516 4.4625 4.52683C4.77083 4.21849 5.15513 4.06433 5.61538 4.06433H14.0019L13.0019 5.06433H5.61538C5.46154 5.06433 5.32052 5.12843 5.1923 5.25663C5.0641 5.38485 5 5.52587 5 5.6797V18.449C5 18.6028 5.0641 18.7438 5.1923 18.872C5.32052 19.0002 5.46154 19.0643 5.61538 19.0643H18.3846C18.5385 19.0643 18.6795 19.0002 18.8077 18.872C18.9359 18.7438 19 18.6028 19 18.449V10.9605L20 9.96048V18.449C20 18.9092 19.8458 19.2935 19.5375 19.6018C19.2292 19.9102 18.8449 20.0643 18.3846 20.0643H5.61538ZM10 14.0643V11.4489L18.9442 2.5047C19.0545 2.39445 19.1705 2.31817 19.2923 2.27585C19.4141 2.23355 19.5423 2.2124 19.6769 2.2124C19.8026 2.2124 19.9253 2.23355 20.0452 2.27585C20.1651 2.31817 20.2737 2.38804 20.3712 2.48548L21.4827 3.56433C21.5891 3.67458 21.6699 3.79605 21.725 3.92875C21.7801 4.06144 21.8077 4.19509 21.8077 4.3297C21.8077 4.46432 21.7875 4.59157 21.7471 4.71145C21.7067 4.83132 21.6314 4.94639 21.5212 5.05665L12.5192 14.0643H10ZM11 13.0643H12.0923L18.7577 6.39895L18.2115 5.8528L17.6019 5.26818L11 11.8701V13.0643Z"
      fill={props.fill || "#BCBABA"}
    />
  </Svg>
);

export const DeleteIcon = (props) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      d="M7.61537 20.0647C7.16794 20.0647 6.78685 19.9073 6.4721 19.5926C6.15737 19.2778 6 18.8967 6 18.4493V6.06466H5V5.06466H9V4.29541H15V5.06466H19V6.06466H18V18.4493C18 18.9095 17.8458 19.2938 17.5375 19.6022C17.2292 19.9105 16.8449 20.0647 16.3846 20.0647H7.61537ZM17 6.06466H7V18.4493C7 18.6288 7.05769 18.7762 7.17308 18.8916C7.28846 19.007 7.43589 19.0647 7.61537 19.0647H16.3846C16.5385 19.0647 16.6795 19.0006 16.8077 18.8724C16.9359 18.7441 17 18.6031 17 18.4493V6.06466ZM9.80768 17.0647H10.8077V8.06466H9.80768V17.0647ZM13.1923 17.0647H14.1923V8.06466H13.1923V17.0647Z"
      fill={props.fill || "#BCBABA"}
    />
  </Svg>
);

export const HandIcon = (props) => (
  <Svg width={52} height={52} fill="none" viewBox="0 0 52 52" {...props}>
    <Path
      d="M29.0601 0.0644015C30.1778 0.0644016 31.2438 0.303824 32.2581 0.782675C33.2723 1.26153 34.1534 1.95468 34.9016 2.86213L51.9987 23.5394L50.5101 24.8375C49.9832 25.326 49.3582 25.5779 48.6351 25.5933C47.9121 25.6087 47.2563 25.4337 46.6678 25.0683L36.4101 18.7048L36.4101 49.6221C36.4101 50.0471 36.2662 50.4033 35.9783 50.6908C35.6904 50.9783 35.3337 51.1221 34.9081 51.1221C34.4826 51.1221 34.1265 50.9783 33.84 50.6908C33.5534 50.4033 33.4101 50.0471 33.4101 49.6221L33.4101 13.0971L46.062 21.024L32.4906 4.7339C32.0306 4.2132 31.5082 3.80478 30.9236 3.50863C30.339 3.21248 29.7178 3.0644 29.0601 3.0644L10.9101 3.0644C8.79858 3.0644 7.02071 3.78653 5.57651 5.23078C4.13226 6.67498 3.41013 8.45285 3.41013 10.5644L3.41013 31.5644C3.41013 31.9894 3.26618 32.3456 2.97828 32.6331C2.69038 32.9206 2.33365 33.0644 1.90811 33.0644C1.4825 33.0644 1.12645 32.9206 0.839956 32.6331C0.553404 32.3456 0.410127 31.9894 0.410127 31.5644L0.410129 10.5644C0.41013 7.649 1.43128 5.17015 3.47358 3.12785C5.51588 1.08555 7.99473 0.0643997 10.9101 0.0643999L29.0601 0.0644015ZM25.3909 24.0644L25.3909 40.5644C25.3909 40.9894 25.247 41.3456 24.9591 41.6331C24.6712 41.9206 24.3144 42.0644 23.8889 42.0644C23.4633 42.0644 23.1072 41.9206 22.8207 41.6331C22.5342 41.3456 22.3909 40.9894 22.3909 40.5644L22.3909 24.0644L25.3909 24.0644ZM14.3717 24.0644L14.3717 36.9875C14.3717 37.4125 14.2277 37.7687 13.9398 38.0562C13.6519 38.3437 13.2952 38.4875 12.8697 38.4875C12.4441 38.4875 12.088 38.3437 11.8015 38.0562C11.515 37.7687 11.3717 37.4125 11.3717 36.9875L11.3717 24.0644L14.3717 24.0644Z"
      fill="#1AD9E5"
    />
  </Svg>
);

export const PublishButtonSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={127}
    height={127}
    fill="none"
    {...props}
  >
    <Circle cx={63.91} cy={63.065} r={63} fill="#1AD9E5" fillOpacity={0.2} />
    <Circle
      cx={63.911}
      cy={63.065}
      r={53.333}
      fill="#1AD9E5"
      fillOpacity={0.5}
    />
    <Circle cx={63.911} cy={63.065} r={43.333} fill="#fff" />
    <Path
      fill={props.fill || "#BCBABA"}
      d="M57.026 61.065c-.46 0-.845-.155-1.153-.463a1.565 1.565 0 0 1-.463-1.153V46.68c0-.46.154-.844.463-1.152a1.564 1.564 0 0 1 1.153-.462h9.307v1h-9.307a.588.588 0 0 0-.424.192.588.588 0 0 0-.192.423v12.77c0 .153.064.294.193.422.128.128.269.193.422.193h12.77a.588.588 0 0 0 .423-.193.588.588 0 0 0 .192-.423v-9.308h1v9.308c0 .46-.154.845-.462 1.153a1.565 1.565 0 0 1-1.153.463h-12.77Zm2.884-3.5v-1h7v1h-7Zm0-3v-1h7v1h-7Zm0-3v-1h7v1h-7Zm9.5-2.5v-2h-2v-1h2v-2h1v2h2v1h-2v2h-1Z"
    />
    <Path
      fill="#767575"
      d="M46.164 76.719h-2.28v-.92h2.28c.441 0 .798-.07 1.072-.211.273-.14.473-.336.598-.586a1.84 1.84 0 0 0 .193-.855c0-.294-.065-.569-.194-.827a1.429 1.429 0 0 0-.597-.62c-.274-.16-.631-.241-1.072-.241h-2.016v7.605h-1.13v-8.53h3.146c.644 0 1.189.11 1.634.333a2.36 2.36 0 0 1 1.014.926c.23.39.346.838.346 1.342 0 .547-.116 1.013-.346 1.4a2.21 2.21 0 0 1-1.014.885c-.445.2-.99.299-1.634.299Zm8.156 1.88v-4.874h1.09v6.34h-1.037L54.32 78.6Zm.205-1.335.452-.012c0 .422-.045.813-.135 1.172a2.514 2.514 0 0 1-.422.926 1.995 1.995 0 0 1-.768.615c-.316.144-.7.217-1.154.217-.309 0-.592-.045-.85-.135a1.699 1.699 0 0 1-.656-.416 1.893 1.893 0 0 1-.428-.733 3.53 3.53 0 0 1-.146-1.084v-4.09h1.084v4.102c0 .285.031.522.094.71.066.183.154.33.263.439.114.105.239.18.375.222.14.043.285.065.434.065.46 0 .826-.088 1.096-.264.27-.18.462-.42.58-.72.12-.305.181-.643.181-1.014Zm2.55-6.2h1.09v7.77l-.094 1.23h-.996v-9Zm5.373 5.778v.123c0 .46-.055.888-.165 1.283-.109.39-.269.73-.48 1.02a2.24 2.24 0 0 1-.773.673 2.22 2.22 0 0 1-1.05.24c-.401 0-.755-.068-1.06-.204-.3-.141-.554-.342-.762-.604a3.12 3.12 0 0 1-.498-.95 5.982 5.982 0 0 1-.252-1.253v-.54a5.99 5.99 0 0 1 .252-1.259 3.12 3.12 0 0 1 .498-.95c.208-.265.462-.466.762-.603.301-.14.65-.21 1.05-.21.398 0 .751.078 1.06.234.308.152.566.37.773.656.211.285.371.627.48 1.025.11.395.165.834.165 1.319Zm-1.09.123v-.123c0-.317-.03-.614-.088-.89a2.306 2.306 0 0 0-.281-.74 1.4 1.4 0 0 0-.51-.503c-.211-.125-.47-.188-.78-.188-.273 0-.511.047-.714.141-.2.094-.37.22-.51.381-.14.156-.256.336-.346.539-.086.2-.15.406-.193.621v1.412c.062.274.164.537.305.791.144.25.336.455.574.615.242.16.54.24.896.24a1.5 1.5 0 0 0 .75-.175c.211-.121.381-.287.51-.498.133-.211.23-.455.293-.732.063-.278.094-.575.094-.891Zm3.656-5.9v9h-1.09v-9h1.09Zm2.936 2.66v6.34h-1.09v-6.34h1.09Zm-1.172-1.682c0-.176.053-.324.159-.445.11-.121.27-.182.48-.182.207 0 .365.06.475.182.113.12.17.27.17.445a.613.613 0 0 1-.17.434c-.11.117-.268.175-.475.175-.21 0-.37-.058-.48-.175a.639.639 0 0 1-.159-.434Zm5.468 7.248c.258 0 .496-.053.715-.158.218-.106.398-.25.539-.434.14-.187.22-.4.24-.638h1.031c-.02.374-.146.724-.38 1.048a2.6 2.6 0 0 1-.909.78 2.636 2.636 0 0 1-1.236.293c-.477 0-.893-.084-1.248-.252a2.475 2.475 0 0 1-.88-.692 3.089 3.089 0 0 1-.52-1.007 4.252 4.252 0 0 1-.17-1.213v-.246c0-.426.056-.829.17-1.208.117-.382.29-.72.52-1.013.235-.293.528-.524.88-.692.355-.168.771-.252 1.248-.252.496 0 .93.102 1.3.305.372.2.663.473.874.82.214.344.332.735.351 1.172H73.74a1.561 1.561 0 0 0-.223-.709 1.388 1.388 0 0 0-.515-.504 1.44 1.44 0 0 0-.756-.193c-.332 0-.612.066-.838.2-.223.128-.4.304-.533.527a2.463 2.463 0 0 0-.282.732 4.028 4.028 0 0 0-.082.815v.246c0 .277.028.55.082.82.055.27.147.514.276.732.133.22.31.395.533.528.227.129.508.193.844.193Zm7.5-.31v-3.264c0-.25-.05-.467-.152-.65a.997.997 0 0 0-.445-.434c-.2-.102-.446-.152-.739-.152-.273 0-.513.046-.72.14a1.255 1.255 0 0 0-.48.37.809.809 0 0 0-.17.491h-1.085c0-.226.059-.45.176-.673.117-.223.285-.424.504-.604a2.52 2.52 0 0 1 .797-.433 3.14 3.14 0 0 1 1.043-.165c.46 0 .867.079 1.218.235.356.156.633.392.832.709.204.312.305.705.305 1.177v2.954c0 .21.018.435.053.674.039.238.096.443.17.615v.093h-1.131a2.027 2.027 0 0 1-.129-.498 4.022 4.022 0 0 1-.047-.585Zm.188-2.76.011.761H78.85c-.309 0-.584.026-.826.077a1.89 1.89 0 0 0-.61.216.98.98 0 0 0-.504.879c0 .2.045.381.135.545a.98.98 0 0 0 .404.393c.184.094.409.14.674.14.332 0 .625-.07.879-.21.254-.141.455-.313.604-.516.152-.203.234-.4.246-.592l.462.522a1.573 1.573 0 0 1-.222.544 2.625 2.625 0 0 1-1.201 1.025 2.33 2.33 0 0 1-.926.177c-.43 0-.807-.084-1.13-.252a1.934 1.934 0 0 1-.75-.674 1.784 1.784 0 0 1-.265-.955c0-.34.067-.639.2-.897.132-.261.324-.478.574-.65.25-.176.55-.309.902-.398.352-.09.744-.135 1.178-.135h1.26Zm3.703-1.5v5.343h-1.084v-6.34h1.055l.03.997Zm1.98-1.032-.005 1.008a1.558 1.558 0 0 0-.258-.035 2.744 2.744 0 0 0-.27-.012c-.25 0-.47.04-.662.118a1.373 1.373 0 0 0-.486.328 1.58 1.58 0 0 0-.316.504 2.421 2.421 0 0 0-.147.632l-.305.176c0-.383.038-.742.112-1.078.078-.336.197-.633.357-.89a1.75 1.75 0 0 1 .61-.61 1.712 1.712 0 0 1 1.16-.193.797.797 0 0 1 .21.052Z"
    />
  </Svg>
);

export const CheckIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M10.4601 17.4299L5.49091 12.4606L6.20436 11.7472L10.4601 16.0029L19.6159 6.84717L20.3294 7.56062L10.4601 17.4299Z"
      fill={props.fill || "#BCBABA"}
    />
  </Svg>
);

export const SaveIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M6.41016 19.6221V5.73745C6.41016 5.2772 6.56432 4.8929 6.87266 4.58457C7.18099 4.27624 7.56528 4.12207 8.02553 4.12207H16.7948C17.255 4.12207 17.6393 4.27624 17.9477 4.58457C18.256 4.8929 18.4102 5.2772 18.4102 5.73745V19.6221L12.4102 17.0451L6.41016 19.6221ZM7.41016 18.0721L12.4102 15.9221L17.4102 18.0721V5.73745C17.4102 5.58361 17.3461 5.44259 17.2179 5.31437C17.0896 5.18617 16.9486 5.12207 16.7948 5.12207H8.02553C7.8717 5.12207 7.73067 5.18617 7.60246 5.31437C7.47426 5.44259 7.41016 5.58361 7.41016 5.73745V18.0721Z"
      fill={props.fill || "#BCBABA"}
    />
  </Svg>
);

export const CVIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M8.5 17.5H15.5V16.5H8.5V17.5ZM8.5 13.5H15.5V12.5H8.5V13.5ZM6.61537 21C6.15512 21 5.77083 20.8458 5.4625 20.5375C5.15417 20.2292 5 19.8449 5 19.3846V4.61537C5 4.15512 5.15417 3.77083 5.4625 3.4625C5.77083 3.15417 6.15512 3 6.61537 3H14.5L19 7.5V19.3846C19 19.8449 18.8458 20.2292 18.5375 20.5375C18.2292 20.8458 17.8449 21 17.3846 21H6.61537ZM14 8V4H6.61537C6.46154 4 6.32052 4.0641 6.1923 4.1923C6.0641 4.32052 6 4.46154 6 4.61537V19.3846C6 19.5385 6.0641 19.6795 6.1923 19.8077C6.32052 19.9359 6.46154 20 6.61537 20H17.3846C17.5385 20 17.6795 19.9359 17.8077 19.8077C17.9359 19.6795 18 19.5385 18 19.3846V8H14Z"
      fill={props.fill || "#BCBABA"}
    />
  </Svg>
);

export const EmailIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M5.44887 19C4.98862 19 4.60433 18.8458 4.296 18.5375C3.98766 18.2292 3.8335 17.8449 3.8335 17.3846V6.61537C3.8335 6.15512 3.98766 5.77083 4.296 5.4625C4.60433 5.15417 4.98862 5 5.44887 5H20.2181C20.6784 5 21.0627 5.15417 21.371 5.4625C21.6793 5.77083 21.8335 6.15512 21.8335 6.61537V17.3846C21.8335 17.8449 21.6793 18.2292 21.371 18.5375C21.0627 18.8458 20.6784 19 20.2181 19H5.44887ZM12.8335 12.1154L4.8335 6.88463V17.3846C4.8335 17.5641 4.89119 17.7115 5.00657 17.8269C5.12195 17.9423 5.26939 18 5.44887 18H20.2181C20.3976 18 20.545 17.9423 20.6604 17.8269C20.7758 17.7115 20.8335 17.5641 20.8335 17.3846V6.88463L12.8335 12.1154ZM12.8335 11L20.5258 6H5.1412L12.8335 11ZM4.8335 6.88463V6V17.3846C4.8335 17.5641 4.89119 17.7115 5.00657 17.8269C5.12195 17.9423 5.26939 18 5.44887 18H4.8335V6.88463Z"
      fill="#BCBABA"
    />
  </Svg>
);

export const StatsIcon = (props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M12.6699 21C11.4253 21 10.2552 20.7638 9.1596 20.2915C8.06399 19.8192 7.11095 19.1782 6.30048 18.3685C5.49003 17.5588 4.84842 16.6066 4.37565 15.512C3.90289 14.4174 3.6665 13.2479 3.6665 12.0034C3.6665 10.7588 3.90266 9.58872 4.37498 8.4931C4.84731 7.39748 5.48833 6.44444 6.29803 5.63398C7.10773 4.82353 8.05987 4.18192 9.15445 3.70915C10.2491 3.23638 11.4186 3 12.6632 3C13.9077 3 15.0778 3.23616 16.1734 3.70847C17.269 4.18081 18.2221 4.82182 19.0325 5.63152C19.843 6.44122 20.4846 7.39337 20.9574 8.48795C21.4301 9.58255 21.6665 10.7521 21.6665 11.9966C21.6665 13.2412 21.4303 14.4113 20.958 15.5069C20.4857 16.6025 19.8447 17.5556 19.035 18.366C18.2253 19.1765 17.2731 19.8181 16.1786 20.2909C15.084 20.7636 13.9144 21 12.6699 21ZM12.6665 20C14.8998 20 16.7915 19.225 18.3415 17.675C19.8915 16.125 20.6665 14.2333 20.6665 12C20.6665 10.9333 20.4633 9.91154 20.0569 8.93463C19.6505 7.95769 19.0733 7.09422 18.3255 6.34422L12.6665 12V4C10.4332 4 8.5415 4.775 6.9915 6.325C5.4415 7.875 4.6665 9.76667 4.6665 12C4.6665 14.2333 5.4415 16.125 6.9915 17.675C8.5415 19.225 10.4332 20 12.6665 20Z"
      fill="#BCBABA"
    />
  </Svg>
);
