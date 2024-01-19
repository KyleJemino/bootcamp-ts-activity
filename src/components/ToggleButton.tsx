import { ToggleButtonProps } from './types';

const ToggleButton = ({
  buttonText,
  state,
  setState
}: ToggleButtonProps) => {
  return (
    <button
      onClick={() => setState(state)}
    >
      {buttonText}
    </button>
  )
}

export default ToggleButton
