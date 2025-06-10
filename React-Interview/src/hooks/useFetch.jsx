// We can use All react features to build custom hook.
// Thats why it is better that the function

import { useState } from "react";


const useFetch = (cb) => {
    const [data, setData] = useState(undefined); // for data
    const [loading, setLoading] = useState(null); // for loading
    const [error, setError] = useState(null); // for error

    const fn = async (...args) => {
        setLoading(true);
        setError(null);

        try {
            const response = await cb(...args);
            setData(response);
            setError(null);
        } catch (error) {
            setError(null);
            window.alert(error.message);
        } finally {
            setLoading(false);
        } 
    };  

    return{data, loading, error, fn}
};

export default useFetch;