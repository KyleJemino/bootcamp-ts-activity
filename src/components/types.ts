// types.js
export type PetItemProps = {
  name: string;
  age?: number;
  owner?: string;
};

export type PetListProps = {
  pets: PetItemProps[];
};

export type ToggleButtonProps = {
  buttonText: string;
  state: boolean;
  setState: (state: boolean) => void;
};
