import { useTodosRedux } from "../../hooks/useTodosRedux";
import TodoItem from "./TodoItem";
import Button from "../UI/Button";

import classes from "./TodoList.module.css"
const TodoList = () => {
    const { todos, clearTodo } = useTodosRedux();
    
    return (  
        <>
            <ul className={classes.list}>
                {todos && todos.map(item => <TodoItem    text={item.text} 
                                                id={item.id} 
                                                key={item.id}
                                                isFinished={item.isFinished}
                                                />)}            
            </ul>
            {todos.length > 1 && <Button onClick={clearTodo} className={classes.clearBtn}>CLEAR ALL</Button>}
        </>

    );
}
 
export default TodoList;