type ToggleButtonType = { buttonText: string; state: boolean; setState: any };

const ToggleButton = ({ buttonText, state, setState }: ToggleButtonType) => {
  return <button onClick={() => setState(!state)}>{buttonText}</button>;
};

export default ToggleButton;
