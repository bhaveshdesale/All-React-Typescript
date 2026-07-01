import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/reduxHooks';
import { addExpense } from '../features/expense/expenseSlice';

function AddExpense() {
  const [title, setTitle]=useState("");
  const [amount, setAmount]=useState<number>(0);
  const [category, setCategory]=useState("");

  const dispatch=useAppDispatch();
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    if(!title.trim() || amount<=0 || !category.trim()) return 
    dispatch(addExpense({
      title,
      amount,
      category
    }))

  }
  return (
      <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder='Enter the title'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}/>

      <input type="number"
      placeholder='Enter the amount'
      value={amount}
      onChange={(e)=> setAmount(Number(e.target.value))}/>

      <input type="text"
      value={category}
      onChange={(e)=> setCategory(e.target.value)} />

      <button type="submit">Add Expense</button>
      </form>
  )
}

export default AddExpense
