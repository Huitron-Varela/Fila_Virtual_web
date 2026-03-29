import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, TrendingUp, AlertCircle, XCircle, Smartphone, Bell, Users, ThumbsUp, Zap, Sun, Moon, ArrowUp, Check } from 'lucide-react';
import { welcomeTranslations as translations } from '../../locales/welcomeTranslations';
import LegalModal from '../../components/Legal/LegalModal';
import { TermsAndConditions, PrivacyPolicy } from '../../components/Legal/legalTexts';
import './WelcomeView.css';

const WelcomeView: React.FC = () => {
    const navigate = useNavigate();
    const [lang, setLang] = useState<'es' | 'en'>('es');
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('app-theme');
        return saved === 'dark';
    });
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [acceptedLegal, setAcceptedLegal] = useState(false);

    useEffect(() => {
        localStorage.setItem('app-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
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
    const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

    const t = translations[lang];

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
                    <a href="#problemas">{t.nav.problems}</a>
                    <a href="#soluciones">{t.nav.solutions}</a>
                    <a href="#beneficios">{t.nav.benefits}</a>
                    <a href="#contacto">{t.nav.contact}</a>
                </div>

                <div className="nav-actions">
                    <button 
                        className="lang-toggle" 
                        onClick={toggleLang}
                        title={`Cambiar a ${t.nav.language}`}
                        aria-label="Toggle language"
                    >
                        <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>
                            {t.nav.langCode === 'en' ? '🇺🇸' : '🇲🇽'}
                        </span>
                        <span>{t.nav.language}</span>
                    </button>
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
                        <span>{t.nav.login}</span>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="hero-section">
                {/* Left Content */}
                <div className="animate-slide-up">
                    <div className="hero-pill">
                        <span className="hero-pill-dot"></span>
                        {t.hero.pill}
                    </div>
                    
                    <h1 className="hero-title">
                        {t.hero.title.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h1>
                    
                    <p className="hero-subtitle">
                        {t.hero.subtitle}
                    </p>

                    <div className="hero-actions">
                        <button 
                            className="btn-primary"
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        >
                            {t.hero.btnRegister}
                        </button>
                        <button 
                            className="btn-outline"
                            onClick={() => window.document.getElementById('problemas')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t.hero.btnInfo}
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
                            <h4>AlToque</h4>
                            <p>Gestión verificada</p>
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
                            <h2 className="section-title">{t.problem.title}</h2>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon danger-icon"><AlertCircle size={24} /></div>
                                <h3>{t.problem.p1Title}</h3>
                                <p>{t.problem.p1Desc}</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon danger-icon"><AlertCircle size={24} /></div>
                                <h3>{t.problem.p2Title}</h3>
                                <p>{t.problem.p2Desc}</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon danger-icon"><XCircle size={24} /></div>
                                <h3>{t.problem.p3Title}</h3>
                                <p>{t.problem.p3Desc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Soluciones */}
                <section id="soluciones" className="info-section alternate-bg animate-on-scroll">
                    <div className="section-content">
                        <div className="section-header">
                            <h2 className="section-title">{t.solution.title}</h2>
                            <p className="section-subtitle">{t.solution.subtitle}</p>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon success-icon"><Smartphone size={24} /></div>
                                <h3>{t.solution.s1Title}</h3>
                                <p>{t.solution.s1Desc}</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon success-icon"><Bell size={24} /></div>
                                <h3>{t.solution.s2Title}</h3>
                                <p>{t.solution.s2Desc}</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon success-icon"><Users size={24} /></div>
                                <h3>{t.solution.s3Title}</h3>
                                <p>{t.solution.s3Desc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Beneficios */}
                <section id="beneficios" className="info-section animate-on-scroll">
                    <div className="section-content">
                        <div className="section-header">
                            <h2 className="section-title">{t.benefits.title}</h2>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon"><TrendingUp size={24} className="contact-icon" style={{margin:0}} /></div>
                                <h3>{t.benefits.b1Title}</h3>
                                <p>{t.benefits.b1Desc}</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon"><ThumbsUp size={24} className="contact-icon" style={{margin:0}} /></div>
                                <h3>{t.benefits.b2Title}</h3>
                                <p>{t.benefits.b2Desc}</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon"><Zap size={24} className="contact-icon" style={{margin:0}} /></div>
                                <h3>{t.benefits.b3Title}</h3>
                                <p>{t.benefits.b3Desc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Contacto / Formulario */}
                <section id="contacto" className="info-section alternate-bg animate-on-scroll">
                    <div className="section-content">
                        <div className="contact-form-container">
                            <div className="contact-form-card">
                                <h3>
                                    {t.contact.title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </h3>
                                <p>{t.contact.subtitle}</p>
                                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label>{t.contact.formName}</label>
                                        <input type="text" placeholder={t.contact.formName} required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t.contact.formBusiness}</label>
                                        <input type="text" placeholder={t.contact.formBusiness} required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t.contact.formPhone}</label>
                                        <input type="tel" placeholder={t.contact.formPhone} required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t.contact.formEmail}</label>
                                        <input type="email" placeholder={t.contact.formEmail} required />
                                    </div>
                                    <div className="form-group checkbox-group">
                                        <label className="checkbox-label">
                                            <input 
                                                type="checkbox" 
                                                required 
                                                checked={acceptedLegal}
                                                onChange={(e) => setAcceptedLegal(e.target.checked)}
                                            />
                                            <span>
                                                {t.contact.legalPrefix}
                                                <button type="button" className="text-link" onClick={() => setIsTermsOpen(true)}>{t.contact.legalTerms}</button>
                                                {t.contact.legalAnd}
                                                <button type="button" className="text-link" onClick={() => setIsPrivacyOpen(true)}>{t.contact.legalPrivacy}</button>
                                                {t.contact.legalSuffix}
                                            </span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn-primary submit-btn" disabled={!acceptedLegal}>
                                        {t.contact.formSubmit}
                                    </button>
                                </form>
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
                        <a href="#problemas">{t.nav.problems}</a>
                        <a href="#soluciones">{t.nav.solutions}</a>
                        <a href="#beneficios">{t.nav.benefits}</a>
                        <a href="#contacto">{t.nav.contact}</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} AlToque. {t.footer.rights}</p>
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

            {/* Legal Modals */}
            <LegalModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title={t.contact.legalTerms}>
                <TermsAndConditions />
            </LegalModal>
            <LegalModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title={t.contact.legalPrivacy}>
                <PrivacyPolicy />
            </LegalModal>
        </div>
    );
};

export default WelcomeView;
