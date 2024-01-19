import PetItem from './PetItem'
import { PetListProps } from './types'

const PetList = ({ pets }: PetListProps) => {
  return (
    <>
      {pets.map(({ name, age, owner }) => ( 
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
