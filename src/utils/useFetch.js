import { useState, useEffect } from "react";

export default function useFetch(url){
  const [data, setData] = useState([]);
  const [pending, setPending] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setPending(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonProducts = await response.json();
        setData(jsonProducts);
        setPending(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);
  return {data, pending};
}