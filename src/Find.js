import React from 'react';

const Find = () => {
    return (
        <div className='container-fluid mt-4'>
            <div className='row'>
                {/* First column */}
                <div className='col-md-4' style={{backgroundColor:'#f0f8ec', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '20px', marginBottom: '10px'}}> 
                    <h3 style={{textAlign: 'center'}}> FIND A <i className="bi bi-arrow-down"></i></h3>
                    <hr />
                    <div className='row'>
                        {/* First Sub-Column */}
                        <a href="#" className="col-6 col-md-3 mb-4">
                            <div>
                                <i className="bi bi-tree" style={{ fontSize: '60px', color: 'green' }}></i>
                                <p>Park</p>
                            </div>
                        </a>
                        {/* 2nd Sub-Column */}
                        <a href="#" className="col-6 col-md-3 mb-4">
                            <div>
                                <i className="bi bi-person-walking" style={{ fontSize: '60px', color:'green' }}></i>
                                <p>Trail</p>
                            </div>
                        </a>
                        
                        <a href="#" className="col-6 col-md-3 mb-4">
                            <div>
                                <i className="bi bi-book" style={{ fontSize: '60px', color: 'green'}}></i>
                                <p>Class & Activity</p>
                            </div>
                        </a>

                        <a href="#" className="col-6 col-md-3 mb-4">
                            <div>
                                <i className="bi bi-house-door" style={{ fontSize: '60px', color: 'green' }}></i>
                                <p>Facility</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* 2nd column */}
                <div className='col-md-4' style={{backgroundColor: '#e8f4f8', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '20px', marginBottom: '10px'}}>
                    <h3 style={{textAlign: 'center'}}> Upcoming Events <i className="bi bi-calendar-event"></i></h3> <hr />
                    <h5>Today's Event</h5>
                    <div className='event-item'>
                        <p> Eating for Health Nutrition Workshop</p>
                    </div>
                    <button className='btn btn-primary'>View All Events</button>
                </div>
                {/* 3rd column */}
                <div className='col-md-4' style={{backgroundColor: '#F2F2F2', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '20px', marginBottom: '10px'}}>
                    <h3 style={{textAlign: 'center'}}> Latest News <i className="bi bi-newspaper"></i></h3> <hr />
                    <div className="news-item">
                        <p><strong>Renovation of PG's Stadium</strong></p>
                        <p>The M-NCPPC, in partnership with Maryland Staduim Authority...</p>
                    </div>
                    <button className='btn btn-primary'>View All News </button>
                </div>
            </div>
        </div>
    )
}

export default Find;