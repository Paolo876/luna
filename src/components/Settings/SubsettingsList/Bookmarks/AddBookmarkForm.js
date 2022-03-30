import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { bookmarksActions } from "../../../../store/bookmarksSlice"
import useHttp from "../../../../hooks/use-http";

import Input from "../../../UI/Input"
import Button from "../../../UI/Button"
import classes from "./AddBookmarkForm.module.css";
import validateInput from "../../../../utils/validate-input";


const AddBookmarkForm = () => {
    const {error, sendRequest: fetchData} = useHttp();
    const [showForm, setShowForm] = useState(false);
    const [invalidInput, setInvalidInput] = useState(false);
    const [fetchError, setFetchError] = useState(false)
    const inputRef = useRef();
    const dispatch = useDispatch();

    const focusHandler = () => {
        setInvalidInput(false);
        setFetchError(false);
        inputRef.current.select();
    }

    const showFormHandler = () => {
        if(setInvalidInput) setInvalidInput(false);
        setShowForm(true)
    }

    const submitHandler = async (e) => {
      e.preventDefault();
        if(error) {
            console.log("ER")
            setFetchError(true);
            return
        }

        if(validateInput(inputRef.current.value, "url")) {
            await fetchData({url: `http://url-metadata.herokuapp.com/api/metadata?url=${inputRef.current.value}`}, (data) => dispatch(bookmarksActions.addBookmarks({data: data.data, url:inputRef.current.value})))
            setShowForm(false)
        } else {
            setInvalidInput(true);
        }
        
        
    }


    return (  
        <>
        {
            showForm ?
                <form onSubmit={submitHandler} className={classes.form}>
                    <label htmlFor="addBookmarkInput"></label>
                    <Input placeholder="http://www.example.com/" id="addBookmarkInput" name="addBookmarkInput" ref={inputRef} className={classes.input} onFocus={focusHandler}/>
                    {invalidInput && <p className={classes.errorMsg}>**invalid input</p>}
                    {fetchError && <p className={classes.errorMsg}>**url not supported.</p>}

                    <div className={classes.btnContainer}>
                        <Button type="button" className={classes.cancelBtn} onClick={() => setShowForm(false)}>Cancel</Button>
                        <Button type="submit" className={classes.submitBtn}>Submit</Button>
                    </div>
                </form>
            :
            <div className={classes.addBtnContainer}>
                <Button onClick={showFormHandler} className={classes.addBtn}>Add Bookmark</Button>
            </div>
            
        }
        </>


    );
}
 
export default AddBookmarkForm;