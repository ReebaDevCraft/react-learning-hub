import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyAxios = () => {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts';
  const [myData, setData] = useState([]);
  const [statusMessage, setStatusMessage] = useState(''); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setData(response.data.slice(0, 10)); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`${baseURL}/${postId}`);

      
      if (response.status === 200 || response.status === 204) {
        setData(myData.filter(post => post.id !== postId)); 
        setStatusMessage(`Post with ID ${postId} deleted successfully.`);
        console.log(`Post with ID ${postId} deleted, Status: ${response.status}`);
      } else {
        setStatusMessage(`Failed to delete post with ID ${postId}. Status: ${response.status}`);
        console.error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      setStatusMessage(`Error deleting post with ID ${postId}: ${error.message}`);
      console.error('Error deleting post:', error.message);
    }

    
    setTimeout(() => setStatusMessage(''), 3000);
  };

  return (
    <div>
      {statusMessage && <p style={{ color: 'green' }}>{statusMessage}</p>}
      {myData.map((item) => {
        const { id, title, body } = item;
        return (
          <div key={id}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
            <button 
              onClick={() => deletePost(id)} 
              style={{ color: 'white', backgroundColor: 'red' }}
            >
              Delete Post
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MyAxios;
