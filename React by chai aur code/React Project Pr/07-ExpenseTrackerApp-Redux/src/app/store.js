import {configureStore} from "@reduxjs/toolkit"
import Expensereducer from "../features/expense/expenseSlice"
export const store=configureStore({
   reducer:Expensereducer 
})