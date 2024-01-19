import PetItem from './PetItem'
import { Pet, Pets } from '../types'

const PetList = ({ pets }: Pets) => {
  return (
    <>
      {pets.map(({ name, age, owner }: Pet) => ( 
        <PetItem 
          name={name}
          age={age}
          owner={owner}
        />
      ))}
    </>
  )
}

export default PetList
