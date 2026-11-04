import React, { useEffect, useState } from 'react';

function applyTheme(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark);
}

function ThemeToggle() {
    // null until mounted, so server and first client render match
    const [darkMode, setDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem('darkMode');
        const isDark = stored === 'true' ||
            (stored === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
        applyTheme(isDark);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- reading a browser-only preference after mount
        setDarkMode(isDark);
    }, []);

    const toggleDarkMode = () => {
        const next = !darkMode;
        setDarkMode(next);
        localStorage.setItem('darkMode', String(next));
        applyTheme(next);
    };

    return (
        <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-gray-300/60 bg-white/40 hover:bg-white/70 transition-colors dark:bg-gray-800/60 dark:border-gray-600/60 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
        >
            {darkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
            ) : (
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            )}
        </button>
    );
}

export default ThemeToggle;
