'use client'
import { useEffect, useRef } from "react";

export function NetworkDiagram() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        // Configuration
        const nodeColor = "#3b82f6"; // Electric Blue
        const edgeColor = "rgba(59, 130, 246, 0.2)";
        const highlightColor = "#ffffff";

        // Resize handler
        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };
        window.addEventListener("resize", resize);
        resize();

        // Nodes definition
        const nodes = Array.from({ length: 15 }, (_, i) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 2,
        }));

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update positions
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off walls
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            });

            // Draw Connections
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = 1 - distance / 150;
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw Nodes
            nodes.forEach((node, i) => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = i === 0 ? highlightColor : nodeColor;
                ctx.fill();

                // Glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = nodeColor;
            });
            ctx.shadowBlur = 0; // Reset shadow

            time++;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
