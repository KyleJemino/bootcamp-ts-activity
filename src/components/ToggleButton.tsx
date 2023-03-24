import { Dispatch, SetStateAction } from 'react';

type ToggleType = {
  buttonText: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const ToggleButton = ({ buttonText, state, setState }: ToggleType) => {
  return <button onClick={() => setState(!state)}>{buttonText}</button>;
};

export default ToggleButton;
