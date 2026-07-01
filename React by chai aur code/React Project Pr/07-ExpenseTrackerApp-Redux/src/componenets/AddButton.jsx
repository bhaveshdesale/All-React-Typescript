import React, { useRef } from 'react'
import ExpenseForm from './ExpenseForm'

function AddButton() {
const displayExpenseForm=()=>{
}

  return (
    <div>
      <button className='add-button' onClick={ExpenseForm} commandFor="my-dialog" command="show-modal">Add Button</button>
    </div>
  )
}

export default AddButton
