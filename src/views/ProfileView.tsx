import React from 'react';
import { Role } from '../App';
import { User, Settings, Globe, Bell, HelpCircle, Shield, FileText, LogOut } from 'lucide-react';

interface ProfileViewProps {
    role: Role;
}

const ProfileView: React.FC<ProfileViewProps> = ({ role }) => {
    return (
        <div className="view-container fade-in">
            <div className="view-header">
                <div>
                    <h1>Perfil y Configuración</h1>
                    <p className="subtitle">Gestiona tu cuenta y preferencias del sistema</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                {/* Profile Card */}
                <div className="card" style={{ height: 'fit-content' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
                        <img
                            src="https://ui-avatars.com/api/?name=User&background=FF5733&color=fff&size=120"
                            alt="Profile"
                            style={{ borderRadius: '50%', marginBottom: '1rem', border: '4px solid rgba(255,87,51,0.2)' }}
                        />
                        <h2>Usuario Actual</h2>
                        <span className="employee-role-badge role-gerente" style={{ marginBottom: '0.5rem' }}>
                            {role}
                        </span>
                        <p className="text-muted">usuario@restaurant.com</p>
                    </div>

                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
                        <User size={18} /> Editar Perfil
                    </button>

                    <button className="btn-outline" style={{ width: '100%', justifyContent: 'center', color: '#E53E3E', borderColor: '#E53E3E' }}>
                        <LogOut size={18} style={{ marginRight: '0.5rem' }} /> Cerrar Sesión
                    </button>
                </div>

                {/* Settings Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="card">
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                            Configuraciones Generales
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-color)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Globe className="text-primary" />
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Idioma / Language</h4>
                                        <p className="text-muted" style={{ fontSize: '0.85rem' }}>Selecciona tu idioma preferido</p>
                                    </div>
                                </div>
                                <select className="role-selector">
                                    <option value="es">Español (ES)</option>
                                    <option value="en">English (EN)</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-color)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Bell className="text-primary" />
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Notificaciones</h4>
                                        <p className="text-muted" style={{ fontSize: '0.85rem' }}>Administra las alertas del sistema</p>
                                    </div>
                                </div>
                                <button className="btn-outline">Configurar</button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-color)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Settings className="text-primary" />
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Personalización</h4>
                                        <p className="text-muted" style={{ fontSize: '0.85rem' }}>Ajusta el tema visual</p>
                                    </div>
                                </div>
                                <button className="btn-outline">Preferencias</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                            Información del Sistema
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <button className="btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem', background: 'var(--bg-color)' }}>
                                <HelpCircle size={18} style={{ marginRight: '1rem', color: 'var(--text-muted)' }} /> Ayuda y Soporte
                            </button>
                            <button className="btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem', background: 'var(--bg-color)' }}>
                                <Shield size={18} style={{ marginRight: '1rem', color: 'var(--text-muted)' }} /> Privacidad y Seguridad
                            </button>
                            <button className="btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem', background: 'var(--bg-color)' }}>
                                <FileText size={18} style={{ marginRight: '1rem', color: 'var(--text-muted)' }} /> Términos y Condiciones
                            </button>
                            <button className="btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem', background: 'var(--bg-color)' }}>
                                <span style={{ marginRight: '1rem', color: 'var(--text-muted)', display: 'inline-flex', width: '18px', justifyContent: 'center' }}>i</span>
                                Acerca de DashM v1.0.0
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
