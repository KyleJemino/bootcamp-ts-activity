import React from 'react';
import PetItem from './PetItem';

interface PetListProps {
  pets: {
    name: string;
    age: number;
    owner?: string; 
  }[];
}

const PetList: React.FC<PetListProps> = ({ pets }) => {
  return (
    <>
      {pets.map(({ name, age, owner }, index) => ( 
        <PetItem 
          key={index}
          name={name}
          age={age}
          owner={owner}
        />
      ))}
    </>
  );
}

export default PetList;
