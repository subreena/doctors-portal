import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Footer/NavBar/NavBar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import BookAppointment from './BookAppointment/BookAppointment';

const AppointmentPage = () => {
    const [selectedDate , setSelectedDate] = useState(new Date());
    const handleDateChange =  date =>{
        setSelectedDate(date);
   
    }
    return (
        <div>
            
            <NavBar  className="text-dark"></NavBar>
           
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate} ></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentPage;