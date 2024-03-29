interface Props {
  categories: string[]
  onSelect: (category: string) => void
}
const ExpenseFilter = ({ categories, onSelect }: Props) => {
  return (
    <select className='form-select' onChange={(event) => onSelect(event.target.value)}>
      <option value=''>All Categories</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default ExpenseFilter
