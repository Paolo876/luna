import { useSelector } from "react-redux";

import { useState } from "react";
import Modal from "../UI/Modal";
import BookmarksContent from "./BookmarksContent"

import BookmarksIcon from '@mui/icons-material/Bookmarks';
import classes from "./Bookmarks.module.css";

const Bookmarks = () => {
    const [showList, setShowList] = useState(false)
    const addedStyles = useSelector(state => state.settings.components).find(item => item.name === "bookmarks").addedStyles;
    const containerColor = useSelector(state => state.settings.ui.containerColor);
    const styles = {...addedStyles};
    styles.background = containerColor;
    return (  
        <>  
            {
                showList 
                ?
                <Modal  hideModalHandler={()=> setShowList(false)} 
                        className={classes.modals}
                        style={styles}
                        >     
                            <BookmarksContent/> 
                </Modal>
                :
                <button className={classes.bookmarksBtn} onClick={() => setShowList(true)}><BookmarksIcon/></button>
            }

        </>

    );
}
 
export default Bookmarks;
/*
https://url-metadata.herokuapp.com/ 


*/
