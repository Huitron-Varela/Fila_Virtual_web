import React from 'react';
import { Menu, Plus, Bell } from 'lucide-react';
import { Role } from '../../App';
import './TopBar.css';

interface TopBarProps {
    role: Role;
    setRole: (role: Role) => void;
    toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ role, setRole, toggleSidebar }) => {
    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value as Role);
    };

    return (
        <header className="top-bar">
            <div className="top-bar-left">
                <button className="mobile-menu-btn" onClick={toggleSidebar}>
                    <Menu size={24} />
                </button>
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
            </div>

            <div className="top-bar-right">
                <select value={role} onChange={handleRoleChange} className="role-selector">
                    <option value="CEO">CEO</option>
                    <option value="GERENTE">Gerente</option>
                    <option value="EMPLEADO_COCINA">Empleado (Cocina)</option>
                    <option value="EMPLEADO_ENTREGA">Empleado (Entrega)</option>
                    <option value="EMPLEADO_CAJERO">Empleado (Cajero)</option>
                </select>

                <button className="icon-btn">
                    <Plus size={20} />
                </button>

                <button className="icon-btn">
                    <Bell size={20} />
                    <span className="notification-dot"></span>
                </button>

                <div className="avatar">
                    <img src="https://ui-avatars.com/api/?name=User&background=FF5733&color=fff" alt="User Profile" />
                </div>
            </div>
        </header>
    );
};

export default TopBar;
