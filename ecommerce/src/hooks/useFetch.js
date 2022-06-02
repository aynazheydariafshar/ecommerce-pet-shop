import axios from "axios";
import { useState , useEffect} from "react"

const useFetch = (url) => {
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [data , setdata] = useState([]);

    useEffect(() => {
            setLoading(true);
            axios.get(`http://localhost:3002/${url}`)
            .then(response => {
                setdata(response.data)
            })
            .catch(err => setError("لطفا دوباره تلاش کنید"))
            .finally(res =>setLoading(false))
    }, [url])

    return {data , loading , error}
}

export default useFetch