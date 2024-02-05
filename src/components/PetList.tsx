import { Pet } from '../types'
import PetItem from './PetItem'

const PetList = ({ pets }: { pets: Pet[] }) => {
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
