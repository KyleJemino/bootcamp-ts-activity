import React from "react";

interface PetItemProps {
  name: string;
  age: number; 
  owner?: string; 
}

const PetItem: React.FC<PetItemProps> = ({ name, age, owner }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner || "Unknown"}</td>
    </tr>
  );
};

export default PetItem;
