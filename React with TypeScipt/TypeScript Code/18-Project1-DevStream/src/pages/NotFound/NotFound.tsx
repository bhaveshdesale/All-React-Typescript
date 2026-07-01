import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404</h1>

      <p>Page Not Found</p>

      <Link to="/">
        Back Home
      </Link>
    </>
  );
}

export default NotFound;