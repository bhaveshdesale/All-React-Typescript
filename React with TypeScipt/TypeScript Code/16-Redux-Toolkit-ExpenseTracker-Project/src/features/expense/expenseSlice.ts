import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Expense, AddExpensePayload } from "../../type/expense";

interface initialStateType{
  expenses:Expense[]
} 

const initialState:initialStateType={
  expenses:[]
}

export const expenseSlice=createSlice({
  name:"Expense",
  initialState,
  reducers:{
    addExpense:(state, actions:PayloadAction<AddExpensePayload>)=>{
      state.expenses.push({
        id:Date.now(),
        title:actions.payload.title,
        category:actions.payload.category,
        amount:actions.payload.amount
      })

    },
    deleteExpense:(state, actions:PayloadAction<number>)=>{
      state.expenses=state.expenses.filter((expense)=> expense.id!==actions.payload)

    }
  }

})

 export const {addExpense,deleteExpense}=expenseSlice.actions;

 export default expenseSlice.reducer;