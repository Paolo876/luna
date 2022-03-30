import { createSlice } from "@reduxjs/toolkit";
import generateUID from "../utils/generate-uid.js"

let initTodoItems = JSON.parse(localStorage.getItem('todos'));
if(initTodoItems === null) {
    initTodoItems = [{text: "Eat healthy", id: "01", isFinished: false},{text: "Exercise regularly", id: "02", isFinished: false},{text: "Learn something new", id: "03", isFinished: false}];
    localStorage.setItem('todos', JSON.stringify(initTodoItems));
} 

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoItems: initTodoItems
    },
    reducers: {
        addTodo(state, action) {
            const newTodo = {text: action.payload, id: generateUID(), isFinished: false};
            state.todoItems.push(newTodo);

            let storageTodos = JSON.parse(localStorage.getItem('todos'));
            storageTodos = [...storageTodos, newTodo];
            localStorage.setItem('todos', JSON.stringify(storageTodos));
        },
        editTodo(state, action) {
            const item = state.todoItems.find(item => item.id === action.payload.id);
            item.text = action.payload.text;

            let storageTodos = JSON.parse(localStorage.getItem('todos'));
            const storageItem = storageTodos.find(item => item.id === action.payload.id);
            storageItem.text = action.payload.text;
            localStorage.setItem('todos', JSON.stringify(storageTodos));
        },
        deleteTodo(state, action) {
            state.todoItems = state.todoItems.filter(item => item.id !== action.payload);

            let storageTodos = JSON.parse(localStorage.getItem('todos'));
            storageTodos = storageTodos.filter(item => item.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(storageTodos));
        },
        clearTodo(state) {
            state.todoItems = [];
            localStorage.setItem('todos', '[]');
        },
        finishTodo(state, action){
            const item = state.todoItems.find(item => item.id === action.payload);
            item.isFinished = !item.isFinished;

            let storageTodos = JSON.parse(localStorage.getItem('todos'));
            const storageItem = storageTodos.find(item => item.id === action.payload);
            storageItem.isFinished = !storageItem.isFinished;
            localStorage.setItem('todos', JSON.stringify(storageTodos));
        }
    }
})

export const todoActions = todoSlice.actions;
export default todoSlice;