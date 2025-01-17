import React from 'react'
import useFetch from './useFetch'
const Fetching = () => {
    const[data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    if (loading) return <p>loading</p>
    if (error) return <p>Error:[error.message]</p>
  return (
    <>
    <h1>Comments</h1>
    <div>
    {data.map((comment) => (
        <p key={comment.id}>
            <strong>ID {comment.id}:</strong> {comment.body}
        </p>
    ))}
</div>
    </>
  );
}

export default Fetching;