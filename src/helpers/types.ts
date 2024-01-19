import type { Dispatch, SetStateAction } from "react";
export type Pet = {
  name: string;
  age?: number;
  owner?: string;
};

export type Pets = {
  pets: Pet[];
};

export type ToggleButtonType = {
  buttonText: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};
