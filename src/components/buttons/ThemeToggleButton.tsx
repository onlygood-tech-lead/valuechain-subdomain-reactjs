import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../hooks/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-4 h-4" />
      ) : (
        <FiSun className="w-4 h-4" />
      )}
    </button>
  );
}
