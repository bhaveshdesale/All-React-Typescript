export interface Expense{
  id:number,
  title:string,
  amount:number,
  category:string
}

export interface AddExpensePayload{
  title:string,
  amount:number,
  category:string
}