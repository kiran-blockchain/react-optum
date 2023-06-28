import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (requestObj) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // if (requestObj.method = 'POST') {
                //     const postResult = await axios.post(requestObj.url,requestObj.data);
                //     setData(postResult.data);
                   
                // }
                // else {
                    const result = await axios(requestObj.url);
                    setData(result.data);
                //}
                setLoading(false);
            }
            catch(ex){
                setError("Error in fetching data");
                setLoading(false);
            }

        };
        fetchData();
    }, [requestObj.url])

    return [data, loading, error];
}