import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark}) => {
    const [blogs, setBlogs ,  ] = useState([]);

    useEffect ( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div className="md:w-2/3 border-2 my-4 p-2">
            <h1>Blogs: {blogs.length}</h1> 
            {
                blogs.map(blog => <Blog 
                    key = {blog.id} 

                    blog = {blog}
                    handleAddBookmark = {handleAddBookmark}
                    >
                     
                    </Blog>)
            }
            
        </div>
    );
};
Blogs.propTypes = {
       handleAddBookmark: PropTypes.func
   }
   


export default Blogs;