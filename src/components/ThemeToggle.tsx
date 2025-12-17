import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeStore, applyThemeToHtml } from "../store/useThemeStore";

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggle);

  useEffect(() => {
    applyThemeToHtml(theme);
  }, [theme]);

  return (
    <button
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card hover:bg-secondary/40 transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
