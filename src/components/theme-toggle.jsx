import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:hidden text-gray-700 dark:text-gray-200" />
      <Moon className="h-5 w-5 rotate-0 hidden transition-all duration-200 dark:-rotate-90 dark:flex text-gray-700 dark:text-gray-200" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
