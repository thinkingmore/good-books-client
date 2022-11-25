import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BookingModal( {book, user} ) {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // submit booking modal form data

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const book = form.itemName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;

    const booking = {
       name: name,
       email: email,
       book_name: book,
       price: price,
       phone: phone,
       meetingLocation: meetingLocation,
    }

    console.log(booking);

    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
            Book Now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please put your booking information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* contains the booking form in modal body */}
            <form onSubmit={handleBooking}>
                <div className="mb-3">
                    <input type="name"  name="name" defaultValue={user?.displayName} className="form-control" id="nameField" placeholder="Name"/>
                </div>
                <div className="mb-3">
                    <input type="email" name="email" defaultValue={user?.email} className="form-control" id="emailField"  placeholder="Email" readOnly disabled/>
                </div>             
                <div className="mb-3">
                    <input type="text" name="itemName" defaultValue={book.name} className="form-control" id="itemField"  placeholder="Item Name" readOnly disabled/>
                </div>             
                <div className="mb-3">
                    <input type="text" name="price" defaultValue={`${book.resale_price} USD`} className="form-control" id="priceField" placeholder="Price" readOnly disabled/>
                </div>           
                <div className="mb-3">
                    <input type="text" name="phone" className="form-control" id="phoneField"  placeholder="Phone"/>
                </div>
                <div className="mb-3">
                    <input type="text" name="meetingLocation"  className="form-control" id="meetingLocatinField"  placeholder="Meeting Location"/>
                </div>
                <button className='btn btn-primary w-100' type='submit'>Submit</button>              
            </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookingModal;