

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import { useState } from 'react'
import Bookmarks from './components/Header/Bookmarks/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  // Set sate to hold book reading time
  const [bookReadingTime, setBookReadingTime] = useState(0);

  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  } 

  //function to calculate total book reading time
  const handleTotalBookReadingTime = (id, time) => {
    // setBookReadingTime(bookReadingTime + time);
    const bookReadingTimeNumber = parseInt(time);
    setBookReadingTime(bookReadingTime + bookReadingTimeNumber)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-screen-xl mx-auto gap-1'>
      <Blogs handleAddBookmark = {handleAddBookmark} handleTotalBookReadingTime = {handleTotalBookReadingTime} ></Blogs>
      <Bookmarks bookmarks = {bookmarks} bookReadingTime = {bookReadingTime} ></Bookmarks>
      </div>
     
    </>
  )
}

export default App
