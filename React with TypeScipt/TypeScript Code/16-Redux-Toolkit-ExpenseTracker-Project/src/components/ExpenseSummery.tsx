import { useAppSelector } from '../hooks/reduxHooks'

function ExpenseSummery() {
  const expenses=useAppSelector((state)=> state.expense.expenses)
  const total=expenses.reduce((acc, curr)=> acc+curr.amount, 0);
  return (
    <div>
      <h1>Total :{total}</h1>
    </div>
  )
}

export default ExpenseSummery
