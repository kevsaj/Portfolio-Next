import React, { useState, useEffect } from 'react';

function FloatingNav() {
    const [activeSection, setActiveSection] = useState('intro');

    const navItems = [
        { id: 'intro', label: 'About', icon: '👋' },
        { id: 'icons', label: 'Skills', icon: '⚡' },
        { id: 'experience', label: 'Experience', icon: '💼' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'contact', label: 'Contact', icon: '📧' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Check if we're at the bottom of the page
            if (scrollTop + windowHeight >= documentHeight - 50) {
                setActiveSection('contact');
                return;
            }
            
            // Check each section
            for (let i = navItems.length - 1; i >= 0; i--) {
                const element = document.getElementById(navItems[i].id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is visible in viewport (at least 100px from top)
                    if (rect.top <= 100) {
                        setActiveSection(navItems[i].id);
                        return;
                    }
                }
            }
        };

        // Initial call after a short delay to ensure DOM is ready
        const timer = setTimeout(() => {
            handleScroll();
        }, 500);
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        console.log('Scrolling to:', sectionId); // Debug log
        const element = document.getElementById(sectionId);
        
        if (element) {
            console.log('Element found:', element); // Debug log
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active section immediately for better UX
            setActiveSection(sectionId);
        } else {
            console.log('Element not found for ID:', sectionId); // Debug log
        }
    };

    return (
        <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-8 z-50">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-lg dark:bg-gray-800/30 dark:border-gray-600/20">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                            relative px-4 py-2 rounded-full transition-all duration-300 group
                            ${activeSection === item.id 
                                ? 'bg-pink-500/80 text-white shadow-lg' 
                                : 'hover:bg-white/20 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700/50'
                            }
                        `}
                    >
                        <span className="flex items-center space-x-2">
                            <span className="text-sm">{item.icon}</span>
                            <span className={`text-xs font-medium transition-all duration-300 ${
                                activeSection === item.id ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden group-hover:opacity-100 group-hover:w-auto'
                            }`}>
                                {item.label}
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default FloatingNav;
