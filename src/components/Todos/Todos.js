import { useSettingsRedux } from "../../hooks/useSettingsRedux";
import { useRef } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import ComponentContainer from "../UI/ComponentContainer";

import classes from "./Todos.module.css";

const Todos = () => {
    const ref = useRef();
    const { components, ui } = useSettingsRedux();
    const addedStyles = components.find(item => item.name === "todos").addedStyles;
    const { containerColor } = ui;

    const styles = {...addedStyles};
    styles.background = containerColor;
    return (  
        <ComponentContainer className={classes.todos} style={styles} ref={ref} id="todos">
            <p className={classes.header} >My Todo List</p>
            <AddTodoForm/>
            <TodoList/>
        </ComponentContainer>
    );
}
 
export default Todos;