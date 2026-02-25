export default function Logo({ size = 48 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer Structural Frame */}
            <rect x="5" y="5" width="90" height="90" stroke="var(--primary)" strokeWidth="4"/>

            {/* Inner Axial Lines */}
            <line x1="50" y1="5" x2="50" y2="95" stroke="var(--accent)" strokeWidth="2"/>
            <line x1="5" y1="50" x2="95" y2="50" stroke="var(--accent)" strokeWidth="2"/>

            {/* Central Node */}
            <circle cx="50" cy="50" r="8" fill="var(--primary)"/>
        </svg>
    );
}