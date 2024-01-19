import React from 'react';

interface ToggleButtonProps {
  buttonText: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ buttonText, state, setState }) => {
  return (
    <button onClick={() => setState(!state)}>
      {buttonText}
    </button>
  );
}

export default ToggleButton;
