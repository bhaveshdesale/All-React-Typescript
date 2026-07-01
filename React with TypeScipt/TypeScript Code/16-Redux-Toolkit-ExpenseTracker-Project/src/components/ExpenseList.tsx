import { useAppSelector } from "../hooks/reduxHooks"
import ExpenseItem from "./ExpenseItem"

function ExpenseList() {
  const expenses=useAppSelector((state)=> state.expense.expenses)
  return (
    <div>
      {expenses.map((expense)=>(
        <ExpenseItem key={expense.id}
        expense={expense}/>
      ))}
      
    </div>
  )
}

export default ExpenseList
