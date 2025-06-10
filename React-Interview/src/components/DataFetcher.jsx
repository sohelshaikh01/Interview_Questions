import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const DataFetcher = () => {
    // const [data, setData] = useState();

    const fetchPosts = () => (
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
    );

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then((res) => res.json())
        // .then((data) => setData(data));
        fn();
    }, []);

    const {data, loading, error, fn} = useFetch(fetchPosts);

    if(error) return <p>Something went wrong</p>

  return (
    <div>
        <h1 className='text-xl font-bold' >Posts</h1>
       {loading ? "Loading..." : (
            <ul>
                {data?.map((post) => (
                    <li className='py-1 px-2 bg-neutral-700 border' key={post.id}>{post.title}</li>
                ))}
            </ul>
       )}
    </div>
  )
}

export default DataFetcher;
