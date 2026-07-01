import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/expense/expenseSlice";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dialogRef=useRef();

 const dispatch=useDispatch();

  const expenseFormSubmitHandler = (e) => {
    e.preventDefault();

    const expense = {
      title,
      amount,
      category,
    };
 
    console.log(expense);
if(!title && !amount && !category) return

dispatch(addExpense(expense));
console.log(dispatch(addExpense(expense)));

   dialogRef.current.close();
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <dialog id="my-dialog" ref={dialogRef}>
      <div className="dialog-div">
        <form
          onSubmit={expenseFormSubmitHandler}
          className="expense-submit-form"
        >
          <input
            type="text"
            placeholder="Enter Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">
            Add Expense
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default ExpenseForm;