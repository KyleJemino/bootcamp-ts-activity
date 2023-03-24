import {PetItem, PetItemType} from './PetItem'

type PetListType = {
  pets: PetItemType[]
}

const PetList = ({ pets }: PetListType): JSX.Element => {
  return (
    <>
      {pets.map(({ name, age, owner }: PetItemType) => ( 
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
