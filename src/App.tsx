import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchBar from "./components/SearchBar";
import {
  handleCreateTodo,
  handleUpdateToDo,
  handleDeleteToDo,
} from "@/lib/fun";
import TaskTodo from "@/components/TaskTodo";
import { ModeToggle } from "./components/mode-toggle";
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

  const [serch, setSearch] = useState<string>("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // add event listener for keydown event to handle enter key press to add todo item to list of todos
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleCreateTodo(input, setTodos, setInput, todos);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, todos]);
  return (
    <div className='app select-none container px-3  min-h-screen  w-screen flex items-center justify-start flex-col gap-6'>
      <div
        className='w-full md:w-1/2 flex flex-col gap-6 items-center justify-start  min-h-screen py-6
      '
      >
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-2xl text-nowrap '>Todo App</h1>

          <div className='flex items-center gap-2'>
            <SearchBar serch={serch} setSearch={setSearch} />
            <ModeToggle />
          </div>
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
          <Button
            className='p-2 '
            onClick={() => {
              handleCreateTodo(input, setTodos, setInput, todos);
            }}
          >
            Add Todo
          </Button>
        </div>
        {serch.length > 0 ? (
          <div className='w-full'>
            {todos.filter((todo) => {
              return todo.value.toLowerCase().includes(serch.toLowerCase());
            }).length > 0 ? (
              todos
                .filter((todo) => {
                  return todo.value.toLowerCase().includes(serch.toLowerCase());
                })
                .map((todo, index) => (
                  <TaskTodo
                    key={index}
                    todo={todo}
                    handleDeleteToDo={() => {
                      handleDeleteToDo(todo.value, setTodos, todos);
                    }}
                    handleUpdateToDo={() => {
                      handleUpdateToDo(todo.value, setTodos, todos);
                    }}
                  />
                ))
            ) : (
              <p className='text-base text-center'>
                No Todos Found. Please add some todos to see them here.
              </p>
            )}
          </div>
        ) : (
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
                      <TaskTodo
                        key={index}
                        todo={todo}
                        handleDeleteToDo={() => {
                          handleDeleteToDo(todo.value, setTodos, todos);
                        }}
                        handleUpdateToDo={() => {
                          handleUpdateToDo(todo.value, setTodos, todos);
                        }}
                      />
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
                      <TaskTodo
                        key={index}
                        todo={todo}
                        handleDeleteToDo={() => {
                          handleDeleteToDo(todo.value, setTodos, todos);
                        }}
                        handleUpdateToDo={() => {
                          handleUpdateToDo(todo.value, setTodos, todos);
                        }}
                      />
                    ))
                ) : (
                  <p className='text-base text-center'>
                    No Todos Found. Please add some todos to see them here.
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </div>
  );
}

export default App;
