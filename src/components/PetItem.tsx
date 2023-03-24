export type PetItemType = {
  name: string
  age?: number
  owner?: string
};

export const PetItem = ({ name, age, owner }: PetItemType): JSX.Element => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner}</td>
    </tr>
  );
};

// export default PetItem;