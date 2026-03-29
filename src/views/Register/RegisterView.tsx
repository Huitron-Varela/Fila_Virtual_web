import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowLeft, Building, Sun, Moon } from 'lucide-react';
import LegalModal from '../../components/Legal/LegalModal';
import { TermsAndConditions, PrivacyPolicy } from '../../components/Legal/legalTexts';
import '../Welcome/WelcomeView.css';

const RegisterView: React.FC = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('app-theme');
        return saved === 'dark';
    });
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [acceptedLegal, setAcceptedLegal] = useState(false);

    useEffect(() => {
        localStorage.setItem('app-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                    transition: 'all 0.3s ease',
                    color: isDarkMode ? 'white' : 'black' 
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.color ='white';
                    e.currentTarget.style.background = 'var(--primary-color)';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(255, 87, 51, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.color = isDarkMode ? 'white' : 'black';
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
                    display: window.innerWidth > 768 ? 'flex' : 'none',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                            <img src="/src/img/logot.png" alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                            <h2 style={{ fontSize: '2rem', margin: 0, fontWeight: 800 }}>AlToque<span style={{color: 'var(--primary-color)'}}>.</span></h2>
                        </div>
                        <p style={{ opacity: 0.9, lineHeight: 1.6, fontSize: '1.1rem' }}>
                            Únete a nuestra plataforma y lleva la gestión de tu negocio al siguiente nivel.
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
                            Crear nueva cuenta
                        </h2>
                        <p style={{ color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }}>
                            Registra los datos de tu empresa
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--welcome-text-primary)', transition: 'color 0.5s ease' }}>
                                Nombre de la Empresa
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Building size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }} />
                                <input type="text" className="input-field" placeholder="Ej. Restaurante La Perla" style={{ paddingLeft: '3rem', background: 'var(--welcome-bg)', color: 'var(--welcome-text-body)', borderColor: 'var(--welcome-card-border)' }} required />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--welcome-text-primary)', transition: 'color 0.5s ease' }}>
                                Correo Electrónico
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }} />
                                <input type="email" className="input-field" placeholder="tu@correo.com" style={{ paddingLeft: '3rem', background: 'var(--welcome-bg)', color: 'var(--welcome-text-body)', borderColor: 'var(--welcome-card-border)' }} required />
                            </div>
                        </div>

                        <div style={{ marginBottom: '0.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--welcome-text-primary)', transition: 'color 0.5s ease' }}>
                                Contraseña
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }} />
                                <input type="password" className="input-field" placeholder="••••••••" style={{ paddingLeft: '3rem', background: 'var(--welcome-bg)', color: 'var(--welcome-text-body)', borderColor: 'var(--welcome-card-border)' }} required />
                            </div>
                        </div>

                        <div className="form-group checkbox-group" style={{ marginBottom: '0.5rem' }}>
                            <label className="checkbox-label" style={{ alignItems: 'flex-start' }}>
                                <input 
                                    type="checkbox" 
                                    required 
                                    checked={acceptedLegal}
                                    onChange={(e) => setAcceptedLegal(e.target.checked)}
                                />
                                <span style={{ fontSize: '0.85rem', lineHeight: '1.4', color: 'var(--welcome-text-body)', transition: 'color 0.5s ease' }}>
                                    He leído y acepto los <button type="button" className="text-link" onClick={() => setIsTermsOpen(true)}>Términos y Condiciones</button> y el <button type="button" className="text-link" onClick={() => setIsPrivacyOpen(true)}>Aviso de Privacidad</button>.
                                </span>
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            className="btn-primary submit-btn" 
                            disabled={!acceptedLegal}
                            style={{ 
                                width: '100%', 
                                justifyContent: 'center', 
                                padding: '1rem', 
                                fontSize: '1.1rem',
                                fontFamily: 'inherit'
                            }}>
                            Registrarse
                        </button>
                    </form>

                    <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.95rem', color: 'var(--welcome-text-muted)', transition: 'color 0.5s ease' }}>
                        ¿Ya tienes una cuenta? 
                        <button 
                            onClick={() => navigate('/login')}
                            style={{ 
                                background: 'none', 
                                border: 'none', 
                                color: 'var(--primary-color)', 
                                fontWeight: 600, 
                                cursor: 'pointer',
                                padding: 0,
                                fontSize: 'inherit',
                                marginLeft: '0.25rem'
                            }}
                        >
                            Inicia Sesión
                        </button>
                    </div>
                </div>
            </div>

            {/* Legal Modals */}
            <LegalModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="Términos y Condiciones">
                <TermsAndConditions />
            </LegalModal>
            <LegalModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Aviso de Privacidad">
                <PrivacyPolicy />
            </LegalModal>
        </div>
    );
};

export default RegisterView;
