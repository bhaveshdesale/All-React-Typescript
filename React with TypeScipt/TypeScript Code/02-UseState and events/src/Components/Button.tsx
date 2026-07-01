type ButtonProps={
  handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:number)=> void
}
// here handleClick does not return anything so type is void

function Button({handleClick}:ButtonProps) {
  return (
    <div>
      <button onClick={(event)=>handleClick(event, 1)}>Click</button>
    </div>
  )
}

export default Button
