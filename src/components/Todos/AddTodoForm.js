import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import Input from "../UI/Input";
import validateInput from "../../utils/validate-input";
import classes from "./AddTodoForm.module.css";

const AddTodoForm = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch();

    const submitFormHandler = (e) => {
      e.preventDefault();

      if(validateInput(inputValue)){
        dispatch(todoActions.addTodo(inputValue))
      }
      setInputValue("")
      return;
    }

    return (  
        <form onSubmit={submitFormHandler} className={classes.form}>
            <Input  type="text" 
                    placeholder="Add Todo" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    onBlur={() => setInputValue("")}
                    maxLength={25}
                    />
        </form>
    );
}
 
export default AddTodoForm;