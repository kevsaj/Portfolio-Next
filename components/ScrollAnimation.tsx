import React, { useEffect, useState, useRef } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
    delay?: number;
    duration?: number;
    className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
    children,
    animation = 'fadeIn',
    delay = 0,
    duration = 600,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;
        let timer: ReturnType<typeof setTimeout> | undefined;

        const reveal = () => { timer = setTimeout(() => setIsVisible(true), delay); };

        if (typeof IntersectionObserver === 'undefined' ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            reveal();
            return () => clearTimeout(timer);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    observer.disconnect();
                    reveal();
                }
            },
            { threshold: 0, rootMargin: '0px 0px -10% 0px' }
        );
        observer.observe(el);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, [delay]);

    const getAnimationClasses = () => {
        const baseClasses = 'transition-all duration-700 ease-out';
        
        if (!isVisible) {
            switch (animation) {
                case 'fadeIn':
                    return `${baseClasses} opacity-0`;
                case 'fadeInUp':
                case 'slideUp':
                    return `${baseClasses} opacity-0 translate-y-8`;
                case 'fadeInLeft':
                case 'slideLeft':
                    return `${baseClasses} opacity-0 translate-x-8`;
                case 'fadeInRight':
                case 'slideRight':
                    return `${baseClasses} opacity-0 -translate-x-8`;
                case 'scaleIn':
                    return `${baseClasses} opacity-0 scale-95`;
                default:
                    return `${baseClasses} opacity-0`;
            }
        }

        return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`;
    };

    return (
        <div
            ref={elementRef}
            className={`${getAnimationClasses()} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
