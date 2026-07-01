import { useCallback, useMemo } from "react"

function UseMemoUseCallback() {
  const value=[100, 10, 20, 30];
  const total=useMemo(()=>{
        return value.reduce((a, b)=>a+b)
  }, [value])

  const handleClick=useCallback(()=>{
   console.log("click")
  }, [value])

  console.log(handleClick());
  console.log(total);
  return (
    <div>
    </div>
  )
}

export default UseMemoUseCallback
