export type ButtonProp={
  varient:'primary' | 'secondary'
} & React.ComponentProps<'button'>

function CustomButton({varient, children, ...rest}:ButtonProp) {
  return (
    <button className={`class-with-${varient}`} {...rest}>{children}</button>
  )
}

export default CustomButton

