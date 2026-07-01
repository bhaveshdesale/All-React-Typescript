import  { useReducer } from 'react'

type CounterState={
  count:number
}
type updateAction={
  type:'increment'|'decrement',
  payload:number
}

type resetAction={
  type:'reset'
}
type CounterAction=updateAction| resetAction

const initialState={
  count:0
}

function reducer(state:CounterState, action:CounterAction){
   switch(action.type){
    case 'increment':
      return {count:state.count+ action.payload}
    case 'decrement':
      return {count:state.count - action.payload}

     case 'reset':
      return initialState
    default:
      return state
   }
  
}

function Counter() {
  const [state, dispatch]=useReducer(reducer, initialState);
  return (
    <div>
     Count:{state.count}
     <button onClick={()=> dispatch({type:'increment', payload:10})}>
      Increament 10
     </button>
      <button onClick={()=> dispatch({type:'decrement', payload:10})}>
        Decreament 10
      </button>
      <button onClick={()=> dispatch({type:'reset'})}>
        Reaset
        </button>
    </div>
  )
}

export default Counter
