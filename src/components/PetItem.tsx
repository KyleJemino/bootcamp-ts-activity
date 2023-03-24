type PetsType = {
  name: string;
  age: number;
  owner: string;
};

const PetItem = ({ name, age, owner }: PetsType) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner}</td>
    </tr>
  );
};

export default PetItem;
