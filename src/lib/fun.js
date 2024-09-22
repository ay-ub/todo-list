import { toast } from "sonner";
const handleCreateTodo = (input, setTodos, setInput, todos) => {
  if (input.value) {
    setTodos([input, ...todos]);
    setInput({ value: "", isCompleted: false });
    toast.success("Todo Added Successfully");
  } else {
    toast.error("Please enter a valid todo");
  }
};

const handleUpdateToDo = (value, setTodos, todos) => {
  let newTodo = [];
  newTodo = todos.map((todo) => {
    if (todo.value === value) {
      return { ...todo, isCompleted: !todo.isCompleted };
    }
    return todo;
  });
  setTodos(newTodo);
  toast.success(`Todo Updated Successfully`);
};
const handleDeleteToDo = (value, setTodos, todos) => {
  let newTodo = [];
  newTodo = todos.filter((todo) => todo.value !== value);
  setTodos(newTodo);
  toast.success("Todo Deleted Successfully");
};

export { handleCreateTodo, handleUpdateToDo, handleDeleteToDo };
