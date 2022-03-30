import SubsettingsListContainer from "../SubsettingsListContainer";
import AddBookmarkForm from "./AddBookmarkForm";
import BookmarksList from "./BookmarksList"
import classes from "./Bookmarks.module.css"
const ManageLinks = () => {
    return (  
        <SubsettingsListContainer className={classes.container}> 
            <h3>Manage Bookmarks</h3>
            <BookmarksList/>
            <AddBookmarkForm/>
        </SubsettingsListContainer>
    );
}
 
export default ManageLinks;