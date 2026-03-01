import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail, ArrowLeft, Building } from 'lucide-react';

const LoginView: React.FC = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Skip actual auth logic for this demo, just navigate to dashboard
        navigate('/dashboard/home');
    };

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            background: 'var(--bg-color)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <button 
                onClick={() => navigate('/')}
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1rem',
                    transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
                <ArrowLeft size={20} />
                Volver
            </button>

            <div className="glass-panel animate-slide-up" style={{
                display: 'flex',
                maxWidth: '900px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
            }}>
                {/* Image / Branding Side */}
                <div style={{
                    flex: '1',
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, #d83f1d 100%)',
                    padding: '3rem',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    display: window.innerWidth > 768 ? 'flex' : 'none' // Basic inline responsive
                }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Antigravity</h2>
                        <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                            {isLogin 
                                ? 'Ingresa a tu panel de control y administra tu restaurante con eficiencia.' 
                                : 'Únete a nuestra plataforma y lleva la gestión de tu negocio al siguiente nivel.'}
                        </p>
                    </div>
                </div>

                {/* Form Side */}
                <div style={{
                    flex: '1',
                    padding: '3rem',
                    background: 'white'
                }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                            {isLogin ? 'Bienvenido de nuevo' : 'Crear nueva cuenta'}
                        </h2>
                        <p style={{ color: 'var(--text-muted)' }}>
                            {isLogin ? 'Ingresa tus credenciales para continuar' : 'Registra los datos de tu empresa'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {!isLogin && (
                            <div className="animate-fade-in">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>
                                    Nombre de la Empresa
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <Building size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--text-muted)' }} />
                                    <input type="text" className="input-field" placeholder="Ej. Restaurante La Perla" style={{ paddingLeft: '3rem' }} required={!isLogin} />
                                </div>
                            </div>
                        )}

                        <div className={isLogin ? '' : 'animate-slide-up'}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>
                                Correo Electrónico
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--text-muted)' }} />
                                <input type="email" className="input-field" placeholder="tu@correo.com" style={{ paddingLeft: '3rem' }} required />
                            </div>
                        </div>

                        <div className={isLogin ? '' : 'animate-slide-up delay-100'}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>
                                Contraseña
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--text-muted)' }} />
                                <input type="password" className="input-field" placeholder="••••••••" style={{ paddingLeft: '3rem' }} required />
                            </div>
                        </div>

                        {isLogin && (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <a href="#" style={{ color: 'var(--primary-color)', fontSize: '0.875rem', textDecoration: 'none' }}>¿Olvidaste tu contraseña?</a>
                            </div>
                        )}

                        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1rem' }}>
                            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                        </button>
                    </form>

                    <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        {isLogin ? '¿No tienes una cuenta? ' : '¿Ya tienes una cuenta? '}
                        <button 
                            onClick={toggleMode}
                            style={{ 
                                background: 'none', 
                                border: 'none', 
                                color: 'var(--primary-color)', 
                                fontWeight: 600, 
                                cursor: 'pointer',
                                padding: 0,
                                fontSize: 'inherit'
                            }}
                        >
                            {isLogin ? 'Regístrate' : 'Inicia Sesión'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginView;
