import axios from "axios";
import { useState , useEffect} from "react"
import { toast } from "react-toastify";

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
            .catch(err => {
                setErrorcategory("لطفا دوباره تلاش کنید");
                toast.error('خطایی رخ داده است')
            })
            .finally(res =>{
                setTimeout(() => {
                    setLoadingcategory(false)
                }, 2000);
            }
            )
    }, [])

    return {category , loadingcategory , errorcategory}
}

export default useCategory