import React from 'react';
import Globe from 'react-globe.gl';

const GlobeView_mob = ({ activeData, priceData }) => (
<div className='GlobeClass_mob'>
  <Globe 
    globeImageUrl="./map.png"
    bumpImageUrl="./lunar.jpg"
    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    showGraticules={true}
    backgroundColor='black'
    height={1000}
    
    atmosphereColor="gold"
    htmlElementsData={activeData}
    htmlLat={d => d.lat}
    htmlLng={d => d.lng}
    htmlElement={(d) => {
      const wrapper = document.createElement('div');
      const img = document.createElement('img');
      const label = document.createElement('div');
      img.classList.add('logo_bar');
      img.src = d.logo;
      img.style.pointerEvents = 'auto';
      img.style.cursor = 'pointer';
      img.style.width = '30px';
      img.style.height = '30px';
      label.classList.add('info_price');
      img.onclick = () => {
        const url = d.delegate && typeof d.delegate === 'string' && d.delegate.trim() !== '' ? d.delegate : d.url;
        window.open(url, '_blank');
    };
    
      img.onmouseover = () => {
        label.style.display = 'block';
        
        let price = 'N/A';
       
        let priceInfo;
        if (priceData) {
            priceInfo = priceData.find(item => item.name_ch === d.name_ch);
        }
        if (priceInfo && Number.isFinite(parseFloat(priceInfo.price))) {
            price = priceInfo.price;
        }
        
        label.innerHTML = `
              <b>${d.name_ch}</b>
              <div class="data">Price: ${price} $</div>
          `;
        label.classList.add('visible');
        if (!wrapper.contains(label)) {
          wrapper.appendChild(label);
        }

        setTimeout(() => {
          label.classList.remove('visible');
        }, 2000);
      };

      document.addEventListener('click', (event) => {
        if (!label.contains(event.target) && !img.contains(event.target)) {
          label.classList.remove('visible');
        }
      });

      wrapper.appendChild(img);

      return wrapper;
    }}
    htmlTransitionDuration={600}
  />
 </div> 
);
export default GlobeView_mob;
