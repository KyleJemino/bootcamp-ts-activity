import { Dispatch, SetStateAction } from "react"

type ToggleButtonType = {
  buttonText: string
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

const ToggleButton = ({
  buttonText,
  state,
  setState
}: ToggleButtonType): JSX.Element => {
  return (
    <button
      onClick={() => setState(!state)}
    >
      {buttonText}
    </button>
  )
}

export default ToggleButton
