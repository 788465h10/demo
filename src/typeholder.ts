export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    isDeleted: boolean;
  }

export interface TodosStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
  fetchTodos: () => void;
}
