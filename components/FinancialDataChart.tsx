import React, { useEffect, useRef, useState } from 'react';

interface DataPoint {
    label: string;
    value: number;
    color: string;
}

const FinancialDataChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const [isVisible, setIsVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [stats] = useState({
        processedDocuments: 1637,
        accuracy: "96.2",
        timeSaved: 425
    });

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Sample financial data that will animate
    const dataPoints: DataPoint[] = [
        { label: 'Q1', value: 0, color: '#10B981' },
        { label: 'Q2', value: 0, color: '#059669' },
        { label: 'Q3', value: 0, color: '#047857' },
        { label: 'Q4', value: 0, color: '#065F46' },
        { label: 'YTD', value: 0, color: '#064E3B' }
    ];

    // Target values for animation
    const targetValues = [75, 82, 89, 94, 88];

    // Intersection Observer for performance - only animate when visible
    useEffect(() => {
        if (!isClient) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (canvasRef.current) {
            observer.observe(canvasRef.current);
        }

        return () => observer.disconnect();
    }, [isClient]);

    useEffect(() => {
        if (!isVisible || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';

        let frame = 0;
        const maxFrames = 180; // 3 seconds at 60fps

        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear canvas
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Calculate progress (0 to 1)
            const progress = Math.min(frame / maxFrames, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

            // Draw bars
            const barWidth = (rect.width - 100) / dataPoints.length;
            const maxBarHeight = rect.height - 80;

            dataPoints.forEach((point, index) => {
                const targetValue = targetValues[index];
                const currentValue = targetValue * easeProgress;
                const barHeight = (currentValue / 100) * maxBarHeight;
                
                const x = 50 + index * barWidth + barWidth * 0.1;
                const y = rect.height - 60 - barHeight;
                const width = barWidth * 0.8;

                // Draw bar with gradient
                const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
                gradient.addColorStop(0, point.color);
                gradient.addColorStop(1, point.color + '80');
                
                ctx.fillStyle = gradient;
                ctx.fillRect(x, y, width, barHeight);

                // Draw value text on top of bar
                ctx.fillStyle = '#1F2937';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(
                    `${Math.round(currentValue)}%`,
                    x + width / 2,
                    y - 5
                );

                // Draw label below bar
                ctx.fillStyle = '#6B7280';
                ctx.font = '11px Arial';
                ctx.fillText(
                    point.label,
                    x + width / 2,
                    rect.height - 35
                );
            });

            // Draw title
            ctx.fillStyle = '#1F2937';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('Process Efficiency by Quarter', 10, 20);

            // Add some sparkle effects
            if (progress > 0.7) {
                for (let i = 0; i < 5; i++) {
                    const sparkleX = Math.random() * rect.width;
                    const sparkleY = Math.random() * (rect.height - 100) + 20;
                    const sparkleSize = Math.random() * 3 + 1;
                    
                    ctx.fillStyle = '#F59E0B';
                    ctx.beginPath();
                    ctx.arc(sparkleX, sparkleY, sparkleSize, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            frame++;

            if (frame < maxFrames) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                // Restart animation after a pause
                setTimeout(() => {
                    frame = 0;
                    animate();
                }, 2000);
            }
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isVisible]);

    return (
        <div className="w-full">
            {!isClient ? (
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full md:w-auto flex justify-center md:justify-start">
                        <div className="bg-gray-800 rounded-lg flex items-center justify-center" 
                             style={{ width: '280px', height: '200px' }}>
                            <div className="text-gray-400 text-sm">Loading chart...</div>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="text-gray-400 text-sm">Initializing financial analytics...</div>
                    </div>
                </div>
            ) : (
                <>
                    {/* Mobile-first responsive layout */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        {/* Chart Visualization */}
                        <div className="w-full md:w-auto flex justify-center md:justify-start">
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200" 
                                 style={{ width: '280px', height: '200px' }}>
                                <canvas 
                                    ref={canvasRef}
                                    className="w-full h-full"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                        </div>
                        
                        {/* Statistics - Mobile-optimized */}
                        <div className="flex-1 w-full min-w-0">
                            <div className="text-lg font-bold text-white mb-3">Financial Process Analytics</div>
                            
                            {/* Mobile-responsive grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 text-sm mb-4">
                                <div className="bg-gray-800 rounded-lg p-2 min-w-0">
                                    <div className="text-gray-400 text-xs">Documents</div>
                                    <div className="text-green-400 font-mono text-sm truncate">{stats.processedDocuments.toLocaleString()}</div>
                                </div>
                                
                                <div className="bg-gray-800 rounded-lg p-2 min-w-0">
                                    <div className="text-gray-400 text-xs">Accuracy</div>
                                    <div className="text-blue-400 font-mono text-sm">{stats.accuracy}%</div>
                                </div>
                                
                                <div className="bg-gray-800 rounded-lg p-2 min-w-0">
                                    <div className="text-gray-400 text-xs">Time Saved</div>
                                    <div className="text-yellow-400 font-mono text-sm">{stats.timeSaved}h</div>
                                </div>
                                
                                <div className="bg-gray-800 rounded-lg p-2 min-w-0">
                                    <div className="text-gray-400 text-xs">Status</div>
                                    <div className="text-green-400 font-mono text-sm flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                                        <span className="truncate">Active</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Description - responsive text */}
                            <div className="text-xs text-gray-300 space-y-1">
                                <div>📊 <strong>Tech:</strong> <span className="hidden sm:inline">Puppeteer, Process Automation, Financial Analysis</span><span className="sm:hidden">Automation, Analysis</span></div>
                                <div>🎯 <strong>Impact:</strong> <span className="hidden sm:inline">Improved efficiency, reduced errors, streamlined workflows</span><span className="sm:hidden">Efficiency gains</span></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default FinancialDataChart;
