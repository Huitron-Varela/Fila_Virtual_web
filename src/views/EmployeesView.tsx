import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';

const mockEmployees = [
    { id: 1, name: 'Pepito Pérez', role: 'GERENTE', avatar: 'https://ui-avatars.com/api/?name=Pepito+Perez', orders: 150, email: 'pepito@restaurant.com', phone: '555-0101' },
    { id: 2, name: 'María García', role: 'COCINA', avatar: 'https://ui-avatars.com/api/?name=Maria+Garcia', orders: 342, email: 'maria@restaurant.com', phone: '555-0102' },
    { id: 3, name: 'Juan López', role: 'ENTREGA', avatar: 'https://ui-avatars.com/api/?name=Juan+Lopez', orders: 412, email: 'juan@restaurant.com', phone: '555-0103' },
    { id: 4, name: 'Ana Martínez', role: 'CAJERO', avatar: 'https://ui-avatars.com/api/?name=Ana+Martinez', orders: 890, email: 'ana@restaurant.com', phone: '555-0104' },
];

const EmployeesView: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const getRoleBadgeClass = (employeeRole: string) => {
        if (employeeRole === 'GERENTE') return 'role-gerente';
        if (employeeRole === 'COCINA') return 'role-cocina';
        if (employeeRole === 'CAJERO') return 'role-cajero';
        return 'role-entrega';
    };

    const filteredEmployees = mockEmployees.filter(emp =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="view-container fade-in">
            <div className="view-header">
                <div>
                    <h1>Directorio de Empleados</h1>
                    <p className="subtitle">Gestiona el personal de tu restaurante</p>
                </div>
                <button className="btn-primary">
                    <Plus size={20} /> Nuevo Empleado
                </button>
            </div>

            <div className="card full-width" style={{ marginBottom: '2rem' }}>
                <div className="search-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Search size={20} className="text-muted" />
                    <input
                        type="text"
                        placeholder="Buscar empleados por nombre o rol..."
                        className="search-input"
                        style={{ width: '100%', maxWidth: '400px' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="employee-grid">
                {filteredEmployees.map(employee => (
                    <div key={employee.id} className="employee-card card">
                        <div className="employee-card-header">
                            <img src={employee.avatar} alt={employee.name} className="employee-avatar" />
                            <div>
                                <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>{employee.name}</h3>
                                <span className={`employee-role-badge ${getRoleBadgeClass(employee.role)}`}>
                                    {employee.role}
                                </span>
                            </div>
                        </div>

                        <div className="employee-card-body">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span className="text-muted">Pedidos/Actividades:</span>
                                <strong>{employee.orders}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span className="text-muted">Email:</span>
                                <span>{employee.email}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="text-muted">Teléfono:</span>
                                <span>{employee.phone}</span>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button className="btn-outline" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                <Edit2 size={16} style={{ marginRight: '0.5rem' }} /> Editar
                            </button>
                            <button className="btn-outline" style={{ color: '#E53E3E', borderColor: '#E53E3E' }}>
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeesView;
