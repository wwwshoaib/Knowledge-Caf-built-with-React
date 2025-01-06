

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import { useState } from 'react'
import Bookmarks from './components/Header/Bookmarks/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-screen-xl mx-auto gap-1'>
      <Blogs handleAddBookmark = {handleAddBookmark}></Blogs>
      <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
   
    
     
    </>
  )
}

export default App
