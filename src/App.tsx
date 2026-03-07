import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import TopBar from './components/Layout/TopBar';
import HomeView from './views/Dashboard/HomeView';
import EmployeesView from './views/Dashboard/EmployeesView';
import MenuView from './views/Dashboard/MenuView';
import ProfileView from './views/Dashboard/ProfileView';
import WelcomeView from './views/Welcome/WelcomeView';
import LoginView from './views/Login/LoginView';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Router>
            <Routes>
                {/* Rutas Públicas */}
                <Route path="/" element={<WelcomeView />} />
                <Route path="/login" element={<LoginView />} />
                
                {/* Rutas Protegidas del Dashboard */}
                {/* ✅ SOLUCIÓN: Pasamos el JSX directamente al element */}
                <Route path="/dashboard/*" element={
                    <div className="app-container">
                        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                        <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                            <TopBar toggleSidebar={toggleSidebar} />
                            <div className="content-area animate-fade-in">
                                <Routes>
                                    <Route path="/" element={<Navigate to="home" replace />} />
                                    <Route path="home" element={<HomeView />} />
                                    <Route path="employees" element={<EmployeesView />} />
                                    <Route path="menu" element={<MenuView />} />
                                    <Route path="profile" element={<ProfileView />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                } />
                
                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;