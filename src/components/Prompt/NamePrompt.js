import { useRef } from "react";
import { useUserRedux } from "../../hooks/useUserRedux";
import Input from "../UI/Input";
import validateInput from "../../utils/validate-input";

import classes from "./NamePrompt.module.css";

const NamePrompt = () => {
    const { setUserName } = useUserRedux();
    const inputRef = useRef();

    const submitHandler = (e) => {
      e.preventDefault();

      if(validateInput(inputRef.current.value, "text")){
        setUserName(inputRef.current.value);
      } else {
        inputRef.current.value = "";
      }
    }
    
    return (  
        <div className={classes.container}>
            <h3>Hello there, what is your name?</h3>
            <form onSubmit={submitHandler}>
                <Input 
                  type="text" 
                  className={classes.input} 
                  ref={inputRef} 
                  maxLength={15} 
                  placeholder="John" 
                  autoFocus 
                  onBlur={() => inputRef.current.focus()}
                />
            </form>
            {/* <button className={classes.signInBtn}>Already a user? Sign in</button> */}
        </div>
    );
}

export default NamePrompt;