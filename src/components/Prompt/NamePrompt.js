import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

import Input from "../UI/Input";
import capitalizeFirstLetter from "../../utils/capitalize-first-letter";
import validateInput from "../../utils/validate-input";

import classes from "./NamePrompt.module.css";

const NamePrompt = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const submitHandler = (e) => {
      e.preventDefault();
      if(validateInput(inputRef.current.value, "text")){
        dispatch(userActions.setUserName(capitalizeFirstLetter(inputRef.current.value)));
      } else {
        inputRef.current.value = "";
      }
      return;
    }
    
    return (  
        <div className={classes.container}>
            <h3>Hello there, what is your name?</h3>
            <form onSubmit={submitHandler}>
                <Input type="text" className={classes.input} ref={inputRef} maxLength={15} placeholder="John" autoFocus onBlur={() => inputRef.current.focus()}/>
            </form>
            {/* <button className={classes.signInBtn}>Already a user? Sign in</button> */}
        </div>
    );
}

 

export default NamePrompt;