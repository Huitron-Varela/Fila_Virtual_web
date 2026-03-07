import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowLeft, Building, Sun, Moon } from 'lucide-react';
import '../Welcome/WelcomeView.css';

const LoginView: React.FC = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    // Inheriting theme from parent if possible, or keeping local state for standalone rendering
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('app-theme');
        return saved === 'dark';
    });

    useEffect(() => {
        localStorage.setItem('app-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Skip actual auth logic for this demo, just navigate to dashboard
        navigate('/dashboard/home');
    };

    return (
        <div className={`welcome-page ${isDarkMode ? 'dark-theme' : ''}`} style={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            backgroundImage: 'linear-gradient(180deg, var(--welcome-gradient-top) 0%, var(--welcome-bg) 100%)',
            transition: 'background-image 0.5s ease',
        }}>
            {/* Theme Toggle Button for Login View */}
            <button 
                className="theme-toggle" 
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Alternar tema"
                style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                }}
            >
                {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
            </button>
            <button 
                onClick={() => navigate('/')}
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    background: 'transparent',
                    border: '1px solid transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.6rem 1rem',
                    borderRadius: '20px',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.color = 'black';
                    e.currentTarget.style.background = 'var(--primary-color)';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(255, 87, 51, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                <ArrowLeft size={24} />
                Volver al inicio
            </button>

            <div className="glass-panel animate-slide-up" style={{
                display: 'flex',
                maxWidth: '900px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px var(--welcome-shadow)',
                background: 'var(--welcome-card-bg)',
                borderColor: 'var(--welcome-card-border)',
                transition: 'background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease'
            }}>
                {/* Image / Branding Side */}
                <div style={{
                    flex: '1',
                    background: 'var(--primary-color)',
                    padding: '3rem',
                    color: isDarkMode ? 'var(--welcome-text-primary)' : 'white',
                    display: window.innerWidth > 768 ? 'flex' : 'none', // Basic inline responsive
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                            <img src="/src/img/logot.png" alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                            <h2 style={{ fontSize: '2rem', margin: 0, fontWeight: 800 }}>AlToque<span style={{color: 'var(--primary-color)'}}>.</span></h2>
                        </div>
                        <p style={{ opacity: 0.9, lineHeight: 1.6, fontSize: '1.1rem' }}>
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
                    background: 'var(--welcome-card-bg)',
                    transition: 'background-color 0.5s ease'
                }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.75rem', color: 'var(--welcome-text-primary)', marginBottom: '0.5rem', transition: 'color 0.5s ease' }}>
                            {isLogin ? 'Bienvenido de nuevo' : 'Crear nueva cuenta'}
                        </h2>
                        <p style={{ color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }}>
                            {isLogin ? 'Ingresa tus credenciales para continuar' : 'Registra los datos de tu empresa'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {!isLogin && (
                            <div className="animate-fade-in">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--welcome-text-primary)', transition: 'color 0.5s ease' }}>
                                    Nombre de la Empresa
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <Building size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }} />
                                    <input type="text" className="input-field" placeholder="Ej. Restaurante La Perla" style={{ paddingLeft: '3rem', background: 'var(--welcome-bg)', color: 'var(--welcome-text-body)', borderColor: 'var(--welcome-card-border)' }} required={!isLogin} />
                                </div>
                            </div>
                        )}

                        <div className={isLogin ? '' : 'animate-slide-up'}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--welcome-text-primary)', transition: 'color 0.5s ease' }}>
                                Correo Electrónico
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }} />
                                <input type="email" className="input-field" placeholder="tu@correo.com" style={{ paddingLeft: '3rem', background: 'var(--welcome-bg)', color: 'var(--welcome-text-body)', borderColor: 'var(--welcome-card-border)' }} required />
                            </div>
                        </div>

                        <div className={isLogin ? '' : 'animate-slide-up delay-100'}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--welcome-text-primary)', transition: 'color 0.5s ease' }}>
                                Contraseña
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }} />
                                <input type="password" className="input-field" placeholder="••••••••" style={{ paddingLeft: '3rem', background: 'var(--welcome-bg)', color: 'var(--welcome-text-body)', borderColor: 'var(--welcome-card-border)' }} required />
                            </div>
                        </div>

                        {isLogin && (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <a href="#" style={{ color: 'var(--primary-color)', fontSize: '0.875rem', textDecoration: 'none' }}>¿Olvidaste tu contraseña?</a>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="btn-primary" 
                            style={{ 
                                width: '100%', 
                                justifyContent: 'center', 
                                padding: '1rem', 
                                fontSize: '1.1rem',
                                fontFamily: 'inherit'
                            }}>
                            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', margin: '0 0.5rem', opacity: 0.6 }}>
                            <div style={{ flex: 1, height: '1px', background: 'var(--welcome-card-border)' }}></div>
                            <span style={{ padding: '0 1rem', fontSize: '0.85rem', color: 'var(--welcome-text-muted)' }}>O continua con</span>
                            <div style={{ flex: 1, height: '1px', background: 'var(--welcome-card-border)' }}></div>
                        </div>

                        <button 
                            type="button" 
                            style={{ 
                                width: '100%', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center', 
                                gap: '0.75rem',
                                padding: '0.9rem', 
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                fontFamily: 'inherit',
                                background: 'transparent',
                                color: 'var(--welcome-text-primary)',
                                border: '1px solid var(--welcome-card-border)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'var(--welcome-section-alt)';
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = 'var(--welcome-card-border)';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Google
                        </button>
                    </form>

                    <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.95rem', color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }}>
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
