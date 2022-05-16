import { useState , useEffect} from "react"

const useFetch = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
       (async() => {
           try {
               setLoading(true);
               const response = await fetch();
               const resault = await response.json();
               setData(resault);
           } catch (error) {
               setError(error);
           } finally{
                setLoading(false);
           }
       })
    }, [])

}

export default useFetch