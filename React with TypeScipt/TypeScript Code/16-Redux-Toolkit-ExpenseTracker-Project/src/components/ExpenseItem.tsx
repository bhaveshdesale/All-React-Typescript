import type { Expense } from "../type/expense"
import { deleteExpense } from "../features/expense/expenseSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

interface ExpenseItemProps{
  expense:Expense
}

function ExpenseItem({expense}:ExpenseItemProps) {
 const dispatch= useAppDispatch();
  const handleDelete=()=>{
      dispatch(deleteExpense(expense.id))
  }
  return (
    <div>
    <h3>{expense.title}</h3>
    <h4>{expense.category}</h4>
    <h4>{expense.amount}</h4>
    <button onClick={handleDelete}>Delete</button>
     
      
    </div>
  )
}

export default ExpenseItem
