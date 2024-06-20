import React, { useRef, useState, useEffect } from 'react';

// ===== STYLES ====

import './style.css';
import './buttons_style.css';
import './mobile_globe/glob_mob.css';


// ===============================

import ListView from './List/ListView.js';
import TestnetListView from './List/TestnetListView.js';
import AllListView from './List/AllListView.js';
import CardsView from './Cards/CardsView.js';
import TestnetCardsView from './Cards/TestnetCardsView.js';
import MainnetCardsView from './Cards/MainnetCardsView.js';
import GlobeView from './Globe.js';

// ===== Mobile import =======

import GlobeView_mob from './mobile_globe/Globe_mob.js';


// =================================

function MoonGlobe() {
  const globeElement = useRef(null);
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("globe");
  const [data, setData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dataInfo, priceValue] = await Promise.all([
          fetch('/json/data_note.json').then(response => response.json()),
          fetch('/json/price_value.json').then(response => response.json()),
        ]);

        const updatedData = dataInfo.map(infoItem => {
          const priceItem = priceValue.find(priceItem => priceItem.name_ch === infoItem.name_ch);
          return {
            ...infoItem,
            data: priceItem
          };
        });

        setData(updatedData);
        setPriceData(priceValue);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 600000);

    return () => clearInterval(intervalId);

  }, []);

  const goToHomePage = () => {
    window.location.href = "https://stake-take.com/";
  }; 
  
  const activeData = data.filter(item => {
    if (filter === "All") return true;
    return item.agency === filter;
  });

  return (
    <div className="moon-globe-container">
      <div className="buttons-container">
        <div className="filter-buttons">
          <button className={`button_filter ${filter === "Testnet" ? 'button-active' : ''}`} onClick={() => setFilter("Testnet")}>Testnet</button>
          <button className={`button_filter ${filter === "Mainnet" ? 'button-active' : ''}`} onClick={() => setFilter("Mainnet")}>Mainnet</button>
          <button className={`button_filter ${filter === "All" ? 'button-active' : ''}`} onClick={() => setFilter("All")}>All</button>
        </div>
        <div className='Home_button'>
          <button className="home-button" onClick={goToHomePage}><img className='home_logo' src="/img/logo/home.svg" width="30" height="30" /></button>
        </div>
        <div className="view-buttons">
          <button className="view" onClick={() => setView("list")}><img className='view_logo' src="/img/logo/list.svg" width="30" height="30" /></button>
          <button className="view" onClick={() => setView("globe")}><img className='view_logo' src="/img/logo/planet.svg" width="30" height="30" /></button>
          <button className="view" onClick={() => setView("cards")}><img className='view_logo' src="/img/logo/cards.svg" width="30" height="30" /></button>
        </div>
      </div>
      
      {view === "globe" && (
      <>  <GlobeView activeData={filter === "All" ? activeData.filter(item => item.forAll !== null && item.name_ch) : activeData} priceData={priceData} /> 
        <GlobeView_mob activeData={filter === "All" ? activeData.filter(item => item.forAll !== null && item.name_ch) : activeData} priceData={priceData} />
        </>
      )}

      {view === "list" && (
        <>
          {filter === "All" && <AllListView data={activeData.filter(item => item.forAll === "All" && item.name_ch)} />}


          {filter === "Testnet" && <TestnetListView data={activeData} />}
          
          {filter !== "Testnet" && filter !== "All" && <ListView data={activeData} />}
        </>
      )}

      {view === "cards" && (
        <>
          {filter === "All" && <CardsView data={activeData.filter(item => item.forAll === "All" && item.name_ch)} />}
          {filter === "Testnet" && <TestnetCardsView data={activeData.filter(item => item.agency === "Testnet")} />}
          {filter !== "Testnet" && filter !== "All" && <MainnetCardsView data={activeData.filter(item => item.agency === "Mainnet")} />}
        </>
      )}
    </div>
  );
}

export default MoonGlobe;
