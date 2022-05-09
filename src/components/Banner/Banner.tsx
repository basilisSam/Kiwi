import { Inline } from "@kiwicom/orbit-components"
import logo from "../../logo.png";

const Banner = () => {
  return (
    <Inline justify='center'>
        <img
          data-testid='logo'
          style={{ width: "200px", marginBottom: "50px" }}
          src={logo}
          alt='My logo'
        />
      </Inline>
  )
}

export default Banner