import { PetType } from '../types'

const PetItem = ({name, age, owner}: PetType): JSX.Element => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner}</td>
    </tr>
  )
}

export default PetItem
