import React, { useEffect, useState } from "react";

// const useFetch = (url) => {
function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch(url)
      .then((r) => r.json())

      .then((r) => {
        // console.log("r--", r);
        setData(r.items);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    // fetchData();
  }, [url]);


  return {
    data,
    loading,
    error,
  };

}

export default useFetch;
