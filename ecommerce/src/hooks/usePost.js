import { useState , useEffect} from "react"

const useFetch = (url) => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
       (async() => {
           try {
               setLoading(true);
               const response = await fetch(`http://localhost:3002/${url}`);
               const resault = await response.json();
               setData(resault);
           } catch (error) {
               setError(error);
           } finally{
                setLoading(false);
           }
       })();
    }, [url])

    return {data , loading , error}
}

export default useFetch