import { useState, useEffect } from 'react';

interface Petal {
    id: number;
    type: string;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    rotation: number;
}

export default function FallingPetalsBackground() {
    const [fallingPetals, setFallingPetals] = useState<Petal[]>([]);

    useEffect(() => {
        // Create continuous falling petals
        const mobileEmojis = ['🌸', '🌹', '🌺', '🍃', '🌿'];
        const desktopEmojis = ['🌸', '🌹', '🌺', '🍃', '🌿', '🌻', '🌷', '🌼', '🌙', '⭐', '✨', '💐', '🌱', '🌾', '🦋', '🌵', '🌳', '🌲'];
        let petalId = 0;
        
        // Detect if desktop (screen width > 768px)
        const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;
        const petalTypes = isDesktop ? desktopEmojis : mobileEmojis;
        const maxPetals = isDesktop ? 150 : 50; // Even more petals on desktop
        const spawnDelay = isDesktop ? 80 : 200; // Much faster spawning on desktop
        
        const spawnPetal = () => {
            const newPetal = {
                id: petalId++,
                type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: -20,
                size: 8 + Math.random() * 16, // 8-24px for emojis
                speed: 0.5 + Math.random() * 1.5, // 0.5-2px per frame
                opacity: 0.3 + Math.random() * 0.5, // 0.3-0.8
                rotation: Math.random() * 360
            };
            
            setFallingPetals(prev => [...prev.slice(-(maxPetals - 1)), newPetal]); // Keep max petals based on screen size
        };
        
        // Spawn new petal with responsive timing
        const spawnInterval = setInterval(spawnPetal, spawnDelay);
        
        // Animation loop with optimized performance
        const animate = () => {
            setFallingPetals(prev => {
                const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
                return prev.map(petal => ({
                    ...petal,
                    y: petal.y + petal.speed,
                    x: petal.x + Math.sin(petal.y * 0.01) * 0.5,
                    rotation: petal.rotation + 1
                })).filter(petal => petal.y < screenHeight + 100);
            });
        };
        
        let animationId: number;
        const animationFrame = () => {
            animate();
            animationId = requestAnimationFrame(animationFrame);
        };
        
        animationId = requestAnimationFrame(animationFrame);
        
        return () => {
            clearInterval(spawnInterval);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <>
            <style jsx>{`
                .petal-field {
                    position: fixed; 
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    pointer-events: none; 
                    overflow: hidden;
                    z-index: 1;
                }

                .falling-petal {
                    position: absolute;
                    pointer-events: none;
                    transition: none;
                    will-change: transform;
                }

                .animated-gradient {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    pointer-events: none;
                    z-index: 2;
                    opacity: 0.3;
                    background: linear-gradient(
                        45deg,
                        rgba(247, 198, 217, 0.6),
                        rgba(200, 162, 200, 0.5),
                        rgba(230, 184, 175, 0.6),
                        rgba(255, 215, 0, 0.3),
                        rgba(255, 182, 193, 0.5),
                        rgba(221, 160, 221, 0.4),
                        rgba(176, 224, 230, 0.3)
                    );
                    background-size: 400% 400%;
                    animation: gradientShift 8s ease-in-out infinite;
                }

                @keyframes gradientShift {
                    0% {
                        background-position: 0% 50%;
                        opacity: 0.2;
                    }
                    25% {
                        background-position: 100% 50%;
                        opacity: 0.4;
                    }
                    50% {
                        background-position: 100% 100%;
                        opacity: 0.3;
                    }
                    75% {
                        background-position: 0% 100%;
                        opacity: 0.5;
                    }
                    100% {
                        background-position: 0% 50%;
                        opacity: 0.2;
                    }
                }
            `}</style>
            
            {/* Animated gradient background */}
            <div className="animated-gradient"></div>
            
            <div className="petal-field">
                {fallingPetals.map(petal => (
                    <div
                        key={petal.id}
                        className="falling-petal"
                        style={{
                            left: `${petal.x}px`,
                            top: `${petal.y}px`,
                            fontSize: `${petal.size}px`,
                            opacity: petal.opacity,
                            transform: `rotate(${petal.rotation}deg)`,
                            color: petal.type === '🌸' ? '#f7c6d9' : 
                                   petal.type === '🌹' ? '#e6b8af' : 
                                   petal.type === '🌺' ? '#c8a2c8' :
                                   petal.type === '🌻' ? '#ffd700' :
                                   petal.type === '🌷' ? '#ff69b4' :
                                   petal.type === '🌼' ? '#fff8dc' :
                                   petal.type === '🌙' ? '#f0e68c' :
                                   petal.type === '⭐' ? '#ffd700' :
                                   petal.type === '✨' ? '#e6e6fa' :
                                   petal.type === '💐' ? '#dda0dd' :
                                   petal.type === '🌱' ? '#90ee90' :
                                   petal.type === '🌾' ? '#daa520' :
                                   petal.type === '🦋' ? '#87ceeb' :
                                   petal.type === '🌵' ? '#228b22' :
                                   petal.type === '🌳' ? '#228b22' :
                                   petal.type === '🌲' ? '#006400' : '#7ca982'
                        }}
                    >
                        {petal.type}
                    </div>
                ))}
            </div>
        </>
    );
}
