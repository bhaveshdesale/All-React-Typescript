import React from "react"
interface ChildProps{
  onClick:()=> void
}
const ReactMomo=React.memo(({onClick}:ChildProps)=> {

  return (
    <div>
      <button
      onClick={onClick}>
        Click
      </button>
    </div>
  )
}
)

export default ReactMomo
