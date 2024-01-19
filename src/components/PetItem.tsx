import { PetItemProps } from '../components/types'

const PetItem = ({name, age, owner}: PetItemProps) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner}</td>
    </tr>
  )
}

export default PetItem
