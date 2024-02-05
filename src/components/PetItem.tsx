import type { Pet } from "../helpers";
const PetItem = ({ name, age, owner }: Pet) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner}</td>
    </tr>
  );
};

export default PetItem;
