import { Search } from "lucide-react";
import { useState } from "react";
function SearchBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex rounded-full p-2 items-center bg-gray-100 dark:bg-slate-800'>
      <input
        placeholder='Search Todos'
        className={`${
          open ? "w-40 max-w-md px-2" : "w-0"
        } duration-300 text-base border-none outline-none focus-visible:ring-0 focus-visible:outline-none shadow-none bg-transparent`}
      />

      <Search
        size={20}
        className='cursor-pointer'
        onClick={() => {
          setOpen(!open);
        }}
      />
    </div>
  );
}

export default SearchBar;
