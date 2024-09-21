import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className='app container p-3  min-h-screen  w-screen bg-slate-900 flex items-center justify-start flex-col gap-6'>
      <h1 className='text-4xl font-bold text-center text-white'>Todo List</h1>
      <div className='input-box flex items-center max-w-screen-md'>
        <input
          type='text'
          className='w-full p-2 text-lg bg-slate-800 text-white'
          placeholder='Add a new task'
        />
        <Button>Add</Button>
      </div>
    </div>
  );
}

export default App;
