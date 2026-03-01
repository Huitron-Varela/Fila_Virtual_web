import React from 'react';
import { Menu, Plus, Bell } from 'lucide-react';
import './TopBar.css';

interface TopBarProps {
    toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
    return (
        <header className="top-bar glass-panel" style={{ 
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
                <div className="search-container">
                    <input type="text" placeholder="Buscar..." className="search-input" style={{ background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px' }} />
                </div>
            </div>

            <div className="top-bar-right">
                <button className="icon-btn" style={{ background: '#f8fafc', borderRadius: '8px', padding: '8px' }}>
                    <Plus size={20} color="var(--text-muted)" />
                </button>

                <button className="icon-btn" style={{ background: '#f8fafc', borderRadius: '8px', padding: '8px', position: 'relative' }}>
                    <Bell size={20} color="var(--text-muted)" />
                    <span className="notification-dot" style={{ top: '6px', right: '6px' }}></span>
                </button>

                <div className="avatar" style={{ border: '2px solid white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <img src="https://ui-avatars.com/api/?name=CEO&background=FF5733&color=fff" alt="User Profile" />
                </div>
            </div>
        </header>
    );
};

export default TopBar;
