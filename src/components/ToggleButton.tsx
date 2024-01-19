import type { ToggleButtonType } from "../helpers";
const ToggleButton = ({ buttonText, state, setState }: ToggleButtonType) => {
  return <button onClick={() => setState(state)}>{buttonText}</button>;
};

export default ToggleButton;
