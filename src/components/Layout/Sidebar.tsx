import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Home,
    Users,
    MenuSquare,
    Settings,
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
                <h2 className="brand-name text-primary" style={{ fontSize: '1.25rem', textAlign: 'center', width: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/src/img/logot.png" alt="Logo" style={{ width: '40px', height: 'auto', objectFit: 'contain' }} />
                    <span className="brand-text" style={{ fontFamily: 'var(--font-primary)', fontWeight: 800 }}>AlToque</span>
                </h2>
                <button className="toggle-btn" onClick={toggleSidebar} style={{ position: 'absolute', right: '-16px', background: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '50%', padding: '6px', boxShadow: '0 4px 6px rgba(239, 68, 68, 0.3)', zIndex: 10, display: 'flex', transition: 'transform 0.3s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <Menu size={18} fill="currentColor" />
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
                    className="nav-link logout-btn" 
                    style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', color: 'var(--color-danger)', transition: 'all 0.2s ease' }}
                    title={!isOpen ? "Cerrar Sesión" : undefined}
                >
                    <div className="nav-icon"><LogOut size={20} /></div>
                    <span className="nav-text" style={{ fontWeight: 600 }}>Cerrar Sesión</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
