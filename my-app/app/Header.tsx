import React from 'react';

const Header = () => {
    return (
        <div className={`inline-flex h-screen fixed top-0 bg-black/50 z-9`}>
            <div className={`w-14 border-[var(--color-border)] border-r-4 bg-[var(--color-secondary)]/50 backdrop-blur-sm`}>

            </div>
        </div>
    );
};

export default Header;