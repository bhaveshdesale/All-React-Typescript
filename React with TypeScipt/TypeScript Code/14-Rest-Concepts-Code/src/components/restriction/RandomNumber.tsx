// Restricting some props  

type RandomNumberType={
  value:number
}
type PositiveNumber=RandomNumberType &{
  isPositive:boolean
  isNegative?:never
  isZero?:never
}

type NegativeNumber=RandomNumberType &{
  isNegative:boolean
  isPositive?:never
  isZero?:never
}


type ZeroNumber=RandomNumberType &{
  isZero:boolean
  isPositive?:never
  isNegative?:never
}
type RandomNumber=PositiveNumber | NegativeNumber |ZeroNumber

function RandomNumber({value, isNegative, isPositive, isZero}:RandomNumber) {
  return (
    <div>
      {value} 
      {isPositive&& 'positive'} 
      {isNegative && 'negative'}
      {isZero && 'zero'}
      
    </div>
  )
}

export default RandomNumber
