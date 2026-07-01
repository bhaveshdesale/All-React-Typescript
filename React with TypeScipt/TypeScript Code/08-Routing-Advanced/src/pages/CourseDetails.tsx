import { useParams } from "react-router-dom"

function CourseDetails() {
 const {id} = useParams<{id:string}>();
  return (
    <div>
      <h1>Course Id: {id}</h1>
    </div>
  )
}

export default CourseDetails
