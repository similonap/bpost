import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width="24.0d"
    height="24.0d"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M12 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 7.5a9.491 9.491 0 0 0-8.143 4.606l-.182.303.225.273A10.477 10.477 0 0 0 12 22.5c3.175 0 6.118-1.418 8.1-3.82l.225-.273-.182-.303A9.495 9.495 0 0 0 12 13.5Zm.3 1.005a8.494 8.494 0 0 1 6.665 3.621l.129.191-.178.195A9.472 9.472 0 0 1 12 21.5l-.318-.005a9.472 9.472 0 0 1-6.598-2.982l-.178-.195.129-.191A8.488 8.488 0 0 1 12 14.5l.3.005Z"
    />
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5Zm0 1a9.5 9.5 0 0 1 9.5 9.5 9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2.5 12 9.5 9.5 0 0 1 12 2.5Z"
    />
  </Svg>
)
export default SvgComponent
