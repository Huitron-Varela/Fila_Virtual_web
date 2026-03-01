import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import TopBar from './components/Layout/TopBar';
import HomeView from './views/HomeView';
import EmployeesView from './views/EmployeesView';
import MenuView from './views/MenuView';
import ProfileView from './views/ProfileView';
import WelcomeView from './views/WelcomeView';
import LoginView from './views/LoginView';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // A simple wrapper for dashboard routes
    const DashboardLayout = () => (
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
    );

    return (
        <Router>
            <Routes>
                {/* Public / Auth Routes */}
                <Route path="/" element={<WelcomeView />} />
                <Route path="/login" element={<LoginView />} />
                
                {/* Protected Dashboard Routes */}
                <Route path="/dashboard/*" element={<DashboardLayout />} />
                
                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
