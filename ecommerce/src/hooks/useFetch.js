import axios from "axios";
import { useState , useEffect} from "react"

const useFetch = (url) => {
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [data , setdata] = useState([]);

    useEffect(() => {
       (async() => {
           setError(null);
           setLoading(false);
           axios.get(`http://localhost:3002/${url}`)
           .then(response => {
               setdata(response.data)
               setLoading(true);
            }).catch (error => {
                setLoading(true);
                setError("لطفا دوباره تلاش کنید")
            })
       })();
    }, [url])

    return {data , loading , error}
}

export default useFetch