import { useSelector } from "react-redux";
import BookmarkItem from "./BookmarkItem";
import classes from "./BookmarksContent.module.css";

const BookmarksContent = () => {
    const bookmarks = useSelector(state => state.bookmarks.bookmarksList);
    return (  
        <ul className={classes.listContainer}>
            {bookmarks.map(item => (
                <BookmarkItem key={item.id} favicon={item.favicon} title={item.title} url={item.url}/>
            ))}
        </ul>
    );
}
 
export default BookmarksContent;
