import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { uniqueCategories, categoryEnum } from './../utils/ExpensesData'

console.log(Object.values(uniqueCategories))

const schema = z.object({
  description: z.string().min(3, { message: 'Description should be atlease 3 charater' }).max(100),
  amount: z.number({ invalid_type_error: 'Amount is requried' }).min(0.01).max(100_000),
  category: z.enum(categoryEnum, {
    errorMap: () => ({ message: 'Category is requied' }),
  }),
})

type ExpensesFormData = z.infer<typeof schema>

interface Props {
  categories: string[]
  onSubmit: (data: ExpensesFormData) => void
}

const ExpenseForm = ({ categories, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpensesFormData>({ resolver: zodResolver(schema) })

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data), reset()
      })}>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input {...register('description')} id='description' type='text' className='form-control' />
        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id='amount'
          type='number'
          className='form-control'
        />
        {errors.amount && <p className='text-danger'>{errors.amount?.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='category' className='form-label'></label>
        <select {...register('category')} id='category' className='form-select'>
          <option value=''></option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className='text-danger'>{errors.category?.message}</p>}
      </div>
      <button disabled={!isValid} className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default ExpenseForm
