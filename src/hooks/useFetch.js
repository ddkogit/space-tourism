import { useState, useEffect } from "react";

export  const useFetch = (url) => {
  const [data, setDate] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);

      try{

        const res = await fetch(url,{signal: controller.signal});
        if(!res.ok){
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setIsPending(false);
        setDate(json);
        setError(null);
      }
      catch(err){

        if(err.name === "AbortError"){
          console.log("Fetch was aborted");
        }
        else{
          
          
          setIsPending(false);
          setError("could not fetch the data");
          console.log(err.message);
        }
      }
      };
    fetchData()

    return ()=>{

      controller.abort();
      
    }
  }, [url])
  return {data, isPending,error}
};
  
export default useFetch;
