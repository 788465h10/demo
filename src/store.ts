import { create } from "zustand";
import {TodosStore} from "./typeholder";

export const useTodosStore = create<TodosStore>((set) => ({
    todos: [],
    addTodo: (text: string) => set((state) => ({todos: [...state.todos, {id: state.todos.length + 1, todo: text, completed: false, isDeleted: false}]})), 
    removeTodo: (id: number) => set((state) => ({todos: state.todos.filter((todo) => todo.id !== id)})),
    checkTodo: (id: number) => set((state) => ({todos: state.todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)})),
    fetchTodos: async () => {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        set({ todos: data.todos });
    }
}));