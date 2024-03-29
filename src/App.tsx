import { useState } from 'react'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm'
import { expensesData, uniqueCategories } from './utils/ExpensesData'

function App() {
  const [selectedCategory, SetSelectedCategory] = useState('')

  const [expenses, setExpenses] = useState(expensesData)

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses

  return (
    <div className='mx-5'>
      <h1 className='text-center my-3'>Expenses Tracker</h1>
      <div className=' mt-3 mb-5'>
        <ExpenseForm
          categories={uniqueCategories}
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className='my-3'>
        <ExpenseFilter
          categories={uniqueCategories}
          onSelect={(category) => SetSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  )
}

export default App
