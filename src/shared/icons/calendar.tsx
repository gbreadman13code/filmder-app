import * as React from "react";
import Svg, { Circle, G, Path, SvgProps } from "react-native-svg";
export const CalendarIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G stroke="#fff" strokeWidth={1.5}>
      <Path strokeLinecap="round" d="M7 4V2.5M17 4V2.5" />
      <Circle cx={16.5} cy={16.5} r={1.5} />
      <Path
        strokeLinecap="round"
        d="M21.5 9H10.75M2 9h3.875M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828-.653.654-1.528.943-2.828 1.07"
      />
    </G>
  </Svg>
);
