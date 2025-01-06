
import PropTypes from "prop-types";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 border-2  my-4 p-2">
            <h2>Bookmarks: {bookmarks.length}</h2>
            
        </div>
    );
};
Bookmarks.propTypes = {
       bookmarks: PropTypes.array 
   }
export default Bookmarks;