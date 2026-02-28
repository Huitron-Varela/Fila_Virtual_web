import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import TopBar from './components/Layout/TopBar';
import HomeView from './views/HomeView';
import EmployeesView from './views/EmployeesView';
import MenuView from './views/MenuView';
import ProfileView from './views/ProfileView';

export type Role = 'CEO' | 'GERENTE' | 'EMPLEADO_COCINA' | 'EMPLEADO_ENTREGA' | 'EMPLEADO_CAJERO';

function App() {
    const [role, setRole] = useState<Role>('CEO');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Router>
            <div className="app-container">
                <Sidebar role={role} isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                    <TopBar role={role} setRole={setRole} toggleSidebar={toggleSidebar} />
                    <div className="content-area">
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" replace />} />
                            <Route path="/home" element={<HomeView role={role} />} />
                            <Route path="/employees" element={<EmployeesView role={role} />} />
                            <Route path="/menu" element={<MenuView role={role} />} />
                            <Route path="/profile" element={<ProfileView role={role} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
