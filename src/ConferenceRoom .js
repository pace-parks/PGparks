import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import './ConferenceRoom.css';
import { initialBookings } from './bookingsStore';

// Mapping of Room Types to Color
const roomColors = {
  "Conference 2B (19)": 'bg-warning',
  "200 Conference Suite (13)": 'bg-info',
  "Sp. Prog Fingerprint (2)": 'bg-primary',
  "Suite 200 Training (23)": 'bg-success',
};


const ConferenceRoom = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  
  // State to hold all room bookings
  const [bookings, setBookings] = useState(initialBookings);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [bookingDetails, setBookingDetails] = useState({
    title: '',
    startTime: '',
    endTime: '',
    name: '',
    email: '',
    roomType: 'Conference 2B (19)',
  });

  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [hoveredBooking, setHoveredBooking] = useState(null)

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth).getDay();
    const weeks = [];

    let days = Array(firstDay).fill(null); 
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
      if (days.length === 7) {
        weeks.push(days);
        days = [];
      }
    }
    if (days.length > 0) {
      weeks.push(days);
    }

    return weeks;
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
    }
  };

  const handleBookingClick = (e, booking)=>{
    const bookingDate = new Date(booking.date); 
    setSelectedDate(bookingDate);  
    if(hoveredBooking){
      setSelectedBooking(hoveredBooking)
      setBookingDetails({
        title: hoveredBooking.title,
        startTime: hoveredBooking.startTime,
        endTime: hoveredBooking.endTime,
        name: hoveredBooking.name,
        email: hoveredBooking.email,
        roomType: hoveredBooking.roomType,
      })
    } else{
      setSelectedBooking(null);
      setBookingDetails({
        title: '',
        startTime: '',
        endTime: '',
        name: '',
        email: '',
        roomType: 'Conference 2B (19)',
      });
    }
    setShowModal(true);
    }


  // Handle opening the modal to book a room or edit an exsting booking
  const handleDateClick = (day) => {
    const selectedFullDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(selectedFullDate);
    //check if there is an existing booking for the data
    const existingBooking = bookings.find((booking) => booking.date.toDateString() === selectedFullDate.toDateString());
    if(existingBooking && hoveredBooking){
      // set for editing
      setSelectedBooking(existingBooking);
      setBookingDetails(existingBooking)
    } else{
      //initialize an empty booking form
      setSelectedBooking(null);
      setBookingDetails({
        title: '',
        startTime: '',
        endTime: '',
        name: '',
        roomType: 'Conference 2B (19)'
      })
    }
    setShowModal(true);
  };

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  // Handle form submit to book or update a room
  const handleFormSubmit = (e) => {
    e.preventDefault();

    //validate all fields are filled
    if(!bookingDetails.title || !bookingDetails.startTime || !bookingDetails.endTime || !bookingDetails.name || !bookingDetails.email || !bookingDetails.roomType ){
      alert("Please fill out all fields.")
      return;
    }
    // validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(bookingDetails.email)) {
    alert("Please enter a valid email address.");
    return;
  }
  //validate time
  const startTime = new Date(`1970-01-01T${bookingDetails.startTime}:00`);
  const endTime = new Date(`1970-01-01T${bookingDetails.endTime}:00`);
  if (startTime >= endTime) {
    alert("End time must be after start time.");
    return;
  }
  //check for overlapping bookings for same room & date
  const isRoomAvailable = !bookings.some((existingBooking)=> {
    return existingBooking.date.toDateString() === selectedDate.toDateString() && existingBooking.roomType === bookingDetails.roomType && existingBooking.date !== selectedBooking?.date &&
    (
      (startTime < new Date(`1970-01-01T${existingBooking.endTime}:00`) && endTime > new Date(`1970-01-01T${existingBooking.startTime}:00`))
    );
  });
  if(!isRoomAvailable){
    alert("The room is already booked for the selected timeslot. Please choose a different time.");
    return;
  }

    const newBooking = {
      date: selectedDate,
      title: bookingDetails.title,
      startTime: bookingDetails.startTime,
      endTime: bookingDetails.endTime,
      name: bookingDetails.name,
      email: bookingDetails.email,
      roomType: bookingDetails.roomType,
    };

    if(selectedBooking){
      // update the existing booking
      setBookings((prevBookings) => 
        prevBookings.map((booking) =>
        booking.date.toDateString() === selectedBooking.date.toDateString() && booking.roomType ===selectedBooking.roomType ? newBooking : booking ))
    } else {
      //create new booking
      setBookings((prevBookings) => [...prevBookings, newBooking]);
    }
    
    setShowModal(false);
    setBookingDetails({
      title: '',
      startTime: '',
      endTime: '',
      name: '',
      email: '',
      roomType: '',
    });
    setSelectedBooking(null)
  };

  // Convert 24-hour time format to 12-hour with AM/PM
  const formatTime = (time) => {
    const date = new Date(`1970-01-01T${time}:00`);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Render bookings for a specific day
  const renderBookings = (date) => {
    return bookings
    .filter((booking) => booking.date.toDateString() === new Date(currentYear, currentMonth, date).toDateString() && (selectedRoomType ? booking.roomType === selectedRoomType : true))
      .map((booking, index) => (
        <div
          key={index}
          className={`p-2 text-white ${roomColors[booking.roomType]} booking-card`}
          style={{ marginTop: '10px' }}
          onMouseEnter={()=> setHoveredBooking(booking)}// track hover
          onMouseLeave={()=> setHoveredBooking(null)}
          onClick={(e)=> handleBookingClick(e, booking)} // handle click on hover state
        >
          {/* Display Time and Title in 2 lines with smaller font */}
          <div className="booking-header">
            <strong>{booking.title}</strong>
            <br />
            <span>{formatTime(booking.startTime)} - {formatTime(booking.endTime)}</span>
          </div>
  
          {/* Details will be shown on hover */}
          <div className="booking-details">
            <strong>By: {booking.name} </strong>
            <p>{booking.email}</p>
          </div>
        </div>
      ));
  };
  

  // Handle clicking on a room type to filter bookings
  const handleRoomTypeClick = (roomType) => {
    if (selectedRoomType === roomType) {
      setSelectedRoomType(null); // Deselect if the same room type is clicked again
    } else {
      setSelectedRoomType(roomType);
    }
  };

  const handleDeleteBooking = ()=> {
    const isConfirmed = window.confirm(`Are you sure you want to delete the booking for ${selectedBooking.title} on ${selectedBooking.date.toDateString()}?`);
    if(isConfirmed){
      setBookings((prevBookings)=>
        prevBookings.filter((booking)=> !(booking.date === selectedBooking.date && booking.roomType === selectedBooking.roomType))
      );
      //close the modal & reset the selected booking
      setShowModal(false);
      setSelectedBooking(null);
      setBookingDetails({
        title: '',
        startTime: '',
        endTime: '',
        name: '',
        email: '',
        roomType: '',
      })
    }
  }

  const weeks = generateCalendar();
  
  return (
    <Container>
      <Row>
        <h3 className="my-4"><i className="bi bi-calendar4-event"></i> CONFERENCE ROOM BOOKING SYSTEM <i className="bi bi-calendar4-event"></i> </h3> <hr/>
      </Row>
      <Row className='calendar-container'>
      <Col md={3}>
          <h4><i className="bi bi-calendar3-range-fill"></i> CONFERENCE ROOMS <i className="bi bi-calendar3-range-fill"></i></h4>
          {/* Room types are clickable with color labels */}
          {Object.keys(roomColors).map((roomType) => (
            <div
              key={roomType}
              className={`p-2 mb-2 cursor-pointer ${selectedRoomType === roomType ? 'border border-black' : ''} ${roomColors[roomType]}`}
              style={{ color: 'white',  marginRight: '35px', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer', }}
              onClick={() => handleRoomTypeClick(roomType)}
            >
              {roomType}
            </div>
          ))}
        </Col>
        <Col md={9}> 
        <Row className='d-flex justify-content-between align-items-center'>
            <Col className="text-center" style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
              <i className="bi bi-caret-left" onClick={handlePrevMonth} style={{ cursor: 'pointer', fontSize: '30px', marginRight: '10px' }} ></i>
            <h4>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</h4>
               <i className="bi bi-caret-right" onClick={handleNextMonth} style={{ cursor: 'pointer', fontSize: '30px', marginRight: '10px' }} ></i>
            </Col>
            </Row>
          {/* Weekdays headers */}
          <Row className="d-flex justify-content-between" style={{fontSize: '1.2rem'}}>
            <Col className="text-center">Sun</Col>
            <Col className="text-center">Mon</Col>
            <Col className="text-center">Tue</Col>
            <Col className="text-center">Wed</Col>
            <Col className="text-center">Thu</Col>
            <Col className="text-center">Fri</Col>
            <Col className="text-center">Sat</Col>
          </Row>

           {weeks.map((week, i) => (
            <Row key={i} className="d-flex justify-content-between">
              {week.map((day, index) => {
                const isPast = day && day < currentDate.getDate() && currentMonth === currentDate.getMonth();
                const isToday = day === currentDate.getDate() && currentMonth === currentDate.getMonth();
                const isCurrentMonth = currentMonth === new Date().getMonth();
                const isEmptyDay = day === null;
                return (
                  <Col
                    key={index}
                    className={`p-2 ${isPast ? 'past-date' : ''} ${isToday ? 'today' : ''} ${isCurrentMonth ? 'current-month' : ''} ${isEmptyDay ? 'empty-day' : ''}`}
                    style={{
                      minHeight: '100px',
                      border: '1px solid #ccc',
                      position: 'relative',
                      cursor: isEmptyDay ? 'not-allowed' : isPast ? 'not-allowed' : 'pointer',
                      backgroundColor: isToday ? '#f3dfae' : 'transparent', 
                      fontWeight: isToday ? 'bold' : 'normal',
                      fontSize: isToday ? '18px' : '14px'
                    }}
                    onClick={() => !isPast && handleDateClick(day)} // Disable past date click
                  >
                    {day ? (
                      <>
                        <div className={`date ${isToday ? 'text-dark font-weight-bold' : ''}`}>
                          {day}
                        </div>
                        {renderBookings(day)}
                      </>
                    ) : null}
                  </Col>
                );
              })}
            </Row>
          ))}
        </Col>
      </Row>

      {/* Modal to Book Room  or Edit Room*/}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title> {selectedBooking ? `Edit Booking for ${selectedDate?.toDateString()}` :  `Book Room for ${selectedDate?.toDateString()}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBookingTitle">
              <Form.Label>Booking Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={bookingDetails.title}
                onChange={handleInputChange}
                placeholder="Enter booking title"
              />
            </Form.Group>

            <Form.Group controlId="formBookingStartTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                name="startTime"
                value={bookingDetails.startTime}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBookingEndTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                name="endTime"
                value={bookingDetails.endTime}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBookingName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={bookingDetails.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="formBookingEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={bookingDetails.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
              />
            </Form.Group>

            <Form.Group controlId="formRoomType">
              <Form.Label>Room Type</Form.Label>
              <Form.Control
                as="select"
                name="roomType"
                value={bookingDetails.roomType}
                onChange={handleInputChange}
              >
                <option value="Conference 2B (19)">Conference 2B (19)</option>
                <option value="200 Conference Suite (13)">200 Conference Suite (13)</option>
                <option value="Sp. Prog Fingerprint (2)">Sp. Prog Fingerprint (2)</option>
                <option value="Suite 200 Training (23)">Suite 200 Training (23)</option>
              </Form.Control>
            </Form.Group> <br/>

            <Button variant="primary" type="submit"> {selectedBooking ? 'Update Booking' : 'Book Room' }</Button>
            {
              selectedBooking && (
                <Button variant='danger' onClick={handleDeleteBooking} style={{marginLeft: '11rem'}}> Delete Booking</Button>
              )
            }
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ConferenceRoom;
