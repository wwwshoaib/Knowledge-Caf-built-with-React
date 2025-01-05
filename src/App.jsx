

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import { useState } from 'react'
import { useEffect } from 'react';

function App() {

  const [blogs, setBlogs] = useState([]);
  useEffect ( () => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => console.log(data))
  } ,[])

  

  return (
    <>
      <Header></Header>
      <Blogs></Blogs>
    
     
    </>
  )
}

export default App
