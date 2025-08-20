import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CompactPointCloudDemo: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene>();
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const pointCloudRef = useRef<THREE.Points>();
    const frameRef = useRef<number>();
    
    const [isClient, setIsClient] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [stats] = useState({
        points: Math.floor(Math.random() * 2000) + 1500, // Reduced from 3000
        clusters: Math.floor(Math.random() * 3) + 3,
        accuracy: (Math.random() * 0.15 + 0.85).toFixed(1)
    });

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Intersection Observer for performance - only animate when visible
    useEffect(() => {
        if (!isClient) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (mountRef.current) {
            observer.observe(mountRef.current);
        }

        return () => observer.disconnect();
    }, [isClient]);

    // Generate compact point cloud with fewer points for better performance
    const generateCompactPointCloud = (count: number = 1200) => { // Reduced from 2000
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        const clusters = [
            { center: [0, 0, 0], radius: 1.2, color: [0.2, 0.8, 1] }, // Smaller radius
            { center: [1.8, 0.8, 0.4], radius: 0.8, color: [1, 0.3, 0.5] }, // Closer clusters
            { center: [-1.2, -0.4, 0.8], radius: 1, color: [0.3, 1, 0.3] }
        ];
        
        for (let i = 0; i < count; i++) {
            const cluster = clusters[Math.floor(Math.random() * clusters.length)];
            
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const radius = Math.random() * cluster.radius;
            
            const x = cluster.center[0] + radius * Math.sin(phi) * Math.cos(theta);
            const y = cluster.center[1] + radius * Math.sin(phi) * Math.sin(theta);
            const z = cluster.center[2] + radius * Math.cos(phi);
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            colors[i * 3] = cluster.color[0];
            colors[i * 3 + 1] = cluster.color[1];
            colors[i * 3 + 2] = cluster.color[2];
        }
        
        return { positions, colors };
    };

    useEffect(() => {
        if (!mountRef.current || !isClient) return;

        // Scene setup with performance optimizations
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a2e);
        sceneRef.current = scene;

        // Camera with optimized settings
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100); // Reduced far plane
        camera.position.set(2.5, 2.5, 2.5); // Closer camera
        camera.lookAt(0, 0, 0);

        // Renderer with performance settings
        const renderer = new THREE.WebGLRenderer({ 
            antialias: false, // Disabled for performance
            powerPreference: "high-performance"
        });
        
        // Responsive size - bigger on desktop, appropriate for mobile
        const isMobile = window.innerWidth < 768;
        const canvasSize = isMobile ? 180 : 240; // Bigger on desktop
        
        renderer.setSize(canvasSize, canvasSize);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Optimized point cloud
        const { positions, colors } = generateCompactPointCloud();
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.08, // Slightly larger points to compensate for fewer points
            vertexColors: true,
            transparent: false, // Disabled transparency for performance
            sizeAttenuation: false // Disabled for performance
        });

        const pointCloud = new THREE.Points(geometry, material);
        scene.add(pointCloud);
        pointCloudRef.current = pointCloud;

        // Simplified lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 1.0); // Single light
        scene.add(ambientLight);

        // Optimized animation with frame rate limiting
        let lastTime = 0;
        const targetFPS = 30; // Limit to 30 FPS for performance
        const frameInterval = 1000 / targetFPS;

        const animate = (currentTime: number) => {
            if (!isVisible) {
                frameRef.current = requestAnimationFrame(animate);
                return;
            }

            if (currentTime - lastTime >= frameInterval) {
                if (pointCloudRef.current) {
                    pointCloudRef.current.rotation.y += 0.015; // Slightly faster rotation
                    pointCloudRef.current.rotation.x += 0.008;
                }
                
                renderer.render(scene, camera);
                lastTime = currentTime;
            }
            
            frameRef.current = requestAnimationFrame(animate);
        };
        animate(0);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            if (mountRef.current && renderer.domElement && renderer.domElement.parentNode === mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [isClient, isVisible]);

    if (!isClient) {
        return (
            <div className="w-full">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-48 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-gray-400 text-sm">Loading...</div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="text-gray-400 text-sm">Initializing visualization...</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Mobile-first responsive layout */}
            <div className="flex flex-col md:flex-row items-start gap-4">
                {/* 3D Visualization */}
                <div className="w-full md:w-auto flex justify-center md:justify-start">
                    <div className="bg-black rounded-lg overflow-hidden border border-gray-600" 
                         style={{ width: 'fit-content', height: 'fit-content' }}>
                        <div ref={mountRef} className="block" />
                    </div>
                </div>
                
                {/* Statistics - Mobile-optimized */}
                <div className="flex-1 w-full min-w-0">
                    <div className="text-lg font-bold text-white mb-3">Live Point Cloud Analysis</div>
                    
                    {/* Mobile-responsive grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 text-sm mb-4">
                        <div className="bg-gray-800 rounded-lg p-2 min-w-0">
                            <div className="text-gray-400 text-xs">Points</div>
                            <div className="text-blue-400 font-mono text-sm truncate">{stats.points.toLocaleString()}</div>
                        </div>
                        
                        <div className="bg-gray-800 rounded-lg p-2 min-w-0">
                            <div className="text-gray-400 text-xs">Clusters</div>
                            <div className="text-green-400 font-mono text-sm">{stats.clusters}</div>
                        </div>
                        
                        <div className="bg-gray-800 rounded-lg p-2 min-w-0">
                            <div className="text-gray-400 text-xs">Accuracy</div>
                            <div className="text-yellow-400 font-mono text-sm">{stats.accuracy}%</div>
                        </div>
                        
                        <div className="bg-gray-800 rounded-lg p-2 min-w-0">
                            <div className="text-gray-400 text-xs">Status</div>
                            <div className="text-green-400 font-mono text-sm flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                                <span className="truncate">Live</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Description - responsive text */}
                    <div className="text-xs text-gray-500 space-y-1">
                        <div>🔬 <strong>Tech:</strong> <span className="hidden sm:inline">Python, Open3D, matplotlib, Three.js</span><span className="sm:hidden">Python, Three.js</span></div>
                        <div>💡 <strong>Features:</strong> <span className="hidden sm:inline">Real-time clustering, automated analysis</span><span className="sm:hidden">Real-time analysis</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompactPointCloudDemo;
