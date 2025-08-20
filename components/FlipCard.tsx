import React, { useState, useEffect, useRef } from 'react';

interface FlipCardProps {
    children: React.ReactNode;
    backContent: React.ReactNode;
    autoFlip?: boolean;
    flipInterval?: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ 
    children, 
    backContent, 
    autoFlip = true, 
    flipInterval = 15000 
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for performance
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto-flip functionality - only when visible
    useEffect(() => {
        if (!autoFlip || isLocked || isHovered || !isVisible) return;

        const interval = setInterval(() => {
            setIsFlipped(prev => !prev);
        }, flipInterval);

        return () => clearInterval(interval);
    }, [autoFlip, flipInterval, isLocked, isHovered, isVisible]);

    const handleToggle = () => {
        setIsFlipped(!isFlipped);
    };

    const handleLock = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLocked(!isLocked);
    };

    return (
        <div 
            ref={containerRef}
            className="relative w-full min-h-fit perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Flip Container */}
            <div 
                className={`relative w-full min-h-fit transition-transform duration-1000 transform-style-preserve-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                }`}
                onClick={handleToggle}
            >
                {/* Front Side */}
                <div className="w-full backface-hidden">
                    {children}
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full backface-hidden rotate-y-180 overflow-auto">
                    {backContent}
                </div>
            </div>

            {/* Control Button */}
            <button
                onClick={handleLock}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 shadow-lg ${
                    isLocked 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                } ${isHovered ? 'opacity-100' : 'opacity-70'}`}
                title={isLocked ? 'Unlock auto-flip' : 'Lock current side'}
            >
                {isLocked ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                )}
            </button>

            {/* Flip Indicator */}
            <div className={`absolute bottom-4 right-4 z-10 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-60'
            }`}>
                <div className="flex items-center gap-2 bg-black bg-opacity-50 rounded-full px-3 py-1 text-white text-xs">
                    <span>{isFlipped ? 'Demo' : 'Details'}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                </div>
            </div>

            {/* Auto-flip status indicator */}
            {!isLocked && autoFlip && isVisible && (
                <div className={`absolute top-4 left-4 z-10 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                    <div className="flex items-center gap-2 bg-green-500 bg-opacity-80 rounded-full px-2 py-1 text-white text-xs">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>Auto-flip</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlipCard;
