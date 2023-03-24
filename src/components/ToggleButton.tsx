import { Dispatch, SetStateAction } from 'react'

type Props = {
  buttonText: string
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

const ToggleButton = ({
  buttonText,
  state,
  setState
}: Props): JSX.Element => {
  return (
    <button
      onClick={() => setState(!state)}
    >
      {buttonText}
    </button>
  )
}

export default ToggleButton
