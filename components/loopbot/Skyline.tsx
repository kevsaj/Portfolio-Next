import Image from 'next/image';

/** Deterministic pseudo-random so server and client draw the same windows. */
function lit(x: number, y: number) {
    return ((x * 73 + y * 151) % 7) < 3;
}

const back = [
    { x: 0, w: 46, h: 120 }, { x: 40, w: 38, h: 170 }, { x: 74, w: 52, h: 135 },
    { x: 280, w: 44, h: 150 }, { x: 318, w: 50, h: 115 }, { x: 362, w: 40, h: 165 },
];
const front = [
    { x: 10, w: 60, h: 90 }, { x: 64, w: 48, h: 120 }, { x: 108, w: 40, h: 70 },
    { x: 252, w: 46, h: 105 }, { x: 294, w: 58, h: 80 }, { x: 346, w: 54, h: 125 },
];

/**
 * Hero art: the tower at dusk, drawn in SVG (like the game's own sky), with
 * LoopBot near the top. Stands in until the feature graphic is added.
 */
export default function Skyline() {
    const towerX = 150;
    const towerW = 100;
    const towerTop = 96;
    const ground = 360;
    const floors = Array.from({ length: 12 }, (_, i) => towerTop + 40 + i * 19);

    return (
        <div className="relative mx-auto w-full max-w-md">
            <svg viewBox="0 0 400 360" className="block h-auto w-full" role="img" aria-label="A skyscraper at dusk with LoopBot near the top">
                <defs>
                    <linearGradient id="lb-sky" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#2b2546" stopOpacity="0" />
                        <stop offset="0.7" stopColor="#5a3d6b" stopOpacity="0.55" />
                        <stop offset="1" stopColor="#a0687a" stopOpacity="0.7" />
                    </linearGradient>
                    <linearGradient id="lb-tower" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#323752" />
                        <stop offset="1" stopColor="#262a3d" />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="400" height="360" fill="url(#lb-sky)" />
                <circle cx="326" cy="78" r="24" fill="#f3dcae" opacity="0.9" />
                <circle cx="326" cy="78" r="40" fill="#f3dcae" opacity="0.1" />

                {back.map((b) => (
                    <rect key={`b${b.x}`} x={b.x} y={ground - b.h} width={b.w} height={b.h} fill="#2d2c45" />
                ))}

                {/* The tower */}
                <rect x={towerX} y={towerTop} width={towerW} height={ground - towerTop} fill="url(#lb-tower)" />
                <rect x={towerX - 6} y={towerTop} width={towerW + 12} height="10" rx="2" fill="#3b4060" />
                {floors.map((fy) =>
                    [0, 1, 2, 3, 4].map((c) => (
                        <rect
                            key={`${fy}-${c}`}
                            x={towerX + 10 + c * 17}
                            y={fy}
                            width="12"
                            height="9"
                            rx="1.5"
                            fill={lit(c, fy) ? '#7ff2e0' : '#1b1d2a'}
                            opacity={lit(c, fy) ? 0.8 : 1}
                        />
                    )),
                )}

                {front.map((b) => (
                    <g key={`f${b.x}`}>
                        <rect x={b.x} y={ground - b.h} width={b.w} height={b.h} fill="#1f2133" />
                        {Array.from({ length: Math.floor((b.h - 16) / 18) }, (_, r) => (
                            <rect key={r} x={b.x + 8} y={ground - b.h + 12 + r * 18} width={b.w - 16} height="4" fill={lit(b.x, r) ? '#f2c38a' : '#2a2c42'} opacity="0.6" />
                        ))}
                    </g>
                ))}
            </svg>
            {/* LoopBot standing on the roof (roof line is at 96/360 of the height) */}
            <div className="absolute left-1/2 top-[7%] w-[17%] -translate-x-1/2">
                <Image src="/loopbot/icon-512.webp" alt="" width={96} height={96} className="h-auto w-full rounded-2xl shadow-xl ring-2 ring-[#7ff2e0]/40" unoptimized priority />
            </div>
        </div>
    );
}
