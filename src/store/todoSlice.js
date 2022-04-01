import { createSlice } from "@reduxjs/toolkit";
import generateUID from "../utils/generate-uid.js"

let initTodoItems = JSON.parse(localStorage.getItem('todos'));
if(!initTodoItems) {
    initTodoItems = [{text: "Eat", id: "01", isFinished: false},{text: "Exercise", id: "02", isFinished: false},{text: "Learn something new", id: "03", isFinished: false}];
    localStorage.setItem('todos', JSON.stringify(initTodoItems));
} 

const todoSlice = createSlice({
    name: 'todo',
    initialState: { items: initTodoItems },
    reducers: {
        addTodo(state, action) {
            const newTodo = {text: action.payload, id: generateUID(), isFinished: false};
            state.items.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        editTodo(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            item.text = action.payload.text;
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        deleteTodo(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        clearTodo(state) {
            state.items = [];
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        finishTodo(state, action){
            const item = state.items.find(item => item.id === action.payload);
            item.isFinished = !item.isFinished;
            localStorage.setItem('todos', JSON.stringify(state.items));
        }
    }
})

export const todoActions = todoSlice.actions;
export default todoSlice;