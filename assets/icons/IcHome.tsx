import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M8 1.5a.5.5 0 0 1 .5.5v1.837l-1 .794V2.5h-3v4.514l-1 .794V2a.5.5 0 0 1 .41-.492L4 1.5z"
    />
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="m11.678.617-10 8.4A.5.5 0 0 0 1.5 9.4V22a.5.5 0 0 0 .5.5h10l.09-.008A.5.5 0 0 0 12.5 22v-7.5h5V22a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V9.4a.5.5 0 0 0-.178-.383l-10-8.4a.502.502 0 0 0-.644 0zM12 1.652l9.5 7.98V21.5h-3V14a.5.5 0 0 0-.5-.5h-6l-.09.008a.5.5 0 0 0-.41.492v7.5h-9V9.632l9.5-7.98z"
    />
  </Svg>
)
export default SvgComponent
