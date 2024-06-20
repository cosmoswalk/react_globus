import React, { useState } from 'react';
import './ListView.css';

function AllListView({ data }) {


  const [showTooltip, setShowTooltip] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(null);

  const filteredData = data.filter(item => item.forAll === 'All');
  const [currentItems, setCurrentItems] = useState(filteredData);

  const handleDescriptionClick = (description) => {
    setShowFullDescription(description);
  };

  return (
    <section>
     
    <div className="tbl-header">
      <table cellPadding="0" cellSpacing="0" border="0">
        <thead>
          <tr>
            <th>Company</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
      </table>

    </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0"> 
        <tbody>
        {currentItems.map((item, index) => (
             <tr key={item.name_ch} onClick={() => window.open(item.url, '_blank')} className='tr'>
                <td>
                <a href={item.url} target='blank' onClick={(e) => e.stopPropagation()}>
    <img  className="logo_list" src={item.logo} alt="logo" />
</a>

<span style={{fontSize: '17px', position: 'fixed', marginTop: '6px'}}>{item.name_ch}</span>

                  </td>
              <td>{item.agency}</td>

              <td  onClick={(e) => {
          e.stopPropagation();
          handleDescriptionClick(item.description);
        }}>
  {item.description.length > 250 ? (
    <span>
      {item.description.substring(0, 250)}...
      <span
        className="show-more"
        onClick={(e) => {
          e.stopPropagation();
          handleDescriptionClick(item.description);
        }}
      >
        [...]
      </span>
    </span>
  ) : (
    item.description
  )}
</td>
            </tr>
          ))}
        </tbody>
      </table>
  
    </div>
    {showFullDescription && (
                <div className="full-description-modal" onClick={() => setShowFullDescription(null)}>
                    <div className="full-description-content">
                        <span className="close" onClick={() => setShowFullDescription(null)}>&times;</span>
                        {showFullDescription}
                    </div>
                </div>
            )}
    </section>
  );
}

export default AllListView;
