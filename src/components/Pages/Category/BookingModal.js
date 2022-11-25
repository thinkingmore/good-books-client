import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BookingModal( {book, handleBooking} ) {
    console.log(book,handleBooking)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    <input type="name" className="form-control" id="nameField" placeholder="Name"/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="emailField"  placeholder="Email"/>
                </div>             
                <div className="mb-3">
                    <input type="text" defaultValue={book.name} className="form-control" id="itemField"  placeholder="Item Name" readOnly disabled/>
                </div>             
                <div className="mb-3">
                    <input type="text" defaultValue={`${book.resale_price} USD`} className="form-control" id="priceField" placeholder="Price" readOnly disabled/>
                </div>           
                <div className="mb-3">
                    <input type="text" className="form-control" id="phoneField"  placeholder="Phone"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="meetingLocatinField"  placeholder="Meeting Location"/>
                </div>
                <button className='btn btn-primary w-100' type='submit'>Submit</button>              
            </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookingModal;