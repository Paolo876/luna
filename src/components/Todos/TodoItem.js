import { useState } from 'react';
import { useTodosRedux } from "../../hooks/useTodosRedux";
import { useSettingsRedux } from "../../hooks/useSettingsRedux";
import Input from '../UI/Input';
import classes from "./TodoItem.module.css"
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import validateInput from '../../utils/validate-input';


const TodoItem = (props) => {
    const [ isEditable, setIsEditable ] = useState(false);
    const [ text, setText ] = useState(props.text);
    const { deleteTodo, editTodo, finishTodo } = useTodosRedux();
    const { ui } = useSettingsRedux();
    const { currentPrimaryColor } = ui;


    const inputRefCallback = (input) => {
        if(input){
            input.focus();
        }
    }

    const submitHandler = (e) => {
      e.preventDefault();
      if(validateInput(text)){
        editTodo({text, id:props.id})
      }
      setIsEditable(false)
      return;
    }
    return (  
        <li className={classes.listItem}>
            {isEditable
            ?
            <form onSubmit={submitHandler}>
                <Input  
                    type="text"  
                    defaultValue={props.text} 
                    ref={inputRefCallback} 
                    onBlur={() => setIsEditable(false)} 
                    onChange={ e => setText(e.target.value) } 
                    maxLength={25}
                    className={classes.editTodoInput}
                />
            </form>    
            :
            <button 
                className={`${classes.text} ${props.isFinished && classes.finishTodo}`} 
                onClick={() => finishTodo(props.id)}
            >
                {props.text}
            </button>
            }
                     
            <div>
                <button 
                    onClick={() => setIsEditable(true)} 
                    disabled={props.isFinished} 
                    className={`${classes.editBtn} ${props.isFinished && classes.buttonDisabled}`}
                >
                    <EditIcon style={{color: currentPrimaryColor}}/>
                </button>
                <button onClick={() => deleteTodo(props.id)} className={classes.deleteBtn}>
                    <ClearIcon  style={{color: currentPrimaryColor}}/>
                </button>
            </div>
        </li>
    );
}
 
export default TodoItem;