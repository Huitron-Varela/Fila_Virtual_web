import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Home,
    Users,
    MenuSquare,
    Settings,
    TrendingUp,
    LogOut,
    Menu
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    
    const navItems = [
        { name: 'Dashboard', path: '/dashboard/home', icon: <Home size={20} /> },
        { name: 'Empleados', path: '/dashboard/employees', icon: <Users size={20} /> },
        { name: 'Menú', path: '/dashboard/menu', icon: <MenuSquare size={20} /> },
        { name: 'Perfil', path: '/dashboard/profile', icon: <Settings size={20} /> },
    ];

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <h2 className="brand-name text-primary" style={{ fontSize: '1.25rem', textAlign: 'center', width: '100%' }}>
                    <span className="brand-icon">A</span>
                    <span className="brand-text">ntigravity.</span>
                </h2>
                <button className="toggle-btn" onClick={toggleSidebar} style={{ position: 'absolute', right: '-16px', background: 'white', border: '1px solid var(--border-color)', borderRadius: '50%', padding: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <Menu size={16} />
                </button>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        title={!isOpen ? item.name : undefined}
                    >
                        <div className="nav-icon">{item.icon}</div>
                        <span className="nav-text">{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button 
                    onClick={handleLogout}
                    className="nav-link" 
                    style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', color: 'var(--text-muted)' }}
                    title={!isOpen ? "Cerrar Sesión" : undefined}
                >
                    <div className="nav-icon"><LogOut size={20} /></div>
                    <span className="nav-text">Cerrar Sesión</span>
                </button>
                <div className="user-role-badge">
                    <div className="nav-icon"><TrendingUp size={16} /></div>
                    <span className="nav-text">CEO Dashboard</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
