
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 border-2  my-4 p-2 bg-red-50">
            <h2 className="text-center text-2xl font-semibold p-3 border-1">Bookmarks: {bookmarks.length}</h2>
            {/* bookmarks */} 
            {
                bookmarks.map((bookmark) => <Bookmark key ={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
       bookmarks: PropTypes.array 
   }
export default Bookmarks;