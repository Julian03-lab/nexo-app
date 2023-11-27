import Svg, { G, Path, Circle, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const PressPrioritiesSVG = (props) => (
  <Svg
    width={350}
    height={101}
    viewBox="0 0 350 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G>
      <G filter="url(#filter0_d_1040_23447)">
        <Path
          d="M15 18H335V77C335 79.7614 332.761 82 330 82H20C17.2386 82 15 79.7614 15 77V18Z"
          fill="white"
          shapeRendering="crispEdges"
        />
        <G>
          <G>
            <Path
              d="M55.1961 45.4846C56.0461 44.8731 56.9481 44.3894 57.9019 44.0337C58.8558 43.6779 59.8885 43.5 61 43.5C62.1115 43.5 63.1442 43.6779 64.0981 44.0337C65.0519 44.3894 65.9538 44.8731 66.8039 45.4846C67.4641 44.8013 67.9952 43.9942 68.3971 43.0634C68.799 42.1327 69 41.1115 69 40C69 37.7833 68.2208 35.8958 66.6625 34.3375C65.1042 32.7792 63.2167 32 61 32C58.7833 32 56.8958 32.7792 55.3375 34.3375C53.7792 35.8958 53 37.7833 53 40C53 41.1115 53.201 42.1327 53.6029 43.0634C54.0048 43.9942 54.5359 44.8013 55.1961 45.4846ZM61.0006 40.5C60.1579 40.5 59.4471 40.2108 58.8683 39.6323C58.2894 39.0539 58 38.3433 58 37.5006C58 36.6579 58.2892 35.9471 58.8677 35.3683C59.4461 34.7894 60.1567 34.5 60.9994 34.5C61.8421 34.5 62.5529 34.7892 63.1317 35.3677C63.7106 35.9462 64 36.6567 64 37.4994C64 38.3421 63.7108 39.0529 63.1323 39.6317C62.5539 40.2106 61.8433 40.5 61.0006 40.5ZM61 49C59.7449 49 58.5699 48.7664 57.475 48.2991C56.3801 47.8317 55.4276 47.1929 54.6173 46.3827C53.8071 45.5724 53.1683 44.6199 52.7009 43.525C52.2336 42.4301 52 41.2551 52 40C52 38.7449 52.2336 37.5699 52.7009 36.475C53.1683 35.3801 53.8071 34.4276 54.6173 33.6173C55.4276 32.8071 56.3801 32.1683 57.475 31.701C58.5699 31.2337 59.7449 31 61 31C62.2551 31 63.4301 31.2337 64.525 31.701C65.6199 32.1683 66.5724 32.8071 67.3827 33.6173C68.1929 34.4276 68.8317 35.3801 69.299 36.475C69.7663 37.5699 70 38.7449 70 40C70 41.2551 69.7663 42.4301 69.299 43.525C68.8317 44.6199 68.1929 45.5724 67.3827 46.3827C66.5724 47.1929 65.6199 47.8317 64.525 48.2991C63.4301 48.7664 62.2551 49 61 49ZM61 48C61.9218 48 62.8289 47.8388 63.7212 47.5163C64.6135 47.1939 65.3846 46.7526 66.0346 46.1923C65.3846 45.6705 64.6327 45.258 63.7788 44.9548C62.925 44.6516 61.9987 44.5 61 44.5C60.0013 44.5 59.0718 44.6484 58.2116 44.9452C57.3513 45.242 56.6026 45.6577 55.9654 46.1923C56.6154 46.7526 57.3865 47.1939 58.2789 47.5163C59.1711 47.8388 60.0782 48 61 48ZM61 39.5C61.5615 39.5 62.0353 39.3071 62.4212 38.9212C62.8071 38.5353 63 38.0615 63 37.5C63 36.9385 62.8071 36.4647 62.4212 36.0788C62.0353 35.6929 61.5615 35.5 61 35.5C60.4385 35.5 59.9647 35.6929 59.5788 36.0788C59.1929 36.4647 59 36.9385 59 37.5C59 38.0615 59.1929 38.5353 59.5788 38.9212C59.9647 39.3071 60.4385 39.5 61 39.5Z"
              fill="#BCBABA"
            />
          </G>
          <Path
            d="M39.594 59.2246L36.7698 67H35.6155L38.8675 58.4688H39.6116L39.594 59.2246ZM41.9612 67L39.1311 59.2246L39.1135 58.4688H39.8577L43.1214 67H41.9612ZM41.8147 63.8418V64.7676H37.0217V63.8418H41.8147ZM47.8093 65.3184C47.8093 65.1621 47.7741 65.0176 47.7038 64.8848C47.6374 64.748 47.4987 64.625 47.2878 64.5156C47.0808 64.4023 46.7683 64.3047 46.3503 64.2227C45.9987 64.1484 45.6804 64.0605 45.3952 63.959C45.114 63.8574 44.8737 63.7344 44.6745 63.5898C44.4792 63.4453 44.3288 63.2754 44.2233 63.0801C44.1179 62.8848 44.0651 62.6562 44.0651 62.3945C44.0651 62.1445 44.1198 61.9082 44.2292 61.6855C44.3425 61.4629 44.5007 61.2656 44.7038 61.0938C44.9108 60.9219 45.1589 60.7871 45.448 60.6895C45.737 60.5918 46.0593 60.543 46.4147 60.543C46.9226 60.543 47.3562 60.6328 47.7155 60.8125C48.0749 60.9922 48.3503 61.2324 48.5417 61.5332C48.7331 61.8301 48.8288 62.1602 48.8288 62.5234H47.7448C47.7448 62.3477 47.6921 62.1777 47.5866 62.0137C47.4851 61.8457 47.3347 61.707 47.1355 61.5977C46.9401 61.4883 46.6999 61.4336 46.4147 61.4336C46.114 61.4336 45.8698 61.4805 45.6823 61.5742C45.4987 61.6641 45.364 61.7793 45.278 61.9199C45.196 62.0605 45.155 62.209 45.155 62.3652C45.155 62.4824 45.1745 62.5879 45.2136 62.6816C45.2565 62.7715 45.3308 62.8555 45.4362 62.9336C45.5417 63.0078 45.6901 63.0781 45.8815 63.1445C46.073 63.2109 46.3171 63.2773 46.614 63.3438C47.1335 63.4609 47.5612 63.6016 47.8972 63.7656C48.2331 63.9297 48.4831 64.1309 48.6472 64.3691C48.8112 64.6074 48.8933 64.8965 48.8933 65.2363C48.8933 65.5137 48.8347 65.7676 48.7175 65.998C48.6042 66.2285 48.4382 66.4277 48.2194 66.5957C48.0046 66.7598 47.7468 66.8887 47.446 66.9824C47.1491 67.0723 46.8151 67.1172 46.444 67.1172C45.8855 67.1172 45.4128 67.0176 45.0261 66.8184C44.6394 66.6191 44.3464 66.3613 44.1472 66.0449C43.948 65.7285 43.8483 65.3945 43.8483 65.043H44.9382C44.9538 65.3398 45.0397 65.5762 45.196 65.752C45.3522 65.9238 45.5437 66.0469 45.7702 66.1211C45.9968 66.1914 46.2214 66.2266 46.444 66.2266C46.7409 66.2266 46.989 66.1875 47.1882 66.1094C47.3913 66.0312 47.5456 65.9238 47.6511 65.7871C47.7565 65.6504 47.8093 65.4941 47.8093 65.3184ZM51.4191 61.8789V69.4375H50.3292V60.6602H51.3253L51.4191 61.8789ZM55.6906 63.7773V63.9004C55.6906 64.3613 55.6359 64.7891 55.5265 65.1836C55.4171 65.5742 55.257 65.9141 55.046 66.2031C54.839 66.4922 54.5831 66.7168 54.2785 66.877C53.9738 67.0371 53.6242 67.1172 53.2296 67.1172C52.8273 67.1172 52.4718 67.0508 52.1632 66.918C51.8546 66.7852 51.5929 66.5918 51.3781 66.3379C51.1632 66.084 50.9913 65.7793 50.8624 65.4238C50.7374 65.0684 50.6515 64.668 50.6046 64.2227V63.5664C50.6515 63.0977 50.7394 62.6777 50.8683 62.3066C50.9972 61.9355 51.1671 61.6191 51.3781 61.3574C51.5929 61.0918 51.8527 60.8906 52.1574 60.7539C52.462 60.6133 52.8136 60.543 53.212 60.543C53.6105 60.543 53.964 60.6211 54.2726 60.7773C54.5812 60.9297 54.841 61.1484 55.0519 61.4336C55.2628 61.7188 55.421 62.0605 55.5265 62.459C55.6359 62.8535 55.6906 63.293 55.6906 63.7773ZM54.6007 63.9004V63.7773C54.6007 63.4609 54.5675 63.1641 54.5011 62.8867C54.4347 62.6055 54.3312 62.3594 54.1906 62.1484C54.0538 61.9336 53.8781 61.7656 53.6632 61.6445C53.4484 61.5195 53.1925 61.457 52.8956 61.457C52.6222 61.457 52.3839 61.5039 52.1808 61.5977C51.9816 61.6914 51.8117 61.8184 51.671 61.9785C51.5304 62.1348 51.4152 62.3145 51.3253 62.5176C51.2394 62.7168 51.1749 62.9238 51.132 63.1387V64.6562C51.2101 64.9297 51.3195 65.1875 51.4601 65.4297C51.6007 65.668 51.7882 65.8613 52.0226 66.0098C52.257 66.1543 52.5519 66.2266 52.9074 66.2266C53.2003 66.2266 53.4523 66.166 53.6632 66.0449C53.8781 65.9199 54.0538 65.75 54.1906 65.5352C54.3312 65.3203 54.4347 65.0742 54.5011 64.7969C54.5675 64.5156 54.6007 64.2168 54.6007 63.9004ZM58.2691 60.6602V67H57.1793V60.6602H58.2691ZM57.0972 58.9785C57.0972 58.8027 57.15 58.6543 57.2554 58.5332C57.3648 58.4121 57.525 58.3516 57.7359 58.3516C57.9429 58.3516 58.1011 58.4121 58.2105 58.5332C58.3238 58.6543 58.3804 58.8027 58.3804 58.9785C58.3804 59.1465 58.3238 59.291 58.2105 59.4121C58.1011 59.5293 57.9429 59.5879 57.7359 59.5879C57.525 59.5879 57.3648 59.5293 57.2554 59.4121C57.15 59.291 57.0972 59.1465 57.0972 58.9785ZM61.1113 61.6562V67H60.0273V60.6602H61.082L61.1113 61.6562ZM63.0918 60.625L63.0859 61.6328C62.9961 61.6133 62.9102 61.6016 62.8281 61.5977C62.75 61.5898 62.6602 61.5859 62.5586 61.5859C62.3086 61.5859 62.0879 61.625 61.8965 61.7031C61.7051 61.7812 61.543 61.8906 61.4102 62.0312C61.2773 62.1719 61.1719 62.3398 61.0938 62.5352C61.0195 62.7266 60.9707 62.9375 60.9473 63.168L60.6426 63.3438C60.6426 62.9609 60.6797 62.6016 60.7539 62.2656C60.832 61.9297 60.9512 61.6328 61.1113 61.375C61.2715 61.1133 61.4746 60.9102 61.7207 60.7656C61.9707 60.6172 62.2676 60.543 62.6113 60.543C62.6895 60.543 62.7793 60.5527 62.8809 60.5723C62.9824 60.5879 63.0527 60.6055 63.0918 60.625ZM67.6157 65.916V62.6523C67.6157 62.4023 67.5649 62.1855 67.4633 62.002C67.3657 61.8145 67.2172 61.6699 67.018 61.5684C66.8188 61.4668 66.5727 61.416 66.2797 61.416C66.0063 61.416 65.766 61.4629 65.559 61.5566C65.3559 61.6504 65.1957 61.7734 65.0785 61.9258C64.9653 62.0781 64.9086 62.2422 64.9086 62.418H63.8246C63.8246 62.1914 63.8832 61.9668 64.0004 61.7441C64.1176 61.5215 64.2856 61.3203 64.5043 61.1406C64.727 60.957 64.9926 60.8125 65.3012 60.707C65.6137 60.5977 65.9614 60.543 66.3442 60.543C66.8051 60.543 67.2114 60.6211 67.5629 60.7773C67.9184 60.9336 68.1957 61.1699 68.395 61.4863C68.5981 61.7988 68.6996 62.1914 68.6996 62.6641V65.6172C68.6996 65.8281 68.7172 66.0527 68.7524 66.291C68.7914 66.5293 68.8481 66.7344 68.9223 66.9062V67H67.7914C67.7367 66.875 67.6938 66.709 67.6625 66.502C67.6313 66.291 67.6157 66.0957 67.6157 65.916ZM67.8032 63.1562L67.8149 63.918H66.7192C66.4106 63.918 66.1352 63.9434 65.893 63.9941C65.6508 64.041 65.4477 64.1133 65.2836 64.2109C65.1196 64.3086 64.9946 64.4316 64.9086 64.5801C64.8227 64.7246 64.7797 64.8945 64.7797 65.0898C64.7797 65.2891 64.8246 65.4707 64.9145 65.6348C65.0043 65.7988 65.1391 65.9297 65.3188 66.0273C65.5024 66.1211 65.727 66.168 65.9926 66.168C66.3246 66.168 66.6176 66.0977 66.8715 65.957C67.1254 65.8164 67.3266 65.6445 67.475 65.4414C67.6274 65.2383 67.7094 65.041 67.7211 64.8496L68.184 65.3711C68.1567 65.5352 68.0825 65.7168 67.9614 65.916C67.8403 66.1152 67.6782 66.3066 67.475 66.4902C67.2758 66.6699 67.0375 66.8203 66.7602 66.9414C66.4867 67.0586 66.1782 67.1172 65.8344 67.1172C65.4047 67.1172 65.0278 67.0332 64.7035 66.8652C64.3832 66.6973 64.1332 66.4727 63.9535 66.1914C63.7778 65.9062 63.6899 65.5879 63.6899 65.2363C63.6899 64.8965 63.7563 64.5977 63.8891 64.3398C64.0219 64.0781 64.2133 63.8613 64.4633 63.6895C64.7133 63.5137 65.0141 63.3809 65.3657 63.291C65.7172 63.2012 66.1098 63.1562 66.5434 63.1562H67.8032ZM71.5067 62.0137V67H70.4227V60.6602H71.4481L71.5067 62.0137ZM71.2489 63.5898L70.7977 63.5723C70.8016 63.1387 70.8661 62.7383 70.9911 62.3711C71.1161 62 71.2919 61.6777 71.5184 61.4043C71.745 61.1309 72.0145 60.9199 72.327 60.7715C72.6434 60.6191 72.993 60.543 73.3758 60.543C73.6883 60.543 73.9696 60.5859 74.2196 60.6719C74.4696 60.7539 74.6825 60.8867 74.8583 61.0703C75.038 61.2539 75.1747 61.4922 75.2684 61.7852C75.3622 62.0742 75.409 62.4277 75.409 62.8457V67H74.3192V62.834C74.3192 62.502 74.2704 62.2363 74.1727 62.0371C74.0751 61.834 73.9325 61.6875 73.745 61.5977C73.5575 61.5039 73.327 61.457 73.0536 61.457C72.784 61.457 72.538 61.5137 72.3153 61.627C72.0965 61.7402 71.9071 61.8965 71.7469 62.0957C71.5907 62.2949 71.4676 62.5234 71.3778 62.7812C71.2919 63.0352 71.2489 63.3047 71.2489 63.5898ZM79.7278 60.6602V61.4922H76.3001V60.6602H79.7278ZM77.4603 59.1191H78.5442V65.4297C78.5442 65.6445 78.5774 65.8066 78.6438 65.916C78.7103 66.0254 78.7962 66.0977 78.9017 66.1328C79.0071 66.168 79.1204 66.1855 79.2415 66.1855C79.3313 66.1855 79.4251 66.1777 79.5228 66.1621C79.6243 66.1426 79.7005 66.127 79.7513 66.1152L79.7571 67C79.6712 67.0273 79.5579 67.0527 79.4173 67.0762C79.2806 67.1035 79.1145 67.1172 78.9192 67.1172C78.6536 67.1172 78.4095 67.0645 78.1868 66.959C77.9642 66.8535 77.7864 66.6777 77.6536 66.4316C77.5247 66.1816 77.4603 65.8457 77.4603 65.4238V59.1191ZM83.6482 67.1172C83.2068 67.1172 82.8064 67.043 82.447 66.8945C82.0915 66.7422 81.7849 66.5293 81.5271 66.2559C81.2732 65.9824 81.0779 65.6582 80.9411 65.2832C80.8044 64.9082 80.7361 64.498 80.7361 64.0527V63.8066C80.7361 63.291 80.8122 62.832 80.9646 62.4297C81.1169 62.0234 81.324 61.6797 81.5857 61.3984C81.8474 61.1172 82.1443 60.9043 82.4763 60.7598C82.8083 60.6152 83.1521 60.543 83.5075 60.543C83.9607 60.543 84.3513 60.6211 84.6794 60.7773C85.0115 60.9336 85.2829 61.1523 85.4939 61.4336C85.7048 61.7109 85.8611 62.0391 85.9626 62.418C86.0642 62.793 86.115 63.2031 86.115 63.6484V64.1348H81.3806V63.25H85.031V63.168C85.0154 62.8867 84.9568 62.6133 84.8552 62.3477C84.7575 62.082 84.6013 61.8633 84.3865 61.6914C84.1716 61.5195 83.8786 61.4336 83.5075 61.4336C83.2615 61.4336 83.0349 61.4863 82.8279 61.5918C82.6208 61.6934 82.4431 61.8457 82.2947 62.0488C82.1462 62.252 82.031 62.5 81.949 62.793C81.8669 63.0859 81.8259 63.4238 81.8259 63.8066V64.0527C81.8259 64.3535 81.8669 64.6367 81.949 64.9023C82.0349 65.1641 82.1579 65.3945 82.3181 65.5938C82.4822 65.793 82.6794 65.9492 82.9099 66.0625C83.1443 66.1758 83.4099 66.2324 83.7068 66.2324C84.0896 66.2324 84.4138 66.1543 84.6794 65.998C84.945 65.8418 85.1775 65.6328 85.3767 65.3711L86.0329 65.8926C85.8962 66.0996 85.7224 66.2969 85.5115 66.4844C85.3005 66.6719 85.0407 66.8242 84.7322 66.9414C84.4275 67.0586 84.0661 67.1172 83.6482 67.1172Z"
            fill="#767575"
          />
        </G>
        <G>
          <G>
            <Path
              d="M130.949 48.0004C130.488 48.0004 130.104 47.8462 129.796 47.5379C129.487 47.2295 129.333 46.8452 129.333 46.385V33.6157C129.333 33.1555 129.487 32.7712 129.796 32.4629C130.104 32.1545 130.488 32.0004 130.949 32.0004H139.335L138.335 33.0004H130.949C130.795 33.0004 130.654 33.0645 130.526 33.1927C130.397 33.3209 130.333 33.4619 130.333 33.6157V46.385C130.333 46.5388 130.397 46.6798 130.526 46.8081C130.654 46.9363 130.795 47.0004 130.949 47.0004H143.718C143.872 47.0004 144.013 46.9363 144.141 46.8081C144.269 46.6798 144.333 46.5388 144.333 46.385V38.8965L145.333 37.8965V46.385C145.333 46.8452 145.179 47.2295 144.871 47.5379C144.562 47.8462 144.178 48.0004 143.718 48.0004H130.949ZM135.333 42.0004V39.385L144.278 30.4407C144.388 30.3305 144.504 30.2542 144.626 30.2119C144.747 30.1696 144.876 30.1484 145.01 30.1484C145.136 30.1484 145.259 30.1696 145.379 30.2119C145.498 30.2542 145.607 30.3241 145.704 30.4215L146.816 31.5004C146.922 31.6106 147.003 31.7321 147.058 31.8648C147.113 31.9975 147.141 32.1311 147.141 32.2657C147.141 32.4004 147.121 32.5276 147.08 32.6475C147.04 32.7674 146.965 32.8824 146.854 32.9927L137.853 42.0004H135.333ZM136.333 41.0004H137.426L144.091 34.335L143.545 33.7888L142.935 33.2042L136.333 39.8061V41.0004Z"
              fill="#BCBABA"
            />
          </G>
          <Path
            d="M128.241 66.0801V67H123.724V66.0801H128.241ZM123.952 58.4688V67H122.822V58.4688H123.952ZM127.644 62.1367V63.0566H123.724V62.1367H127.644ZM128.183 58.4688V59.3945H123.724V58.4688H128.183ZM133.375 65.7695V58H134.465V67H133.468L133.375 65.7695ZM129.109 63.9004V63.7773C129.109 63.293 129.168 62.8535 129.285 62.459C129.406 62.0605 129.576 61.7188 129.795 61.4336C130.017 61.1484 130.281 60.9297 130.586 60.7773C130.894 60.6211 131.238 60.543 131.617 60.543C132.015 60.543 132.363 60.6133 132.66 60.7539C132.961 60.8906 133.215 61.0918 133.422 61.3574C133.633 61.6191 133.799 61.9355 133.92 62.3066C134.041 62.6777 134.125 63.0977 134.172 63.5664V64.1055C134.129 64.5703 134.045 64.9883 133.92 65.3594C133.799 65.7305 133.633 66.0469 133.422 66.3086C133.215 66.5703 132.961 66.7715 132.66 66.9121C132.359 67.0488 132.008 67.1172 131.605 67.1172C131.234 67.1172 130.894 67.0371 130.586 66.877C130.281 66.7168 130.017 66.4922 129.795 66.2031C129.576 65.9141 129.406 65.5742 129.285 65.1836C129.168 64.7891 129.109 64.3613 129.109 63.9004ZM130.199 63.7773V63.9004C130.199 64.2168 130.23 64.5137 130.293 64.791C130.359 65.0684 130.461 65.3125 130.597 65.5234C130.734 65.7344 130.908 65.9004 131.119 66.0215C131.33 66.1387 131.582 66.1973 131.875 66.1973C132.234 66.1973 132.529 66.1211 132.759 65.9688C132.994 65.8164 133.181 65.6152 133.322 65.3652C133.463 65.1152 133.572 64.8438 133.65 64.5508V63.1387C133.603 62.9238 133.535 62.7168 133.445 62.5176C133.359 62.3145 133.246 62.1348 133.105 61.9785C132.968 61.8184 132.799 61.6914 132.595 61.5977C132.396 61.5039 132.16 61.457 131.886 61.457C131.59 61.457 131.334 61.5195 131.119 61.6445C130.908 61.7656 130.734 61.9336 130.597 62.1484C130.461 62.3594 130.359 62.6055 130.293 62.8867C130.23 63.1641 130.199 63.4609 130.199 63.7773ZM137.348 60.6602V67H136.258V60.6602H137.348ZM136.176 58.9785C136.176 58.8027 136.229 58.6543 136.334 58.5332C136.443 58.4121 136.604 58.3516 136.815 58.3516C137.022 58.3516 137.18 58.4121 137.289 58.5332C137.402 58.6543 137.459 58.8027 137.459 58.9785C137.459 59.1465 137.402 59.291 137.289 59.4121C137.18 59.5293 137.022 59.5879 136.815 59.5879C136.604 59.5879 136.443 59.5293 136.334 59.4121C136.229 59.291 136.176 59.1465 136.176 58.9785ZM141.76 60.6602V61.4922H138.333V60.6602H141.76ZM139.493 59.1191H140.577V65.4297C140.577 65.6445 140.61 65.8066 140.676 65.916C140.743 66.0254 140.829 66.0977 140.934 66.1328C141.04 66.168 141.153 66.1855 141.274 66.1855C141.364 66.1855 141.458 66.1777 141.555 66.1621C141.657 66.1426 141.733 66.127 141.784 66.1152L141.79 67C141.704 67.0273 141.59 67.0527 141.45 67.0762C141.313 67.1035 141.147 67.1172 140.952 67.1172C140.686 67.1172 140.442 67.0645 140.219 66.959C139.997 66.8535 139.819 66.6777 139.686 66.4316C139.557 66.1816 139.493 65.8457 139.493 65.4238V59.1191ZM146.788 65.916V62.6523C146.788 62.4023 146.737 62.1855 146.636 62.002C146.538 61.8145 146.39 61.6699 146.19 61.5684C145.991 61.4668 145.745 61.416 145.452 61.416C145.179 61.416 144.938 61.4629 144.731 61.5566C144.528 61.6504 144.368 61.7734 144.251 61.9258C144.138 62.0781 144.081 62.2422 144.081 62.418H142.997C142.997 62.1914 143.056 61.9668 143.173 61.7441C143.29 61.5215 143.458 61.3203 143.677 61.1406C143.899 60.957 144.165 60.8125 144.474 60.707C144.786 60.5977 145.134 60.543 145.517 60.543C145.978 60.543 146.384 60.6211 146.735 60.7773C147.091 60.9336 147.368 61.1699 147.567 61.4863C147.77 61.7988 147.872 62.1914 147.872 62.6641V65.6172C147.872 65.8281 147.89 66.0527 147.925 66.291C147.964 66.5293 148.02 66.7344 148.095 66.9062V67H146.964C146.909 66.875 146.866 66.709 146.835 66.502C146.804 66.291 146.788 66.0957 146.788 65.916ZM146.976 63.1562L146.987 63.918H145.892C145.583 63.918 145.308 63.9434 145.065 63.9941C144.823 64.041 144.62 64.1133 144.456 64.2109C144.292 64.3086 144.167 64.4316 144.081 64.5801C143.995 64.7246 143.952 64.8945 143.952 65.0898C143.952 65.2891 143.997 65.4707 144.087 65.6348C144.177 65.7988 144.312 65.9297 144.491 66.0273C144.675 66.1211 144.899 66.168 145.165 66.168C145.497 66.168 145.79 66.0977 146.044 65.957C146.298 65.8164 146.499 65.6445 146.647 65.4414C146.8 65.2383 146.882 65.041 146.894 64.8496L147.356 65.3711C147.329 65.5352 147.255 65.7168 147.134 65.916C147.013 66.1152 146.851 66.3066 146.647 66.4902C146.448 66.6699 146.21 66.8203 145.933 66.9414C145.659 67.0586 145.351 67.1172 145.007 67.1172C144.577 67.1172 144.2 67.0332 143.876 66.8652C143.556 66.6973 143.306 66.4727 143.126 66.1914C142.95 65.9062 142.862 65.5879 142.862 65.2363C142.862 64.8965 142.929 64.5977 143.062 64.3398C143.194 64.0781 143.386 63.8613 143.636 63.6895C143.886 63.5137 144.187 63.3809 144.538 63.291C144.89 63.2012 145.282 63.1562 145.716 63.1562H146.976ZM150.679 61.6562V67H149.595V60.6602H150.65L150.679 61.6562ZM152.66 60.625L152.654 61.6328C152.564 61.6133 152.478 61.6016 152.396 61.5977C152.318 61.5898 152.228 61.5859 152.126 61.5859C151.876 61.5859 151.656 61.625 151.464 61.7031C151.273 61.7812 151.111 61.8906 150.978 62.0312C150.845 62.1719 150.74 62.3398 150.662 62.5352C150.587 62.7266 150.538 62.9375 150.515 63.168L150.21 63.3438C150.21 62.9609 150.247 62.6016 150.322 62.2656C150.4 61.9297 150.519 61.6328 150.679 61.375C150.839 61.1133 151.042 60.9102 151.288 60.7656C151.538 60.6172 151.835 60.543 152.179 60.543C152.257 60.543 152.347 60.5527 152.449 60.5723C152.55 60.5879 152.621 60.6055 152.66 60.625Z"
            fill="#767575"
          />
        </G>
        <G>
          <G>
            <Path
              d="M206.167 33.6154V47.5L212.167 44.9231L218.167 47.5V33.6154C218.167 33.1551 218.012 32.7708 217.704 32.4625C217.396 32.1542 217.012 32 216.551 32H207.782C207.322 32 206.937 32.1542 206.629 32.4625C206.321 32.7708 206.167 33.1551 206.167 33.6154Z"
              fill="#1AD9E5"
            />
          </G>
          <Path
            d="M192.003 63.6543H189.724V62.7344H192.003C192.444 62.7344 192.802 62.6641 193.075 62.5234C193.349 62.3828 193.548 62.1875 193.673 61.9375C193.802 61.6875 193.866 61.4023 193.866 61.082C193.866 60.7891 193.802 60.5137 193.673 60.2559C193.548 59.998 193.349 59.791 193.075 59.6348C192.802 59.4746 192.444 59.3945 192.003 59.3945H189.987V67H188.856V58.4688H192.003C192.647 58.4688 193.192 58.5801 193.638 58.8027C194.083 59.0254 194.421 59.334 194.651 59.7285C194.882 60.1191 194.997 60.5664 194.997 61.0703C194.997 61.6172 194.882 62.084 194.651 62.4707C194.421 62.8574 194.083 63.1523 193.638 63.3555C193.192 63.5547 192.647 63.6543 192.003 63.6543ZM197.365 61.6562V67H196.281V60.6602H197.335L197.365 61.6562ZM199.345 60.625L199.339 61.6328C199.249 61.6133 199.163 61.6016 199.081 61.5977C199.003 61.5898 198.913 61.5859 198.812 61.5859C198.562 61.5859 198.341 61.625 198.15 61.7031C197.958 61.7812 197.796 61.8906 197.663 62.0312C197.531 62.1719 197.425 62.3398 197.347 62.5352C197.273 62.7266 197.224 62.9375 197.201 63.168L196.896 63.3438C196.896 62.9609 196.933 62.6016 197.007 62.2656C197.085 61.9297 197.204 61.6328 197.365 61.375C197.525 61.1133 197.728 60.9102 197.974 60.7656C198.224 60.6172 198.521 60.543 198.865 60.543C198.943 60.543 199.033 60.5527 199.134 60.5723C199.236 60.5879 199.306 60.6055 199.345 60.625ZM201.543 60.6602V67H200.453V60.6602H201.543ZM200.371 58.9785C200.371 58.8027 200.424 58.6543 200.529 58.5332C200.638 58.4121 200.799 58.3516 201.01 58.3516C201.217 58.3516 201.375 58.4121 201.484 58.5332C201.597 58.6543 201.654 58.8027 201.654 58.9785C201.654 59.1465 201.597 59.291 201.484 59.4121C201.375 59.5293 201.217 59.5879 201.01 59.5879C200.799 59.5879 200.638 59.5293 200.529 59.4121C200.424 59.291 200.371 59.1465 200.371 58.9785ZM203.014 63.9004V63.7656C203.014 63.3086 203.08 62.8848 203.213 62.4941C203.346 62.0996 203.537 61.7578 203.787 61.4688C204.037 61.1758 204.34 60.9492 204.696 60.7891C205.051 60.625 205.449 60.543 205.891 60.543C206.336 60.543 206.737 60.625 207.092 60.7891C207.451 60.9492 207.756 61.1758 208.006 61.4688C208.26 61.7578 208.453 62.0996 208.586 62.4941C208.719 62.8848 208.785 63.3086 208.785 63.7656V63.9004C208.785 64.3574 208.719 64.7812 208.586 65.1719C208.453 65.5625 208.26 65.9043 208.006 66.1973C207.756 66.4863 207.453 66.7129 207.098 66.877C206.746 67.0371 206.348 67.1172 205.903 67.1172C205.457 67.1172 205.057 67.0371 204.701 66.877C204.346 66.7129 204.041 66.4863 203.787 66.1973C203.537 65.9043 203.346 65.5625 203.213 65.1719C203.08 64.7812 203.014 64.3574 203.014 63.9004ZM204.098 63.7656V63.9004C204.098 64.2168 204.135 64.5156 204.209 64.7969C204.283 65.0742 204.395 65.3203 204.543 65.5352C204.696 65.75 204.885 65.9199 205.112 66.0449C205.338 66.166 205.602 66.2266 205.903 66.2266C206.199 66.2266 206.459 66.166 206.682 66.0449C206.908 65.9199 207.096 65.75 207.244 65.5352C207.393 65.3203 207.504 65.0742 207.578 64.7969C207.656 64.5156 207.696 64.2168 207.696 63.9004V63.7656C207.696 63.4531 207.656 63.1582 207.578 62.8809C207.504 62.5996 207.391 62.3516 207.238 62.1367C207.09 61.918 206.903 61.7461 206.676 61.6211C206.453 61.4961 206.192 61.4336 205.891 61.4336C205.594 61.4336 205.332 61.4961 205.106 61.6211C204.883 61.7461 204.696 61.918 204.543 62.1367C204.395 62.3516 204.283 62.5996 204.209 62.8809C204.135 63.1582 204.098 63.4531 204.098 63.7656ZM211.247 61.6562V67H210.163V60.6602H211.217L211.247 61.6562ZM213.227 60.625L213.221 61.6328C213.132 61.6133 213.046 61.6016 212.964 61.5977C212.885 61.5898 212.796 61.5859 212.694 61.5859C212.444 61.5859 212.223 61.625 212.032 61.7031C211.84 61.7812 211.678 61.8906 211.546 62.0312C211.413 62.1719 211.307 62.3398 211.229 62.5352C211.155 62.7266 211.106 62.9375 211.083 63.168L210.778 63.3438C210.778 62.9609 210.815 62.6016 210.889 62.2656C210.967 61.9297 211.087 61.6328 211.247 61.375C211.407 61.1133 211.61 60.9102 211.856 60.7656C212.106 60.6172 212.403 60.543 212.747 60.543C212.825 60.543 212.915 60.5527 213.016 60.5723C213.118 60.5879 213.188 60.6055 213.227 60.625ZM215.425 60.6602V67H214.335V60.6602H215.425ZM214.253 58.9785C214.253 58.8027 214.306 58.6543 214.411 58.5332C214.521 58.4121 214.681 58.3516 214.892 58.3516C215.099 58.3516 215.257 58.4121 215.366 58.5332C215.48 58.6543 215.536 58.8027 215.536 58.9785C215.536 59.1465 215.48 59.291 215.366 59.4121C215.257 59.5293 215.099 59.5879 214.892 59.5879C214.681 59.5879 214.521 59.5293 214.411 59.4121C214.306 59.291 214.253 59.1465 214.253 58.9785ZM221.179 65.7695V58H222.269V67H221.273L221.179 65.7695ZM216.914 63.9004V63.7773C216.914 63.293 216.972 62.8535 217.089 62.459C217.21 62.0605 217.38 61.7188 217.599 61.4336C217.822 61.1484 218.085 60.9297 218.39 60.7773C218.699 60.6211 219.042 60.543 219.421 60.543C219.82 60.543 220.167 60.6133 220.464 60.7539C220.765 60.8906 221.019 61.0918 221.226 61.3574C221.437 61.6191 221.603 61.9355 221.724 62.3066C221.845 62.6777 221.929 63.0977 221.976 63.5664V64.1055C221.933 64.5703 221.849 64.9883 221.724 65.3594C221.603 65.7305 221.437 66.0469 221.226 66.3086C221.019 66.5703 220.765 66.7715 220.464 66.9121C220.164 67.0488 219.812 67.1172 219.41 67.1172C219.039 67.1172 218.699 67.0371 218.39 66.877C218.085 66.7168 217.822 66.4922 217.599 66.2031C217.38 65.9141 217.21 65.5742 217.089 65.1836C216.972 64.7891 216.914 64.3613 216.914 63.9004ZM218.003 63.7773V63.9004C218.003 64.2168 218.035 64.5137 218.097 64.791C218.164 65.0684 218.265 65.3125 218.402 65.5234C218.539 65.7344 218.712 65.9004 218.923 66.0215C219.134 66.1387 219.386 66.1973 219.679 66.1973C220.039 66.1973 220.334 66.1211 220.564 65.9688C220.798 65.8164 220.986 65.6152 221.126 65.3652C221.267 65.1152 221.376 64.8438 221.455 64.5508V63.1387C221.408 62.9238 221.339 62.7168 221.25 62.5176C221.164 62.3145 221.05 62.1348 220.91 61.9785C220.773 61.8184 220.603 61.6914 220.4 61.5977C220.201 61.5039 219.964 61.457 219.691 61.457C219.394 61.457 219.138 61.5195 218.923 61.6445C218.712 61.7656 218.539 61.9336 218.402 62.1484C218.265 62.3594 218.164 62.6055 218.097 62.8867C218.035 63.1641 218.003 63.4609 218.003 63.7773ZM227.713 65.916V62.6523C227.713 62.4023 227.662 62.1855 227.561 62.002C227.463 61.8145 227.314 61.6699 227.115 61.5684C226.916 61.4668 226.67 61.416 226.377 61.416C226.103 61.416 225.863 61.4629 225.656 61.5566C225.453 61.6504 225.293 61.7734 225.176 61.9258C225.062 62.0781 225.006 62.2422 225.006 62.418H223.922C223.922 62.1914 223.98 61.9668 224.098 61.7441C224.215 61.5215 224.383 61.3203 224.602 61.1406C224.824 60.957 225.09 60.8125 225.398 60.707C225.711 60.5977 226.059 60.543 226.441 60.543C226.902 60.543 227.309 60.6211 227.66 60.7773C228.016 60.9336 228.293 61.1699 228.492 61.4863C228.695 61.7988 228.797 62.1914 228.797 62.6641V65.6172C228.797 65.8281 228.814 66.0527 228.85 66.291C228.889 66.5293 228.945 66.7344 229.019 66.9062V67H227.889C227.834 66.875 227.791 66.709 227.76 66.502C227.728 66.291 227.713 66.0957 227.713 65.916ZM227.9 63.1562L227.912 63.918H226.816C226.508 63.918 226.232 63.9434 225.99 63.9941C225.748 64.041 225.545 64.1133 225.381 64.2109C225.217 64.3086 225.092 64.4316 225.006 64.5801C224.92 64.7246 224.877 64.8945 224.877 65.0898C224.877 65.2891 224.922 65.4707 225.012 65.6348C225.102 65.7988 225.236 65.9297 225.416 66.0273C225.6 66.1211 225.824 66.168 226.09 66.168C226.422 66.168 226.715 66.0977 226.969 65.957C227.223 65.8164 227.424 65.6445 227.572 65.4414C227.725 65.2383 227.807 65.041 227.818 64.8496L228.281 65.3711C228.254 65.5352 228.18 65.7168 228.059 65.916C227.937 66.1152 227.775 66.3066 227.572 66.4902C227.373 66.6699 227.135 66.8203 226.857 66.9414C226.584 67.0586 226.275 67.1172 225.932 67.1172C225.502 67.1172 225.125 67.0332 224.801 66.8652C224.48 66.6973 224.23 66.4727 224.051 66.1914C223.875 65.9062 223.787 65.5879 223.787 65.2363C223.787 64.8965 223.853 64.5977 223.986 64.3398C224.119 64.0781 224.311 63.8613 224.561 63.6895C224.811 63.5137 225.111 63.3809 225.463 63.291C225.814 63.2012 226.207 63.1562 226.641 63.1562H227.9ZM234.516 65.7695V58H235.606V67H234.61L234.516 65.7695ZM230.25 63.9004V63.7773C230.25 63.293 230.309 62.8535 230.426 62.459C230.547 62.0605 230.717 61.7188 230.936 61.4336C231.159 61.1484 231.422 60.9297 231.727 60.7773C232.036 60.6211 232.379 60.543 232.758 60.543C233.157 60.543 233.504 60.6133 233.801 60.7539C234.102 60.8906 234.356 61.0918 234.563 61.3574C234.774 61.6191 234.94 61.9355 235.061 62.3066C235.182 62.6777 235.266 63.0977 235.313 63.5664V64.1055C235.27 64.5703 235.186 64.9883 235.061 65.3594C234.94 65.7305 234.774 66.0469 234.563 66.3086C234.356 66.5703 234.102 66.7715 233.801 66.9121C233.5 67.0488 233.149 67.1172 232.746 67.1172C232.375 67.1172 232.036 67.0371 231.727 66.877C231.422 66.7168 231.159 66.4922 230.936 66.2031C230.717 65.9141 230.547 65.5742 230.426 65.1836C230.309 64.7891 230.25 64.3613 230.25 63.9004ZM231.34 63.7773V63.9004C231.34 64.2168 231.371 64.5137 231.434 64.791C231.5 65.0684 231.602 65.3125 231.739 65.5234C231.875 65.7344 232.049 65.9004 232.26 66.0215C232.471 66.1387 232.723 66.1973 233.016 66.1973C233.375 66.1973 233.67 66.1211 233.901 65.9688C234.135 65.8164 234.323 65.6152 234.463 65.3652C234.604 65.1152 234.713 64.8438 234.791 64.5508V63.1387C234.745 62.9238 234.676 62.7168 234.586 62.5176C234.5 62.3145 234.387 62.1348 234.246 61.9785C234.11 61.8184 233.94 61.6914 233.737 61.5977C233.537 61.5039 233.301 61.457 233.028 61.457C232.731 61.457 232.475 61.5195 232.26 61.6445C232.049 61.7656 231.875 61.9336 231.739 62.1484C231.602 62.3594 231.5 62.6055 231.434 62.8867C231.371 63.1641 231.34 63.4609 231.34 63.7773Z"
            fill="#767575"
          />
        </G>
        <G>
          <G>
            <Path
              d="M288.615 47.9997C288.168 47.9997 287.787 47.8424 287.472 47.5276C287.157 47.2129 287 46.8318 287 46.3843V33.9997H286V32.9997H290V32.2305H296V32.9997H300V33.9997H299V46.3843C299 46.8446 298.846 47.2289 298.538 47.5372C298.229 47.8456 297.845 47.9997 297.385 47.9997H288.615ZM298 33.9997H288V46.3843C288 46.5638 288.058 46.7113 288.173 46.8266C288.288 46.942 288.436 46.9997 288.615 46.9997H297.385C297.538 46.9997 297.679 46.9356 297.808 46.8074C297.936 46.6792 298 46.5382 298 46.3843V33.9997ZM290.808 44.9997H291.808V35.9997H290.808V44.9997ZM294.192 44.9997H295.192V35.9997H294.192V44.9997Z"
              fill="#BCBABA"
            />
          </G>
          <Path
            d="M277.685 66.0801V67H273.167V66.0801H277.685ZM273.396 58.4688V67H272.265V58.4688H273.396ZM277.087 62.1367V63.0566H273.167V62.1367H277.087ZM277.626 58.4688V59.3945H273.167V58.4688H277.626ZM280.117 58V67H279.027V58H280.117ZM283.053 60.6602V67H281.963V60.6602H283.053ZM281.881 58.9785C281.881 58.8027 281.934 58.6543 282.039 58.5332C282.149 58.4121 282.309 58.3516 282.52 58.3516C282.727 58.3516 282.885 58.4121 282.994 58.5332C283.108 58.6543 283.164 58.8027 283.164 58.9785C283.164 59.1465 283.108 59.291 282.994 59.4121C282.885 59.5293 282.727 59.5879 282.52 59.5879C282.309 59.5879 282.149 59.5293 282.039 59.4121C281.934 59.291 281.881 59.1465 281.881 58.9785ZM285.889 61.9199V67H284.8V60.6602H285.831L285.889 61.9199ZM285.667 63.5898L285.163 63.5723C285.167 63.1387 285.223 62.7383 285.333 62.3711C285.442 62 285.604 61.6777 285.819 61.4043C286.034 61.1309 286.302 60.9199 286.622 60.7715C286.942 60.6191 287.313 60.543 287.735 60.543C288.032 60.543 288.305 60.5859 288.555 60.6719C288.805 60.7539 289.022 60.8848 289.206 61.0645C289.389 61.2441 289.532 61.4746 289.634 61.7559C289.735 62.0371 289.786 62.377 289.786 62.7754V67H288.702V62.8281C288.702 62.4961 288.645 62.2305 288.532 62.0312C288.423 61.832 288.266 61.6875 288.063 61.5977C287.86 61.5039 287.622 61.457 287.348 61.457C287.028 61.457 286.761 61.5137 286.546 61.627C286.331 61.7402 286.159 61.8965 286.03 62.0957C285.901 62.2949 285.807 62.5234 285.749 62.7812C285.694 63.0352 285.667 63.3047 285.667 63.5898ZM289.774 62.9922L289.048 63.2148C289.052 62.8672 289.108 62.5332 289.218 62.2129C289.331 61.8926 289.493 61.6074 289.704 61.3574C289.919 61.1074 290.182 60.9102 290.495 60.7656C290.807 60.6172 291.165 60.543 291.567 60.543C291.907 60.543 292.208 60.5879 292.47 60.6777C292.735 60.7676 292.958 60.9062 293.137 61.0938C293.321 61.2773 293.46 61.5137 293.554 61.8027C293.647 62.0918 293.694 62.4355 293.694 62.834V67H292.604V62.8223C292.604 62.4668 292.548 62.1914 292.434 61.9961C292.325 61.7969 292.169 61.6582 291.966 61.5801C291.766 61.498 291.528 61.457 291.251 61.457C291.012 61.457 290.802 61.498 290.618 61.5801C290.434 61.6621 290.28 61.7754 290.155 61.9199C290.03 62.0605 289.934 62.2227 289.868 62.4062C289.805 62.5898 289.774 62.7852 289.774 62.9922ZM296.53 60.6602V67H295.441V60.6602H296.53ZM295.359 58.9785C295.359 58.8027 295.411 58.6543 295.517 58.5332C295.626 58.4121 295.786 58.3516 295.997 58.3516C296.204 58.3516 296.363 58.4121 296.472 58.5332C296.585 58.6543 296.642 58.8027 296.642 58.9785C296.642 59.1465 296.585 59.291 296.472 59.4121C296.363 59.5293 296.204 59.5879 295.997 59.5879C295.786 59.5879 295.626 59.5293 295.517 59.4121C295.411 59.291 295.359 59.1465 295.359 58.9785ZM299.373 62.0137V67H298.289V60.6602H299.314L299.373 62.0137ZM299.115 63.5898L298.664 63.5723C298.668 63.1387 298.732 62.7383 298.857 62.3711C298.982 62 299.158 61.6777 299.384 61.4043C299.611 61.1309 299.881 60.9199 300.193 60.7715C300.509 60.6191 300.859 60.543 301.242 60.543C301.554 60.543 301.836 60.5859 302.086 60.6719C302.336 60.7539 302.548 60.8867 302.724 61.0703C302.904 61.2539 303.041 61.4922 303.134 61.7852C303.228 62.0742 303.275 62.4277 303.275 62.8457V67H302.185V62.834C302.185 62.502 302.136 62.2363 302.039 62.0371C301.941 61.834 301.798 61.6875 301.611 61.5977C301.423 61.5039 301.193 61.457 300.92 61.457C300.65 61.457 300.404 61.5137 300.181 61.627C299.963 61.7402 299.773 61.8965 299.613 62.0957C299.457 62.2949 299.334 62.5234 299.244 62.7812C299.158 63.0352 299.115 63.3047 299.115 63.5898ZM308.678 65.916V62.6523C308.678 62.4023 308.627 62.1855 308.525 62.002C308.428 61.8145 308.279 61.6699 308.08 61.5684C307.881 61.4668 307.635 61.416 307.342 61.416C307.068 61.416 306.828 61.4629 306.621 61.5566C306.418 61.6504 306.258 61.7734 306.141 61.9258C306.027 62.0781 305.971 62.2422 305.971 62.418H304.887C304.887 62.1914 304.945 61.9668 305.063 61.7441C305.18 61.5215 305.348 61.3203 305.566 61.1406C305.789 60.957 306.055 60.8125 306.363 60.707C306.676 60.5977 307.024 60.543 307.406 60.543C307.867 60.543 308.274 60.6211 308.625 60.7773C308.981 60.9336 309.258 61.1699 309.457 61.4863C309.66 61.7988 309.762 62.1914 309.762 62.6641V65.6172C309.762 65.8281 309.779 66.0527 309.815 66.291C309.854 66.5293 309.91 66.7344 309.984 66.9062V67H308.854C308.799 66.875 308.756 66.709 308.725 66.502C308.693 66.291 308.678 66.0957 308.678 65.916ZM308.865 63.1562L308.877 63.918H307.781C307.473 63.918 307.197 63.9434 306.955 63.9941C306.713 64.041 306.51 64.1133 306.346 64.2109C306.182 64.3086 306.057 64.4316 305.971 64.5801C305.885 64.7246 305.842 64.8945 305.842 65.0898C305.842 65.2891 305.887 65.4707 305.977 65.6348C306.066 65.7988 306.201 65.9297 306.381 66.0273C306.565 66.1211 306.789 66.168 307.055 66.168C307.387 66.168 307.68 66.0977 307.934 65.957C308.188 65.8164 308.389 65.6445 308.537 65.4414C308.69 65.2383 308.772 65.041 308.783 64.8496L309.246 65.3711C309.219 65.5352 309.145 65.7168 309.024 65.916C308.902 66.1152 308.74 66.3066 308.537 66.4902C308.338 66.6699 308.1 66.8203 307.822 66.9414C307.549 67.0586 307.24 67.1172 306.897 67.1172C306.467 67.1172 306.09 67.0332 305.766 66.8652C305.445 66.6973 305.195 66.4727 305.016 66.1914C304.84 65.9062 304.752 65.5879 304.752 65.2363C304.752 64.8965 304.818 64.5977 304.951 64.3398C305.084 64.0781 305.275 63.8613 305.525 63.6895C305.775 63.5137 306.076 63.3809 306.428 63.291C306.779 63.2012 307.172 63.1562 307.606 63.1562H308.865ZM312.569 61.6562V67H311.485V60.6602H312.54L312.569 61.6562ZM314.549 60.625L314.543 61.6328C314.454 61.6133 314.368 61.6016 314.286 61.5977C314.208 61.5898 314.118 61.5859 314.016 61.5859C313.766 61.5859 313.545 61.625 313.354 61.7031C313.163 61.7812 313 61.8906 312.868 62.0312C312.735 62.1719 312.629 62.3398 312.551 62.5352C312.477 62.7266 312.428 62.9375 312.405 63.168L312.1 63.3438C312.1 62.9609 312.137 62.6016 312.211 62.2656C312.29 61.9297 312.409 61.6328 312.569 61.375C312.729 61.1133 312.932 60.9102 313.178 60.7656C313.428 60.6172 313.725 60.543 314.069 60.543C314.147 60.543 314.237 60.5527 314.338 60.5723C314.44 60.5879 314.51 60.6055 314.549 60.625Z"
            fill="#767575"
          />
        </G>
      </G>
      <Circle cx={213} cy={48} r={47.5} stroke="#1AD9E5" />
    </G>
    <Defs></Defs>
  </Svg>
);

export { PressPrioritiesSVG };