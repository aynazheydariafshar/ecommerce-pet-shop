import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setdata] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3002/${url}`)
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        setError("لطفا دوباره تلاش کنید");
        toast.error("خطایی رخ داده است");
      })
      .finally((res) => {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
