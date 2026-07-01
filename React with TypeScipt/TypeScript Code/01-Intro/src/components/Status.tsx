type StatusProps={
  status:"Loading" | "Success" | "Error"
}

function Status({status}:StatusProps) {
let message= status==="Loading"? "Loading" :status=="Success"? "Data fetched Successfully" : "Error fetching data"
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default Status
