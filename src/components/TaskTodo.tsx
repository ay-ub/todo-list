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
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
export default function TaskTodo({
  todo,
  handleDeleteToDo,
  handleUpdateToDo,
}: {
  todo: any;
  handleDeleteToDo: any;
  handleUpdateToDo: any;
}) {
  return (
    <div className='flex items-center justify-between w-full p-3 rounded-md'>
      <div className=' flex items-center'>
        <Checkbox
          id={todo.value}
          checked={todo.isCompleted}
          onCheckedChange={() => handleUpdateToDo(todo.value)}
        />
        <label
          htmlFor={todo.value}
          className='text-xl flex-1 px-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {todo.value}
        </label>
      </div>
      <div className='flex items-center gap-3'>
        <AlertDialog>
          <AlertDialogTrigger>
            <Trash2 size={24} className='cursor-pointer' />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Todo: {todo.value}</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this todo? cannot be undone.
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
  );
}
