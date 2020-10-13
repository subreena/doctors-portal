import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    background: '#F4FDB',
    height: '100%',
    margin:0,
}

const Dashboard = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);

    }
        useEffect(() =>{
            fetch('https://obscure-crag-50787.herokuapp.com/appointmentsByDate',{
                method: 'POST',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify({date: selectedDate , email: loggedInUser.email})
            })
            .then(response => response.json())
            .then(appointments => {
                  setAppointments(appointments);
            })
        },[selectedDate])

    
    return (
        <section>
            <div style={containerStyle}>
                <div className="d-flex">
                    <div  className="primary text-white text center col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                        <h2>Appointments</h2>
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
                        <AppointmentsByDate date={selectedDate} appointments={appointments}></AppointmentsByDate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;