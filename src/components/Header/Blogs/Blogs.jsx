import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setblogs] = useState([]);

    useEffect ( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    } ,[])
    return (
        <div className="md:w-2/3 border-2 my-4 p-2">
            <h1>Blogs: {blogs.length}</h1>
            
        </div>
    );
};

export default Blogs;