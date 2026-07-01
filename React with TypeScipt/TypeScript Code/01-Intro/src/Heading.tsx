type HeadingProps={
  children:string
}


function Heading({children}:HeadingProps) {
  return (
    <div>
     {children}
    </div>
  )
}

export default Heading
