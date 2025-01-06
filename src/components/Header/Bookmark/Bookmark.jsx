

import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
  
    return (
        
        
        <div className=" space-y-2 my-2">
           
            <h2 className="p-4 bg-white text-xl font-semibold rounded-lg">{title}</h2>
        
        </div>
    );
};
Bookmark.propTypes = {
       bookmarks: PropTypes.array, 
       bookmark: PropTypes.object
   } 
  
export default Bookmark;