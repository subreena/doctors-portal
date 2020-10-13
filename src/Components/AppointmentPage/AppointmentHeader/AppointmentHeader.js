import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Chair from '../../../images/Chair.png';
const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <main className="d-flex align-items-center" style={{height: "500px"}}>
        <div className="col-md-4 offset-md-1">
        <div>
       <h1 style={{color: "#3A4256"}} className="mb-5">Appointment
                </h1>
                <div>
      <Calendar
      className="mt-5"
        onChange={handleDateChange}
        value={new Date()}
      />
    </div>
                  </div>
        </div>
        <div className="col-md-6">
            <img src={Chair} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default AppointmentHeader;