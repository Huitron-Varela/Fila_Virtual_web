import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Home,
    Users,
    MenuSquare,
    Settings,
    ChevronLeft,
    ChevronRight,
    TrendingUp
} from 'lucide-react';
import { Role } from '../../App';
import './Sidebar.css';

interface SidebarProps {
    role: Role;
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, toggleSidebar }) => {
    const getNavItems = () => {
        switch (role) {
            case 'CEO':
            case 'GERENTE':
                return [
                    { name: 'Home', path: '/home', icon: <Home size={20} /> },
                    { name: 'Empleados', path: '/employees', icon: <Users size={20} /> },
                    { name: 'Menú', path: '/menu', icon: <MenuSquare size={20} /> },
                    { name: 'Perfil', path: '/profile', icon: <Settings size={20} /> },
                ];
            case 'EMPLEADO_COCINA':
            case 'EMPLEADO_ENTREGA':
            case 'EMPLEADO_CAJERO':
                return [
                    { name: 'Home', path: '/home', icon: <Home size={20} /> },
                    { name: 'Perfil', path: '/profile', icon: <Settings size={20} /> },
                ];
            default:
                return [];
        }
    };

    const navItems = getNavItems();

    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                {isOpen && <h2 className="brand-name">AlToque<span className="text-primary">M</span></h2>}
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
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
                        <span className="nav-icon">{item.icon}</span>
                        {isOpen && <span className="nav-text">{item.name}</span>}
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                {isOpen && (
                    <div className="user-role-badge">
                        <TrendingUp size={14} className="text-primary" />
                        <span>Role: {role.replace('EMPLEADO_', '')}</span>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
