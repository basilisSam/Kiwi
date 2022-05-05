import { defaultTheme } from "@kiwicom/orbit-components";
import Button from "@kiwicom/orbit-components/lib/Button";


const KeyboardButton = ({keyNumber,letters,handleNumberClick}:any) => {
  const divStyle:any = {
    backgroundColor: `${defaultTheme.orbit.paletteCloudDark}`,
    border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
    boxSizing: "border-box",
    padding: `${defaultTheme.orbit.paddingButtonSmall}`,
  };
  return (
    <div style={divStyle}>
   <Button onClick={() => handleNumberClick(letters)}>{keyNumber} {letters}</Button>
  </div>
  )
}

export default KeyboardButton