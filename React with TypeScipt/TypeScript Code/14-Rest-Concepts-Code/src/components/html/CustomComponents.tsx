import React from 'react'
import CustomButton from './Button'
function CustomComponents({varient}:React.ComponentProps<typeof CustomButton>) {
  return (
    <div>
      <h1 className={`class-with-${varient}`}>Hello</h1>
    </div>
  )
}

export default CustomComponents
