import axios from "axios";
import { useState , useEffect} from "react"

const useCategory = () => {
    const [loadingcategory , setLoadingcategory] = useState(true);
    const [errorcategory , setErrorcategory] = useState(null);
    const [category , setcategory] = useState([]);

    useEffect(() => {
            setLoadingcategory(true);
            axios.get(`http://localhost:3002/category`)
            .then(response => {
                setcategory(response.data)
            })
            .catch(err => setErrorcategory("لطفا دوباره تلاش کنید"))
            .finally(res =>setLoadingcategory(false))
    }, [])

    return {category , loadingcategory , errorcategory}
}

export default useCategory