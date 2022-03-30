import { useSelector } from "react-redux";

import { useState } from 'react';
import { useDispatch } from "react-redux";
import { todoActions } from '../../store/todoSlice';

import Input from '../UI/Input';

import classes from "./TodoItem.module.css"

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import validateInput from '../../utils/validate-input';


const TodoItem = (props) => {
    // const addedStyles = useSelector(state => state.settings.components).find(item => item.name === "todos").addedStyles;
    const currentPrimaryColor = useSelector(state => state.settings.ui.primaryColor)
    const dispatch = useDispatch();
    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState(props.text)
    const isFinished = props.isFinished;

    const inputRefCallback = (input) => {
        
        if(input){
            input.focus();
        }
    }

    const submitHandler = (e) => {
      e.preventDefault();
      if(validateInput(text)){
        dispatch(todoActions.editTodo({text, id:props.id}))
      }
      setIsEditable(false)
      return;
    }
    return (  
        <li className={classes.listItem}>
            {isEditable
            ?
            <form onSubmit={submitHandler}>
                <Input  type="text"  
                        defaultValue={props.text} 
                        ref={inputRefCallback} 
                        onBlur={() => setIsEditable(false)} 
                        onChange={ e => setText(e.target.value) } 
                        maxLength={25}
                        className={classes.editTodoInput}
                        
                        />
            </form>    
            :
            <button className={`${classes.text} ${isFinished && classes.finishTodo}`} onClick={() => dispatch(todoActions.finishTodo(props.id))}>{props.text}</button>
            }
                     
            <div>
                <button onClick={() => setIsEditable(true)} disabled={isFinished} className={`${classes.editBtn} ${isFinished && classes.buttonDisabled}`}>
                    <EditIcon style={{color: currentPrimaryColor}}/>
                </button>
                <button onClick={() => dispatch(todoActions.deleteTodo(props.id))} className={classes.deleteBtn}>
                    <ClearIcon  style={{color: currentPrimaryColor}}/>
                </button>
            </div>
        </li>
    );
}
 
export default TodoItem;