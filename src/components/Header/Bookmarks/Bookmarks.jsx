
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, bookReadingTime }) => {
    return (

        <div className="md:w-1/3 border-2  my-4 p-2 ">
            {/* Time recording of total reading time */}
            <div
                style={{
                    boxSizing: "border-box",
                    border: "1px solid rgb(96, 71, 236)",
                    borderRadius: "8px",
                    background: "rgba(96, 71, 236, 0.1)",
                    padding: "16px"
                }}
            >
                <h1 className="text-2xl font-semibold text-violet-700">
                    Spent time on read: <span>{bookReadingTime}</span> min
                </h1>
            </div>
            <div style={{
                boxSizing: "border-box",
                border: "1px solid rgb(96, 71, 236)",
                borderRadius: "8px",
                background: "rgba(17, 17, 17, 0.05)",
                padding: "16px",
                marginTop: "20px"
            }}>
                <h2 className="text-center text-2xl font-semibold p-3 border-1">Bookmarks: {bookmarks.length}</h2>


                {/* bookmarks */}
                {
                    bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    bookReadingTime: PropTypes.number

}
export default Bookmarks;