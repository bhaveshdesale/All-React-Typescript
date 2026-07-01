import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
  expenses:[{
    id:1,
    title:"Pizza",
    amount:200,
    category:"Food"
  }]
}


export const expenseSlice=createSlice({
  name:"expense",
  initialState,
  reducers:{
    addExpense:(state, action)=>{
       const expense={
        id:nanoid(),
        title:action.payload.title,
        amount:action.payload.amount,
        category:action.payload.category
       } 
        state.expenses.push(expense);
    },
    deleteExpense:(state, action)=>{
      // state.expenses=state.expenses.filter((expense)=> expense.id!=action.id);

    }
   


  }
})

export const {addExpense, deleteExpense} =expenseSlice.actions;
export default expenseSlice.reducer;
