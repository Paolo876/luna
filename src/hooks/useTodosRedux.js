import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";
export const useTodosRedux = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  return {
    todos,
    clearTodo: () => dispatch(todoActions.clearTodo()),
    deleteTodo: id => dispatch(todoActions.deleteTodo(id)),
    editTodo: text => dispatch(todoActions.editTodo(text)),
    finishTodo: id => dispatch(todoActions.finishTodo(id)),

  }
}