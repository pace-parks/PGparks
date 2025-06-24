import React, {useState} from 'react';
import { Table } from 'react-bootstrap';


const RoomBookingGrid = ({onSlotClick}) =>{
    const rooms = ['Room-1', 'Room-2', 'Room-3'];
    const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'];

    const [bookings, setBookings] = useState([
        { room: 'Room 1', time: '9:00 AM', booked: true },
        { room: 'Room 2', time: '10:00 AM', booked: false },
        { room: 'Room 3', time: '11:00 AM', booked: true },
      ]);
    
    const handleSlotClick = (room, time)=>{
        onSlotClick({room, time});
    }
    const isBooked = (room, time)=>{
        return bookings.some(
            (booking)=> booking.room === room && booking.time === time && booking.booked);
        
    }
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Time</th>
                    { 
                        rooms.map((room, index)=>(
                            <th key={index}> { room}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    times.map((time, index)=>(
                        <tr key={index}>
                            <td>{time}</td>
                            {rooms.map((room, i)=>(
                                <td key={i}  style={{
                                    backgroundColor: isBooked(room, time) ? 'gray' : 'white',
                                    cursor: isBooked(room, time) ? 'not-allowed' : 'pointer',
                                  }}
                                  onClick={()=> !isBooked(room, time) && handleSlotClick(room, time)}
                                  >
                                    { isBooked(room, time)? 'Booked' : 'Available'}
                                  </td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default RoomBookingGrid;