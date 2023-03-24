import PetItem from './PetItem'
import { PetType } from '../types'

type Props = {
  pets: PetType[]
}
const PetList = ({ pets }: Props): JSX.Element => {
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
