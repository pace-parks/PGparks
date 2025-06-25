import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReservationForm.css';

import { DateFormat } from './DateFormat';

const ReservationForm = () => {
    const navigate = useNavigate()
    const today = new Date()
    const todayDate = DateFormat(today);

    const [formData, setFormData] = useState({
        dateOfRequest: todayDate,
        reservationType: 'new',
        eventName: '',
        customerName: '',
        phone: '',
        email: '',
        location: '',
        eventDate: '',
        attendees: '',
        startTime: '',
        endTime: '',
        classroomStyle: false,
        lectureStyle: false,
        horseshoeStyle: false,
        squareStyle: false,
        departmentHead: false,
        fullCommission: false,
        planningBoardHearing: false,
        planningBoardMeeting: false,
        coffee: false,
        laptop: false,
        portableMicrophone: false,
        monitor: false,
        podium: false,
        projector: false,
        microphoneTable: false,
        numberTableMic: 0,
        wireless: false,
        numberWireless: 0,
        comment: '',
        officeDate: '',
        operator: ''
    })

    const handleChange = (e) => {
       const { name, value, type, checked } = e.target;
       setFormData((prevData)=>({
        ...prevData, [name]: type === 'checkbox' ? checked : value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch('http://localhost:5000/api/reservation', {
        //         method: 'POST',
        //         headers: { "Content-Type": 'application/json' },
        //         body: JSON.stringify({ reservationForm: formData })
        // })
        // .then(res=> res.json())
        // .then(data=> navigate('/reservation', {state: data}))
        navigate('/reservation')
    }

    return (
        <div className='container form-container' style={{backgroundColor: '#d9e7d8'}}>
            <div className='alert alert-info' role='alert'>
                <h3><strong>Important Information</strong></h3>
                <ul>
                    <li><strong>Access to the auditorium is not available before 8:00 a.m.</strong></li>
                    <li style={{ color: '#e16412' }}><strong>* Input boxes for customer information are required fields.</strong></li>
                    <li>Parking spaces in front of the PRA Building are reserved for the general public. Staff and
                        training/meeting attendees visiting the building for more than one-half (1/2) hour are asked to park
                        in the rear parking lot.</li>
                    <li style={{ color: '#e16412' }}><strong>* Host must provide bottled water and refreshments for meeting/reservations.</strong></li>
                </ul>
            </div>
            <h1>Auditorium Reservation Form</h1> <hr />

            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md-6 col-half'>
                        <div className='form-group'>
                            <label>Date of Request</label>
                            <input type='text' className='form-control' id='dateOfRequest' value={formData.dateOfRequest} name='dateOfRequest' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='col-md-6 col-half d-flex align-items-center'>
                        <div className='form-check d-flex'>
                            <input type='radio' className='form-check-input' id='newReservation' name='reservationType' value='new' checked={formData.reservationType === 'new'} onChange={handleChange} />
                            <label className='form-check-label ms-2'>New Reservation</label>
                        </div>
                    </div>
                </div>

                <label className="section-header full-width">Customer Information</label>
                <div className="row">
                    <div className="col-md-6 col-half">
                        <div className="form-group">
                            <label htmlFor="event">Event</label>
                            <input
                                type="text"
                                className="form-control"
                                id="eventName"
                                placeholder="Event Name"
                                name="eventName"
                                value={formData.eventName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerName">Customer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="customerName"
                                placeholder="Customer Name"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-half">
                        <div className="form-group">
                            <label htmlFor="location">Facility/Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                placeholder="Facility or Location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDate">Event Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="eventDate"
                                name="eventDate"
                                value={formData.eventDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="attendees"># Attendees</label>
                            <input
                                type="number"
                                className="form-control"
                                id="attendees"
                                placeholder="Number of Attendees"
                                name="attendees"
                                value={formData.attendees}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="startTime">Time: Start</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="startTime"
                                        name="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="endTime">End</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="endTime"
                                        name="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <label className="section-header full-width">Room Set-Up (check all that apply)</label>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='classroomStyle' value={formData.classroomStyle} />
                            <label className='form-check-label'> Classroom Style-chairs/tables (62 max) </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='lectureStyle' value={formData.lectureStyle} />
                            <label className='form-check-label'> Lecture Style-chairs Only (100 max) </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='horseshoeStyle' value={formData.horseshoeStyle} />
                            <label className='form-check-label'> Horseshoe Style (45 max) </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='squareStyle' value={formData.squareStyle} />
                            <label className='form-check-label'> Square Style (40 max) </label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='departmentHead' value={formData.departmentHead} onChange={handleChange} />
                            <label className='form-check-label'> Department Head Meeting </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='fullCommission' value={formData.fullCommission} onChange={handleChange} />
                            <label className='form-check-label'> Full Commission Meeting </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='planningBoardHearing' value={formData.planningBoardHearing} onChange={handleChange} />
                            <label className='form-check-label'> Planning Board Hearing </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='planningBoardMeeting' value={formData.planningBoardMeeting} onChange={handleChange} />
                            <label className='form-check-label'> Planning Board Meeting </label>
                        </div>
                    </div>
                </div>

                <label className="section-header full-width">Prior Instructions Needed to Operate AV Equipment</label>
                <p className="av-text">Prior instructions needed to operate AV equipment -Contact James Simmons at <strong>(703) 965-6338</strong> or the ITS Help Desk at <strong>ITSHelpDesk@pgparks.com</strong> one week in advance.
                </p>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='coffee' value={formData.coffee} onChange={handleChange} />
                            <label className='form-check-label'> Coffee </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='laptop' value={formData.laptop} onChange={handleChange} />
                            <label className='form-check-label'> Laptop </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='portableMicrophone' value={formData.portableMicrophone} onChange={handleChange} />
                            <label className='form-check-label'> Portable microphone on floor stand </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='monitor' value={formData.monitor} onChange={handleChange} />
                            <label className='form-check-label'> Monitor </label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='podium' value={formData.podium} onChange={handleChange} />
                            <label className='form-check-label'>Podium </label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' name='projector' value={formData.projector} onChange={handleChange} />
                            <label className='form-check-label'> Projector </label>
                        </div>
                        <div className="form-group">
                            <div className='form-check'>
                                <input type='checkbox' className='form-check-input' name='microphoneTable' value={formData.microphoneTable} onChange={handleChange} />
                                <label className='form-check-label'> Microphones at the Commussioners' Table (10 max) </label>
                            </div>
                        </div>
                        <div className="form-group row">
                        <label className='col-sm-4 col-form-label label-indent'> Number Needed: </label>
                            <input type='number'  className="form-control small-input" name='numberTableMic' value={formData.numberTableMic} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <div className='form-check'>
                                <input type='checkbox' className='form-check-input' name='wireless' value={formData.wireless} onChange={handleChange} />
                                <label className='form-check-label'>Wireless Microphones (6 max) </label>
                            </div>
                        </div>
                        <div className="form-group row">
                        <label className='col-sm-4 col-form-label label-indent'> Number Needed: </label>
                            <input type='number'  className="form-control small-input" name='numberWireless' value={formData.numberWireless} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Comment:</label>
                    <textarea className="form-control" id="comment" rows="3" name="comment" value={formData.comment} onChange={handleChange}></textarea>
                </div>

                <div className='office-use-section'>
                    <label className='section-header'>Office Use Only</label>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label> <i className="icon-date">📅</i> Date</label>
                                <input type="date" className="form-control" id="officeDate" name='officeDate' value={formData.officeDate} disabled></input>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label> <i className='icon-operator'>👨‍💻</i> Operator</label>
                                <input type="text" className="form-control" id="officeDate" name='operator' value={formData.operator} disabled></input>
                            </div>
                        </div>
                    </div>
                    <p className="footer-text">Administrative Services 301-699-2580</p>
                </div>
                <button type="submit" className="btn btn-primary btn-submit">Submit Request</button>
                <p className="footer-text">If you need to update or cancel your request, please send an email to PRA-Auditorium@pgparks.com.</p>
            </form>

        </div>
    )
}

export default ReservationForm;