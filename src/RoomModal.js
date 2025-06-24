import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RoomModal = ( {show, onClose, slot })=>{
    const [userName, setUserName] = useState('');
    const handleSubmit = ()=>{
        alert(`Room ${slot.room} booked for ${slot.time} by ${userName}`);
        onClose();
    }

    return(
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Book {slot.room} - {slot.time}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formUserName">
                        <Form.Label> Yor Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>Book Now</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default RoomModal;