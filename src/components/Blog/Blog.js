import React, { useState, useEffect } from 'react';
import './blog.css';
import Data from './Data.js';

function App() {
    const [filter, setFilter] = useState('all');
    const [cards, setCards] = useState(Data);

    const filterCards = (category) => {
        if (category === 'all') {
            setCards(Data);
        } else {
            setCards(Data.filter((card) => card.category === category));
        }
    };

    useEffect(() => {
        filterCards('all');
    }, []);

    return (
        <div className="blog-section">
            <div className="App">
                <section className="home" id="home">
                    <div className="home-text container">
                        <h2 className="home-title">Trend Blogger</h2>
                        <span className="home-subtitle">Your source of great content</span>
                    </div>
                </section>

                <div className="post-filter container">
                    {['all', 'tech', 'food', 'news'].map((item, index) => (
                        <span
                            key={index}
                            className={`filter-item ${filter === item ? 'active-filter' : ''}`}
                            data-filter={item}
                            onClick={() => {
                                setFilter(item);
                                filterCards(item);
                            }}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </span>
                    ))}
                </div>

                <div className="post container">
                    {cards.map((card, index) => (
                        <div key={index} className={`post-box ${card.category}`}>
                            <img src={card.image} alt="" className="post-img" />
                            <h2 className="category">{card.category}</h2>
                            <a href={card.href} className="post-title">
                                {card.title}
                            </a>
                            <span className="post-date">{card.date}</span>
                            <p className="post-description">{card.description}</p>
                            <div className="profile">
                                <img src={card.profileImage} alt="" className="profile-img" />
                                <span className="profile-name">{card.profileName}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
