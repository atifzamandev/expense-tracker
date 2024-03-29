
export const expensesData = [
    { id: 1, description: 'Grocery shopping', amount: 75.25, category: 'Food' },
    { id: 2, description: 'Rent payment', amount: 1200.0, category: 'Housing' },
    { id: 3, description: 'Car insurance', amount: 120.5, category: 'Transportation' },
    { id: 4, description: 'Electricity bill', amount: 85.75, category: 'Utilities' },
    { id: 5, description: 'Movie tickets', amount: 24.0, category: 'Entertainment' },
    { id: 6, description: 'Gym membership', amount: 45.99, category: 'Health' },
    { id: 7, description: 'New laptop', amount: 999.99, category: 'Electronics' },
    { id: 8, description: 'Dinner at a restaurant', amount: 65.25, category: 'Food' },
    { id: 9, description: 'Internet bill', amount: 69.99, category: 'Utilities' },
    { id: 10, description: 'Concert tickets', amount: 120.0, category: 'Entertainment' },
  ]

  export const uniqueCategories  = [...new Set(expensesData.map(item=> item.category))]

 export const categoryEnum = [
    'Food',
    'Housing',
    'Transportation',
    'Utilities',
    'Entertainment',
    'Health',
    'Electronics',
  ] as const


  