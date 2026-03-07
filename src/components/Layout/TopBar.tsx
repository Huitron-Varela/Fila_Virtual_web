import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import './TopBar.css';

interface TopBarProps {
    toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('app-theme') === 'dark';
    });

    useEffect(() => {
        localStorage.setItem('app-theme', isDarkMode ? 'dark' : 'light');
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkMode]);

    return (
        <header className={`top-bar glass-panel ${isDarkMode ? 'dark-mode' : ''}`} style={{ 
            borderRadius: '0', 
            borderLeft: 'none', 
            borderRight: 'none', 
            borderTop: 'none',
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <div className="top-bar-left">
                <button className="mobile-menu-btn" onClick={toggleSidebar}>
                    <Menu size={24} />
                </button>
                <div style={{ fontWeight: 600, fontSize: '1.2rem', fontFamily: '"Inter", sans-serif', color: 'var(--text-main)', display: 'none' }}>
                    Dashboard
                </div>
            </div>

            <div className="top-bar-right">
                <button 
                    className="icon-btn theme-toggle-btn" 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    style={{ background: 'transparent', borderRadius: '50%', padding: '8px', cursor: 'pointer', border: 'none', transition: 'all 0.3s ease' }}
                    title="Cambiar Tema"
                >
                    {isDarkMode ? <Sun size={24} color="var(--text-main)" /> : <Moon size={24} color="var(--text-main)" />}
                </button>

                <div className="avatar" style={{ border: '2px solid white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <img src="https://ui-avatars.com/api/?name=CEO&background=FF5733&color=fff" alt="User Profile" />
                </div>
            </div>
        </header>
    );
};

export default TopBar;
