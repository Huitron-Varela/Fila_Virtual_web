import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import './WelcomeView.css';

const WelcomeView: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-page">
            {/* Navbar */}
            <nav className="welcome-navbar">
                <div className="welcome-logo">
                    Antigravity<span>.</span>
                </div>
                
                <div className="welcome-nav-links">
                    <a href="#problema">Problema</a>
                    <a href="#solucion">Solución</a>
                    <a href="#beneficios">Beneficios</a>
                    <a href="#inversion">Inversión</a>
                </div>

                <button 
                    className="btn-primary" 
                    onClick={() => navigate('/login')}
                    style={{ padding: '0.6rem 1.5rem', borderRadius: '20px' }}
                >
                    Iniciar Sesión
                </button>
            </nav>

            {/* Hero Section */}
            <main className="hero-section">
                {/* Left Content */}
                <div className="animate-slide-up">
                    <div className="hero-pill">
                        <span className="hero-pill-dot"></span>
                        Revolucionando la gestión en México
                    </div>
                    
                    <h1 className="hero-title">
                        Control total<br />
                        bajo demanda<br />
                        para tu negocio.
                    </h1>
                    
                    <p className="hero-subtitle">
                        La plataforma que transforma la administración informal en un entorno predecible, seguro y garantizado para tu restaurante.
                    </p>

                    <div className="hero-actions">
                        <button 
                            className="btn-primary"
                            onClick={() => navigate('/login')}
                        >
                            Únete ahora
                        </button>
                        <button 
                            className="btn-outline"
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        >
                            Conoce más
                        </button>
                    </div>
                </div>

                {/* Right Content / Image */}
                <div className="hero-image-container animate-fade-in delay-200">
                    <img 
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
                        alt="Restaurante administrado" 
                        className="hero-image"
                    />
                    
                    <div className="hero-floating-card animate-slide-up delay-300">
                        <div className="verification-icon">
                            <Check size={20} strokeWidth={3} />
                        </div>
                        <div>
                            <h4>Gestión Verificada</h4>
                            <p>Datos e inventarios validados en tiempo real</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WelcomeView;
