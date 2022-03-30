import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import TodoItem from "./TodoItem";
import Button from "../UI/Button";

import classes from "./TodoList.module.css"
const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todoItems);
    const showClearBtn = todos.length > 1;
    return (  
        <>
            <ul className={classes.list}>
                {todos.map(item => <TodoItem    text={item.text} 
                                                id={item.id} 
                                                key={item.id}
                                                isFinished={item.isFinished}
                                                />)}            
            </ul>
            {showClearBtn && <Button onClick={() => dispatch(todoActions.clearTodo())} className={classes.clearBtn}>CLEAR ALL</Button>}
        </>

    );
}
 
export default TodoList;