import React, { useState, useEffect } from 'react';
import './Cards.css';
import SideBar from './ContactData.js';

function CardsView({ data }) {

    const [isInputFocused, setInputFocused] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [showFullDescription, setShowFullDescription] = useState(null);

    const handleDescriptionClick = (description) => {
      setShowFullDescription(description);
    };
    useEffect(() => {
        setFilteredData(
            data.filter(item =>
                item.name_ch.toLowerCase().includes(searchText.toLowerCase()) && item.forAll === 'All'
            )
        );
    }, [searchText, data]);

    return (
        <div className="container">
            <SideBar />
            <input
                className="search-bar"
                type="text"
                placeholder={isInputFocused ? '' : 'Search by name...'}
                value={searchText}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                onChange={e => setSearchText(e.target.value)}
            />

            <div className="container">
                {filteredData.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="face face1">
                            <div className="content">
                                <a href={item.url} target='_blank' rel='noopener noreferrer'>
                                    <img src={item.logo} alt={item.agency} />
                                </a>

                                <h3>{item.name_ch}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p  onClick={() => handleDescriptionClick(item.description)}>{item.description.length > 190
                                    ? (
                                        <span>
                                            {item.description.substring(0, 190)}...
                                            <span
                                                className="show-more"
                                                onClick={() => handleDescriptionClick(item.description)}
                                            >
                                                [...]
                                            </span>
                                        </span>
                                    )
                                    : item.description
                                }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showFullDescription && (
                <div className="full-description-modal" onClick={() => setShowFullDescription(null)}>
                    <div className="full-description-content">
                        <span className="close" onClick={() => setShowFullDescription(null)}>&times;</span>
                        {showFullDescription}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardsView;
