import type React from "react"

type ContainerProps={
  styles:React.CSSProperties
}

function Container({styles}:ContainerProps) {
  return (
    <div style={styles}>
      Styles are applied here
    </div>
  )
}

export default Container
