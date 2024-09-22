import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function App() {
  const [todos, setTodos] = useState<
    {
      value: string;
      isCompleted: boolean;
    }[]
  >(JSON.parse(localStorage.getItem("todos") || "[]"));
  const [input, setInput] = useState<{
    value: string;
    isCompleted: boolean;
  }>({
    value: "",
    isCompleted: false,
  });
  const handleCreateTodo = () => {
    if (input.value) {
      setTodos([input, ...todos]);
      setInput({ value: "", isCompleted: false });
      toast.success("Todo Added Successfully");
    } else {
      toast.error("Please enter a valid todo");
    }
  };

  const handleUpdateToDo = (value: string) => {
    let newTodo: {
      value: string;
      isCompleted: boolean;
    }[] = [];
    newTodo = todos.map((todo) => {
      if (todo.value === value) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodo);
    toast.success(`Todo Updated Successfully`);
  };
  const handleDeleteToDo = (value: string) => {
    let newTodo: {
      value: string;
      isCompleted: boolean;
    }[] = [];
    newTodo = todos.filter((todo) => todo.value !== value);
    setTodos(newTodo);
    toast.success("Todo Deleted Successfully");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className='app select-none container px-3  min-h-screen  w-screen flex items-center justify-start flex-col gap-6'>
      <div
        className='w-full md:w-1/2 flex flex-col gap-6 items-center justify-start  min-h-screen p-6 
      '
      >
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-2xl flex-1 w-full'>Todo App</h1>
          <Input
            placeholder='Search Todos'
            className='max-w-md px-4 py-2 text-base flex-1'
          />
        </div>
        <div className='input-box flex items-center gap-3 w-full justify-center '>
          <Input
            placeholder='Write your todo here ...'
            className='px-4 py-2 text-base w-full'
            value={input.value}
            onChange={(e) =>
              setInput({ value: e.target.value, isCompleted: false })
            }
          />
          <Button className='p-2 ' onClick={handleCreateTodo}>
            Add Todo
          </Button>
        </div>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          defaultValue='item-1'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger>Incomplete tasks</AccordionTrigger>
            <AccordionContent>
              {todos.filter((todo) => {
                return !todo.isCompleted;
              }).length > 0 ? (
                todos
                  .filter((todo) => {
                    return !todo.isCompleted;
                  })
                  .map((todo, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between w-full p-3 rounded-md'
                    >
                      <Checkbox
                        checked={todo.isCompleted}
                        onCheckedChange={() => handleUpdateToDo(todo.value)}
                      />
                      <p className='text-xl flex-1 px-3'>{todo.value}</p>
                      <div className='flex items-center gap-3'>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Trash2 size={24} className='cursor-pointer' />
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Todo: {todo.value}
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this todo?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => {
                                  handleDeleteToDo(todo.value);
                                }}
                              >
                                Delete Todo
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  ))
              ) : (
                <p className='text-base text-center'>
                  No Todos Found. Please add some todos to see them here.
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Completed tasks</AccordionTrigger>
            <AccordionContent>
              {todos.filter((todo) => {
                return todo.isCompleted;
              }).length > 0 ? (
                todos
                  .filter((todo) => {
                    return todo.isCompleted;
                  })
                  .map((todo, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between w-full p-3 rounded-md'
                    >
                      <Checkbox
                        checked={todo.isCompleted}
                        onCheckedChange={() => handleUpdateToDo(todo.value)}
                      />
                      <p className='text-xl flex-1 px-3'>{todo.value}</p>
                      <div className='flex items-center gap-3'>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Trash2 size={24} className='cursor-pointer' />
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Todo: {todo.value}
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this todo?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => {
                                  handleDeleteToDo(todo.value);
                                }}
                              >
                                Delete Todo
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  ))
              ) : (
                <p className='text-base text-center'>
                  No Todos Found. Please add some todos to see them here.
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
