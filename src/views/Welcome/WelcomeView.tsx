import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, LogIn, TrendingUp, Shield, Zap, Mail, Phone, Sun, Moon, ArrowUp } from 'lucide-react';
import './WelcomeView.css';

const WelcomeView: React.FC = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = React.useState(() => {
        // Initialize state directly from localStorage if possible
        const saved = localStorage.getItem('app-theme');
        return saved === 'dark';
    });
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        // Save to localStorage whenever theme changes
        localStorage.setItem('app-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.15 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className={`welcome-page ${isDarkMode ? 'dark-theme' : ''}`}>
            <div className="hero-nav-wrapper">
                {/* Navbar */}
                <nav className={`welcome-navbar ${isScrolled ? 'scrolled' : ''}`}>
                    <div className="welcome-logo">
                    <img src="/src/img/logot.png" alt="Logo" className="nav-logo-img" />
                    <span className="welcome-logo-text">AlToque</span>
                </div>
                
                <div className="welcome-nav-links">
                    <a href="#problemas">Problemas</a>
                    <a href="#soluciones">Soluciones</a>
                    <a href="#beneficios">Beneficios</a>
                    <a href="#inversion">Inversión</a>
                    <a href="#contacto">Contáctanos</a>
                </div>

                <div className="nav-actions">
                    <button 
                        className="theme-toggle" 
                        onClick={toggleTheme}
                        aria-label="Alternar tema"
                    >
                        {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
                    </button>
                    <button 
                        className="btn-primary welcome-login-btn" 
                        onClick={() => navigate('/login')}
                    >
                        <LogIn size={20} />
                        <span>Iniciar Sesión</span>
                    </button>
                </div>
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

            {/* Informational Sections */}
            <div className="sections-wrapper">
                {/* Section: Problemas */}
                <section id="problemas" className="info-section animate-on-scroll">
                    <div className="section-content">
                        <div className="section-header">
                            <h2 className="section-title">¿Administración caótica?</h2>
                            <p className="section-subtitle">Los problemas más comunes que enfrentan los restaurantes informales.</p>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon danger-icon"><TrendingUp size={24} /></div>
                                <h3>Falta de control de inventario</h3>
                                <p>Pérdidas no detectadas y sobre-compras debido a la falta de trazabilidad en tiempo real.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon danger-icon"><Check size={24} /></div>
                                <h3>Gestión de turnos desorganizada</h3>
                                <p>Complicaciones para el control de asistencia y asignación de responsabilidades diarias.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon danger-icon"><Shield size={24} /></div>
                                <h3>Información fragmentada</h3>
                                <p>Reportes en papel o Excel que no se actualizan y generan decisiones erróneas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Soluciones */}
                <section id="soluciones" className="info-section alternate-bg animate-on-scroll">
                    <div className="section-content">
                        <div className="section-header">
                            <h2 className="section-title">Nuestra <span>Solución</span></h2>
                            <p className="section-subtitle">AlToque centraliza y digitaliza todas tus operaciones con facilidad.</p>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon success-icon"><Zap size={24} /></div>
                                <h3>Digitalización inmediata</h3>
                                <p>De la libreta a la nube en minutos. Interfaz intuitiva para cualquier tipo de usuario.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon success-icon"><Shield size={24} /></div>
                                <h3>Control de Accesos</h3>
                                <p>Perfiles para Dueño, Gerente y Empleado con permisos y vistas totalmente personalizadas.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon success-icon"><TrendingUp size={24} /></div>
                                <h3>Analítica Integrada</h3>
                                <p>Dashboard en tiempo real con indicadores clave sobre ventas, inventario y rendimiento.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Beneficios e Inversión */}
                <section id="beneficios" className="info-section animate-on-scroll">
                    <div className="section-content">
                        <div className="section-header">
                            <h2 className="section-title">Beneficios e <span>Inversión</span></h2>
                            <p className="section-subtitle">Maximiza tus ganancias reduciendo mermas y tiempo administrativo.</p>
                        </div>
                        <div className="benefits-container">
                            <div className="benefit-item">
                                <h3>+30%</h3>
                                <p>Aumento en eficiencia operativa y reducción de tiempos en cierres de caja.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>-15%</h3>
                                <p>Reducción promediada en mermas por mal uso de inventarios.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>ROI Rápido</h3>
                                <p>El sistema se paga solo en el primer mes gracias al ahorro generado.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Contacto */}
                <section id="contacto" className="info-section alternate-bg animate-on-scroll">
                    <div className="section-content contact-content">
                        <div className="section-header">
                            <h2 className="section-title">Contáctanos</h2>
                            <p className="section-subtitle">¿Listo para transformar tu restaurante? Hablemos hoy mismo.</p>
                        </div>
                        <div className="contact-cards">
                            <div className="contact-card">
                                <Mail size={32} className="contact-icon" />
                                <h3>Correo Electrónico</h3>
                                <p>contacto@altoque.com</p>
                            </div>
                            <div className="contact-card">
                                <Phone size={32} className="contact-icon" />
                                <h3>Llámanos</h3>
                                <p>+52 (55) 1234 5678</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="welcome-footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/src/img/logot.png" alt="Logo" className="nav-logo-img" />
                        <span className="welcome-logo-text">AlToque</span>
                    </div>
                    <div className="footer-links">
                        <a href="#problemas">Problemas</a>
                        <a href="#soluciones">Soluciones</a>
                        <a href="#beneficios">Beneficios</a>
                        <a href="#contacto">Contacto</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} AlToque. Todos los derechos reservados.</p>
                </div>
            </footer>

            {/* Floating Back to Top Button */}
            <button 
                className={`back-to-top-btn ${isScrolled ? 'visible' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Volver arriba"
            >
                <ArrowUp size={24} />
            </button>
        </div>
    );
};

export default WelcomeView;
