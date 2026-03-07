import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const mockMenu = [
    { id: 1, name: 'Hamburguesa Suprema', category: 'Comida', price: 12.50, desc: 'Doble carne, queso cheddar, tocino y salsa BBQ.', img: '🍔' },
    { id: 2, name: 'Pizzeta Margarita', category: 'Comida', price: 9.00, desc: 'Salsa de tomate macedonia, mozzarella fresca y albahaca.', img: '🍕' },
    { id: 3, name: 'Papas Gajo', category: 'Botana', price: 4.50, desc: 'Papas sazonadas con paprika y parmesano.', img: '🍟' },
    { id: 4, name: 'Limonada Mineral', category: 'Bebidas', price: 3.00, desc: 'Limonada fresca con agua mineral y menta.', img: '🍋' },
];

const MenuView: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Todas');
    const categories = ['Todas', 'Comida', 'Botana', 'Bebidas'];

    const filteredMenu = activeCategory === 'Todas'
        ? mockMenu
        : mockMenu.filter(item => item.category === activeCategory);

    return (
        <div className="view-container fade-in">
            <div className="view-header">
                <div>
                    <h1>Gestión de Menú</h1>
                    <p className="subtitle">Administra los platillos, bebidas y botanas</p>
                </div>
                <button className="btn-primary">
                    <Plus size={20} /> Nuevo Platillo
                </button>
            </div>

            <div className="card" style={{ marginBottom: '2rem', padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`btn-outline ${activeCategory === cat ? 'active' : ''}`}
                            style={activeCategory === cat ? { backgroundColor: 'var(--primary-color)', color: 'white', borderColor: 'var(--primary-color)' } : {}}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="employee-grid">
                {filteredMenu.map(item => (
                    <div key={item.id} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div style={{ fontSize: '3rem' }}>{item.img}</div>
                            <div style={{ background: 'rgba(255,87,51,0.1)', color: 'var(--primary-color)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: 'bold' }}>
                                ${item.price.toFixed(2)}
                            </div>
                        </div>
                        <h3 style={{ marginBottom: '0.5rem' }}>{item.name}</h3>
                        <span className="text-muted" style={{ display: 'inline-block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {item.category}
                        </span>
                        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                            {item.desc}
                        </p>

                        <div className="card-actions" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
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

export default MenuView;
