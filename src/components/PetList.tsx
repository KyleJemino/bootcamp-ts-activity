import PetItem from "./PetItem";

type PetItemType = {
  name: string;
  age?: number;
  owner?: string;
};

type petsType = {
  pets: PetItemType[];
};

const PetList = ({ pets }: petsType) => {
  return (
    <>
      {pets.map(({ name, age, owner }) => (
        <PetItem name={name} age={age} owner={owner} />
      ))}
    </>
  );
};

export default PetList;
