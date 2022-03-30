import { useSelector, useDispatch } from "react-redux";
import classes from "./BookmarksList.module.css";
import ClearIcon from '@mui/icons-material/Clear';
import { bookmarksActions } from "../../../../store/bookmarksSlice";
const BookmarkList = () => {
    const dispatch = useDispatch();
    const bookmarks = useSelector(state => state.bookmarks.bookmarksList);
    const currentPrimaryColor = useSelector(state => state.settings.ui.primaryColor);

    const clickHandler = (id) => {
      dispatch(bookmarksActions.deleteBookmark(id))
    }
    return (  
        <ul className={classes.listContainer}>
            {bookmarks.map(item => (<li key={item.id}>
                <img src={item.favicon} alt=""/>
                <div>
                    <p>{item.title}</p>
                    <p className={classes.url}>{item.url}</p>
                </div>
                <a className={classes.clearBtn} style={{color: currentPrimaryColor}} onClick={() => clickHandler(item.id)}>
                    <ClearIcon/>
                </a>
            </li>))}
        </ul>
    );
}
 
export default BookmarkList;