import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useFetch(url, options) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result === Object) {
          console.log("is object");
          const newResult = Object.entries(result).map(([name, data]) => ({
            name,
            ...data,
          }));
          setData(newResult);
        }
        setData(result.list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);
  return { data };
}

export default useFetch;
