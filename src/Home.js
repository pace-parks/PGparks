import React from 'react';
import './App.css'; 
import Find from './Find';

const Home = () => {
    return (
        <div className='container-fluid' style={{ padding: '0' }}>
            <div className="event-details" style={{ display: 'flex', alignItems: 'center', gap: '50px', width: '100%' }}>

                <div className='event-content' style={{ flex: '0 0 30%', maxWidth: '20%', marginLeft: '15px' }}>
                    <h3> <hr />OUR MISSION</h3> <hr />
                    <p style={{ textAlign: 'justify' }}>
                        The Mission of the M-NCPPC, Department of Parks & Recreation, in partnership with county residents,
                        is to provide comprehensive programs, facilities, and services that support healthy lifestyles and
                        respond to changing needs within county communities. The Department strives to preserve, enhance, and 
                        protect open spaces to enrich the quality of life for the present and future generations in a safe and secure environment.
                    </p>
                </div>

                <div className="event-image" style={{ flex: '1 1 70%', maxWidth: '100%', marginTop: '15px', marginBottom: '15px' }}>
                    {/* Bootstrap Carousel */}
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" style={{ minHeight: '400px' }}>
                        <div className="carousel-inner" style={{height: '100%'}}>
                            <div className="carousel-item active">
                                <img
                                    src= {`${process.env.PUBLIC_URL}/image/park.PNG`}
                                    alt="park"
                                    className="d-block w-100"
                                    style={{ height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src= {`${process.env.PUBLIC_URL}/image/baltimore.webp`}
                                    alt="park2"
                                    className="d-block w-100"
                                    style={{ height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                                /> 
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/image/picnic.jpg`}
                                    alt="park3"
                                    className="d-block w-100"
                                    style={{ height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/image/train.webp`}
                                    alt="park4"
                                    className="d-block w-100"
                                    style={{ height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                            style={{zIndex: '10' }}
                        >
                            <span className="carousel-control-prev-icon" style={{backgroundColor: 'black'}} aria-hidden="true"></span>
                            <span className="visually-hidden" >Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                            style={{zIndex: '10'}}
                        >
                            <span className="carousel-control-next-icon" style={{backgroundColor: 'black'}} aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
            <Find />
        </div>
    );
};

export default Home;
