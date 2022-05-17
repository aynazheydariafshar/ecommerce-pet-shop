import { useState , useEffect} from "react"

const useFetch = (url , dataObj) => {
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
       (async() => {
           setError(null);
           setLoading(false);
           axios.post(`http://localhost:3002/${url}` , dataObj)
           .then(response => {
               setLoading(true);
            }).catch (error => {
                setLoading(true);
            })
       })();
    }, [url])

    return {data , loading , error}
}

export default useFetch