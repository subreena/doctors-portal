import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookAppointmentDetails = ({data , date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 text-center" style={{margin: '50px auto'}}>
            <h5 className="primary-color">{data.subject}</h5>
    <h6 className="dark-color">{data.visitingHour}</h6>
    <p className="text-secondary">{data.totalSpace} SPACES AVAILABLE</p>
            <button onClick={openModal} className="btn primary text-light">Book Appointment</button>
         <AppointmentForm date={date} subject={data.subject} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentForm>
        </div>
    );
};

export default BookAppointmentDetails;