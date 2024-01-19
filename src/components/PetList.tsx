import PetItem from "./PetItem";
import { Pets } from "../helpers";
const PetList = ({ pets }: Pets) => {
  return (
    <>
      {pets.map(({ name, age, owner }) => (
        <PetItem name={name} age={age} owner={owner} />
      ))}
    </>
  );
};

export default PetList;
