import React from 'react';
import { TrendingUp, Users, DollarSign, ShoppingBag } from 'lucide-react';
import './Views.css';

const HomeView: React.FC = () => {
    return (
        <div className="view-container fade-in">
            <div className="view-header">
                <div>
                    <h1>Dashboard</h1>
                    <p className="subtitle">Bienvenido de vuelta, CEO</p>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card card">
                    <div className="stat-icon-wrapper" style={{ background: 'rgba(255, 87, 51, 0.1)', color: 'var(--primary-color)' }}>
                        <DollarSign size={24} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-title">Ventas del Día</p>
                        <h3 className="stat-value">$4,250.00</h3>
                        <span className="stat-change positive">+12.5% vs ayer</span>
                    </div>
                </div>
                <div className="stat-card card">
                    <div className="stat-icon-wrapper" style={{ background: 'rgba(56, 161, 105, 0.1)', color: '#38A169' }}>
                        <ShoppingBag size={24} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-title">Pedidos Totales</p>
                        <h3 className="stat-value">142</h3>
                        <span className="stat-change positive">+5.2% vs ayer</span>
                    </div>
                </div>
                <div className="stat-card card">
                    <div className="stat-icon-wrapper" style={{ background: 'rgba(49, 130, 206, 0.1)', color: '#3182CE' }}>
                        <TrendingUp size={24} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-title">Ticket Promedio</p>
                        <h3 className="stat-value">$29.90</h3>
                        <span className="stat-change negative">-1.2% vs ayer</span>
                    </div>
                </div>
                <div className="stat-card card">
                    <div className="stat-icon-wrapper" style={{ background: 'rgba(128, 90, 213, 0.1)', color: '#805AD5' }}>
                        <Users size={24} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-title">Clientes Nuevos</p>
                        <h3 className="stat-value">18</h3>
                        <span className="stat-change positive">+2 vs ayer</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-sections">
                <div className="card full-width">
                    <h3>Más Vendidos</h3>
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Categoría</th>
                                    <th>Ventas</th>
                                    <th>Ingresos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hamburguesa Clásica</td>
                                    <td>Comida</td>
                                    <td>45</td>
                                    <td>$405.00</td>
                                </tr>
                                <tr>
                                    <td>Papas Fritas Grandes</td>
                                    <td>Botana</td>
                                    <td>38</td>
                                    <td>$152.00</td>
                                </tr>
                                <tr>
                                    <td>Refresco de Cola</td>
                                    <td>Bebidas</td>
                                    <td>42</td>
                                    <td>$84.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeView;
