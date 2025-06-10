import { useState, useEffect } from "react";

const UseEffect2 = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((data) => setData(data));
	}, []);

	// We are just fetching data once, so there is not dependency.
	// After data is fetch it is show using map().

  return (
	<div>
		<h1 className="text-2xl font-bold">Posts</h1>
		{data.map((post) => (
			<li key={post.id}> {post.title} </li>
		))}
	</div>
  )
}

export default UseEffect2;

