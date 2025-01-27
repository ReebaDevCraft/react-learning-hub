import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
    const [login, setlogin]= useState('');
    const [password, setpassword]= useState('');
const handleSubmit= async(e)=>{
e.preventDefault();
try{
    const responce = await axios.post('https://jsonplaceholder.typicode.com/posts',{
        title:login,
        body:password
    });
    console.log(responce.data);
}catch(error){
console.error('Error on posting data',error);
}
};
  return (
    <>
    <form  onSubmit={handleSubmit}>
      <div><h1>Login Form</h1></div>
        <label htmlFor="Email" name='login' onChange={(e) =>setlogin(e.target.value)}>Enter Email</label>
        <input type="text" />
        <br /><br />
        <label htmlFor="password">Enter Password</label>
        <input type="text" />
        <br /><br />
        <button type="submit" name='password' onChange={(e)=>setpassword(e.target.value)}> Post</button>
    </form>
    </>
  );
};

export default Form;