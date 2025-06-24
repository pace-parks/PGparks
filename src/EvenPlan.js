import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EventPlan = ()=>{
     const navigate = useNavigate();
     const { state } = useLocation();
     console.log(state)
    return (
    <>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <div className='event-image' style={{ flex: '0 0 60%', maxWidth: '60%', marginTop: '15px'}}>
            <img  src="/image/eventPlanning.jpeg" alt="event" className='event-img' style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
          <div className='event-content' style={{ flex: '0 0 40%', maxWidth: '30%' }}>
            <h3> <hr/>PRA Reservation</h3> <hr/>
            <div style={{textAlign: 'justify'}}/>
            <p>To successfully plan your event, start by establishing clear goals and objectives, defining its purpose and target audience to guide the planning process and set success metrics.
            Please click below to fill out the form and secure your reservation.
            </p>
            <button onClick={() => navigate('/reservation/form')} style={{ cursor: 'pointer', padding: '10px 20px', marginTop: '20px', marginBottom: '20px' }}>Reservation Form</button>
          </div>
        </div>
         {
            state && (
                <h3 style={{textAlign: 'center', color: 'lightgreen'}}> Thank you for submitting reservation form!</h3>
            )
          }  
    </>   
    )
}

export default EventPlan;