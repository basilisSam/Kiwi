import { defaultTheme } from "@kiwicom/orbit-components";
import Button from "@kiwicom/orbit-components/lib/Button";


const KeyboardButton = ({keyNumber,letters}:any) => {
  const divStyle:any = {
    backgroundColor: `${defaultTheme.orbit.paletteCloudDark}`,
    border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
    boxSizing: "border-box",
    padding: `${defaultTheme.orbit.paddingButtonSmall}`,
  };
  return (
    <div style={divStyle}>
   <Button>{keyNumber} {letters}</Button>
  </div>
  )
}

export default KeyboardButton