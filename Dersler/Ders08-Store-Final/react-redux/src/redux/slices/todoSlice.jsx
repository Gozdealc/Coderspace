import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [
        { id: 1, title: 'todo 1', completed: false },
        { id: 2, title: 'todo 2', completed: false },
        { id: 3, title: 'todo 3', completed: false },
    ],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => { 
        state.todos = [...state.todos, action.payload];
        },
        deleteToDo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
}
});

export const { addToDo, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;