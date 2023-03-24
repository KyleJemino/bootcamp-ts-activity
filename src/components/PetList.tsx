import PetItem from './PetItem';

type PetsType = {
  name: string;
  age?: number;
  owner?: string;
};

type PetList = {
  pets: PetsType[];
};

const PetList = ({ pets }: PetList) => {
  return (
    <>
      {pets.map(({ name, age, owner }) => (
        <PetItem name={name} age={age} owner={owner} />
      ))}
    </>
  );
};

export default PetList;
