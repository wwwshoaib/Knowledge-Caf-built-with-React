
import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({blog, handleAddBookmark}) => {
    const {title,  Cover_image_link, author_image, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20  p-2'>
            <img className='w-full ' src= {Cover_image_link}  alt="" />
            {/* author image and reading time */}
            <div className='flex justify-between mt-4'>
                {/* author */}
                <div className='flex gap-2'> 
                    {/* author image */}
                    <div>
                        <img className='w-12 h-12 rounded-full' src= {author_image} alt="" />

                    </div>
                    {/* author name */}
                    <div>
                        <h2 className='font-bold text-2xl'>{author}</h2>
                        <p>{posted_date}</p>

                    </div>

                </div>
                {/* reading time */}
                <div className="flex items-center gap-1">
                   <span> Reading time: {reading_time} min</span>
                    <button onClick={() => handleAddBookmark(blog)} ><CiBookmark /></button>

                </div>

            </div>
            <h2 className="text-3xl font-semibold"><a href="http://">{title}</a></h2>
            {/* hashtags */}
            <p> 
                {
                    hashtags.map ( (hash, idx) => <span key = {idx} className='mx-1 text-purple-600'><a href=''>{ hash }</a></span>)

                }

            </p>
          
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}
export default Blog;