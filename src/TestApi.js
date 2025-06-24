import React, { useState, useEffect } from 'react';

const TestApi = () => {
    const [names, setNames] = useState([]);
    const [newName, setNewName] = useState('');
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('')

    //Fetch names from Backend API
    useEffect(() => {
        fetch(`http://localhost:5000/api/bookings`)
            .then(res => res.json())
            .then(data => setNames(data))
    }, [])

    //adding new name
    const handleAddName = () => {
        if (newName.trim()) {
            fetch(`http://localhost:5000/api/bookings`, {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({ name: newName })
            })
                .then(res => res.json())
                .then(data => {
                    setNames(prevNames => [...prevNames, data]);
                    setNewName('');
                })
        }
    }
    //updating name
    const handleUpdateName = (id) => {
        if (editName.trim()) {
            fetch(`http://localhost:5000/api/bookings/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: editName })
            })
                .then(res => res.json())
                .then(updateNames => {
                    setNames(prevNames => prevNames.map(name => name.id === id ? { ...name, name: updateNames.name } : name)
                    )
                    setEditId(null);
                    setEditName('');
                });
        }
    }
    //delete name
    const handleDeleteName = (id)=>{
        const confirmDelete = window.confirm('Are you sure you want to delete this booking?')
        if(confirmDelete){
            fetch(`http://localhost:5000/api/bookings/${id}`, {
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(()=>{
            setNames(prevNames=> prevNames.filter(name=> name.id !==id))
        })
        } else {
            console.log('Delete operation canceled')
        }
        
    }
   
    return (
        <div className='container' style={{ marginBottom: '5rem', marginTop: '4rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>List of Names</h2>
            <ul className='list-group'>
                {
                    names?.map(name => (
                        <li key={name.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {
                                editId === name.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                            placeholder="Edit name" />
                                        <i className="bi bi-check2" 
                                            style={{ cursor: 'pointer', color: '#007bff' }}
                                            onClick={(e) => handleUpdateName(name.id)}>
                                        </i>
                                        <i className="bi bi-x"
                                            style={{ cursor: 'pointer', color: '#007bff' }}
                                            onClick={() => setEditId(null)}>

                                        </i>
                                    </>
                                ) : (
                                    <>
                                        {name.name}
                                        <i className="bi bi-pencil-square" style={{ cursor: 'pointer', color: '#007bff' }}
                                            onClick={() => {setEditId(name.id); setEditName(name.name);}}></i>
                                        <i className="bi bi-trash3" style={{ cursor: 'pointer', color: 'red' }}
                                            onClick={()=> handleDeleteName(name.id)}></i>
                                    </>
                                )
                            }
                        </li>
                    ))
                }

            </ul> <br />
            <div className='input-group mb-3'>
                <input className='form-control' type='text' value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Enter a Name' />
                <button className='btn btn-secondary' onClick={handleAddName}> Add Name </button>
            </div>
        </div>
    )

}

export default TestApi;