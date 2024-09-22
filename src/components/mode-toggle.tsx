import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <span
          className='rounded-full p-2 bg-gray-100 dark:bg-slate-800'
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0 cursor-pointer' />
        </span>
      ) : (
        <span
          className='rounded-full p-2 bg-gray-100 dark:bg-slate-800'
          onClick={() => {
            console.log("clicked");
            setTheme("light");
          }}
        >
          <Moon className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100 cursor-pointer' />
        </span>
      )}
    </>
  );
}
