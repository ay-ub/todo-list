import { Search } from "lucide-react";
import { useRef, useState } from "react";
function SearchBar({
  serch,
  setSearch,
}: {
  serch: string;
  setSearch: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className='flex rounded-full p-2 items-center bg-gray-100 dark:bg-slate-800'>
      <input
        ref={inputRef}
        placeholder='Search Todos'
        value={serch}
        onChange={(e) => setSearch(e.target.value)}
        className={`${
          open ? "w-40 max-w-md px-2" : "w-0"
        } duration-300 text-base border-none outline-none focus-visible:ring-0 focus-visible:outline-none shadow-none bg-transparent`}
      />

      <Search
        size={20}
        className='cursor-pointer'
        onClick={() => {
          setOpen(!open);
          if (!open) {
            inputRef.current?.focus();
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
