import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExpense } from '../features/expense/expenseSlice';

function ExpenseList() {
 const expenses=useSelector((state)=> state.expenses);
 const dispatch=useDispatch();

  return (
    <div>
     <input type="text" placeholder='search' />

    {expenses.map((exp)=> (
     <div className='expense-div' key={exp.id}> 
     {console.log("This is expenses ",exp)}
     {console.log(exp.id)}
      <p>{exp.title}</p>
      <p>{exp.amount}</p>
      <p>{exp.category}</p>
      <button>Update</button>
      <button onClick={dispatch(deleteExpense(exp.id))}>Delete</button>
     </div>
    ))}
    </div>
  )
}

export default ExpenseList
