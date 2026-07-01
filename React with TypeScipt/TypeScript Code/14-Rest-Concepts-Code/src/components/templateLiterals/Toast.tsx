// Use of template literals and exclude keyword in props

type HorizonatalPosition='left' | 'center'| 'right'
type VerticaPosition='top' | 'center' | 'bottom'

type ToastProps={
  position:Exclude<`${HorizonatalPosition}-${VerticaPosition}`, 'center-center'> | 'center'
}
function Toast({position}:ToastProps) {
  return (
    <div>
      {position}
    </div>
  )
}

export default Toast
