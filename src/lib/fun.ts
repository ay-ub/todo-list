import { toast } from "sonner";
const handleCreateTodo = (
  input: any,
  setTodos: any,
  setInput: any,
  todos: any
) => {
  if (input.value) {
    setTodos([input, ...todos]);
    setInput({ value: "", isCompleted: false });
    toast.success("Todo Added Successfully");
  } else {
    toast.error("Please enter a valid todo");
  }
};

const handleUpdateToDo = (value: any, setTodos: any, todos: any) => {
  let newTodo = [];
  newTodo = todos.map((todo: any) => {
    if (todo.value === value) {
      return { ...todo, isCompleted: !todo.isCompleted };
    }
    console.log(todo);
    return todo;
  });
  setTodos(newTodo);
  toast.success(`Todo Updated Successfully`);
};
const handleDeleteToDo = (value: any, setTodos: any, todos: any) => {
  let newTodo = [];
  newTodo = todos.filter((todo: any) => todo.value !== value);
  setTodos(newTodo);
  toast.success("Todo Deleted Successfully");
};

export { handleCreateTodo, handleUpdateToDo, handleDeleteToDo };
