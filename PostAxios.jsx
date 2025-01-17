import Axios from 'axios';
import React, { useState } from 'react';

const PostAxios = () => {
    const [mytitle, setTitle] = useState('');
    const [my_body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await Axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: mytitle,
                body: my_body
            });
            console.log(response); 
        } catch (error) {
            console.log(error); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Enter Title:</label>
            <input
                type="text"
                name='title'
                value={mytitle}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor='body'>Enter Body:</label>
            <input
                type="text"
                name='body'
                value={my_body}
                onChange={(e) => setBody(e.target.value)}
            />
            <br />
            <br />
            <input type="submit" value='Post' />
        </form>
    );
};

export default PostAxios;
