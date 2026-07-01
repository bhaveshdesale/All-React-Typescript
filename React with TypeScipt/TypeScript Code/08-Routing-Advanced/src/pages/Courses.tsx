import {Link} from "react-router-dom"
function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      <Link to="/courses/1">
      React Course
      </Link>
      <br />
      
      <Link to="/courses/2">
      Typescript Course
      
      </Link>
    </div>
  )
}

export default Courses
