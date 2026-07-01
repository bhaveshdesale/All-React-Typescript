import { useEffect, useState } from "react";

function useGithubData(username) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

    if (!username) return;

    // START LOADING
    setLoading(true);

    // CLEAR OLD ERROR
    setError("");

    fetch(`https://api.github.com/users/${username}`)

      .then((res) => {

        // USER NOT FOUND
        if (!res.ok) {
          throw new Error("User Not Found");
        }

        return res.json();
      })

      .then((res) => {

        console.log(res);

        setData(res);

      })

      .catch((err) => {

        console.log(err.message);

        setError(err.message);

      })

      .finally(() => {

        // STOP LOADING
        setLoading(false);

      });

  }, [username]);

  return { data, loading, error };
}

export default useGithubData;