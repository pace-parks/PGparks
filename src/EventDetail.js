import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetails = () => {
  const { state } = useLocation()
  const navigate = useNavigate()


  return (
    <>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div className='event-image' style={{ flex: '0 0 60%', maxWidth: '60%', marginTop: '15px'}}>
          <img src={state.featured_img} alt={state.slug} className='event-img' style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
        <div className='event-content' style={{ flex: '0 0 40%', maxWidth: '30%' }}>
          <h3> <hr/>{state.title.rendered}</h3> <hr/>
          <div dangerouslySetInnerHTML={{ __html: state.content.rendered }} style={{textAlign: 'justify'}}/>
          <p style={{textAlign: 'justify'}}><strong>Date Posted:</strong> {state.absolute_dates.created}</p>
          <p style={{textAlign: 'justify'}}><strong>Date Modified:</strong> {state.modified}</p>
        </div>
      </div>

      <button onClick={() => navigate('/events')} style={{ cursor: 'pointer', padding: '10px 20px', marginTop: '20px', marginBottom: '20px' }}>BACK TO EVENTS</button>
    </>
  );
};

export default EventDetails;
