import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<"theme-light" | "dark">("theme-light");

    // Initialize theme state from document class
    React.useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setThemeState(isDark ? "dark" : "theme-light");
    }, []);

    // Handle theme changes
    const toggleTheme = React.useCallback(() => {
        const newTheme = theme === "theme-light" ? "dark" : "theme-light";
        setThemeState(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }, [theme]);

    return (
        <Button className="rounded-full" variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
