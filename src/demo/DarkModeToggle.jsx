import { useState, useEffect } from "react";

export default function DarkModeToggle() {
    // Ensure theme is correctly fetched from localStorage
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h2>React Bootstrap 5 Dark Mode</h2>

                {/* Dark Mode Switch */}
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="themeSwitch"
                        checked={isDarkMode}
                        onChange={() => setIsDarkMode(!isDarkMode)}
                    />
                    <label className="form-check-label" htmlFor="themeSwitch">
                        {isDarkMode ? "Dark Mode" : "Light Mode"}
                    </label>
                </div>
            </div>

            <div className="card mt-4 p-4">
                <p>This is a sample React page where you can toggle between Light Mode and Dark Mode.</p>
            </div>
        </div>
    );
}
