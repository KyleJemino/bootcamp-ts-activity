type ToggleButtonType = {
  buttonText: string;
  state: boolean;
  setState: (state: boolean) => void;
};

const ToggleButton = ({ buttonText, state, setState }: ToggleButtonType) => {
  return <button onClick={() => setState(!state)}>{buttonText}</button>;
};

export default ToggleButton;
