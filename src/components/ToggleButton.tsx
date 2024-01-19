import { Button } from "../types"

const ToggleButton = ({
  buttonText,
  state,
  setState
}: Button) => {
  return (
    <button
      onClick={() => setState(!state)}
    >
      {buttonText}
    </button>
  )
}

export default ToggleButton
