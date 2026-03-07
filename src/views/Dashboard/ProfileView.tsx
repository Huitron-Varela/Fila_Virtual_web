import React from 'react';
import { User, Settings, Globe, Bell, HelpCircle, Shield, FileText, LogOut, UploadCloud } from 'lucide-react';

const ProfileView: React.FC = () => {
    return (
        <div className="view-container fade-in">
            <div className="view-header">
                <div>
                    <h1>Perfil del CEO</h1>
                    <p className="subtitle">Gestiona tu cuenta y configuración de la empresa</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
                {/* Profile Card */}
                <div className="card" style={{ height: 'fit-content' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ position: 'relative', marginBottom: '1rem' }}>
                            <img
                                src="https://ui-avatars.com/api/?name=CEO&background=FF5733&color=fff&size=120"
                                alt="Profile"
                                style={{ borderRadius: '50%', border: '4px solid rgba(255,87,51,0.2)' }}
                            />
                            <button style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                                <UploadCloud size={16} />
                            </button>
                        </div>
                        <h2>CEO Account</h2>
                        <span className="employee-role-badge role-gerente" style={{ background: 'rgba(255,87,51,0.1)', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                            Administrador Principal
                        </span>
                        <p className="text-muted">ceo@restaurant.com</p>
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
                                <select className="input-field" style={{ width: 'auto', padding: '0.5rem' }}>
                                    <option value="es">Español (ES)</option>
                                    <option value="en">English (EN)</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-color)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Bell className="text-primary" />
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Notificaciones</h4>
                                        <p className="text-muted" style={{ fontSize: '0.85rem' }}>Administra las alertas de ventas o personal</p>
                                    </div>
                                </div>
                                <button className="btn-outline">Configurar</button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-color)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Settings className="text-primary" />
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Personalización e Impuestos</h4>
                                        <p className="text-muted" style={{ fontSize: '0.85rem' }}>Ajusta la moneda, impuestos y facturación</p>
                                    </div>
                                </div>
                                <button className="btn-outline">Preferencias</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                            Licencia e Información del Sistema
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <button className="btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem', background: 'var(--bg-color)' }}>
                                <HelpCircle size={18} style={{ marginRight: '1rem', color: 'var(--text-muted)' }} /> Soporte VIP para CEOs
                            </button>
                            <button className="btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem', background: 'var(--bg-color)' }}>
                                <Shield size={18} style={{ marginRight: '1rem', color: 'var(--text-muted)' }} /> Privacidad y Seguridad (Cifrado Activo)
                            </button>
                            <button className="btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem', background: 'var(--bg-color)' }}>
                                <FileText size={18} style={{ marginRight: '1rem', color: 'var(--text-muted)' }} /> Términos y Condiciones
                            </button>
                            <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <span style={{ marginRight: '1rem', display: 'inline-flex', width: '20px', justifyContent: 'center', fontWeight: 'bold' }}>i</span>
                                Antigravity Pro - Licencia Activa (v2.0)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
