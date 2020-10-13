import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false)
    useEffect(() => {
        fetch('https://obscure-crag-50787.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => {
                setIsDoctor(data);
            })
    }, [])
    return (
        <div className="container text-capitalize my-5" style={{ minHeight: "100vh" }}>
            <div>
                <Link to='/' className="text-light">
                    <p className="font-weight-bold">Home</p>
                </Link>
            </div>
            {isDoctor &&  <div>
            
                <div>
                <Link to='/dashboard' className="text-light">
                    <p className="font-weight-bold">Dashboard</p>
                </Link>
            </div>
            <div>
                <Link to='/appointment' className="text-light">
                    <p className="font-weight-bold">Appointment</p>
                </Link>
            </div>
            <div>
                <Link to='/dashboard/patients' className="text-light">
                    <p className="font-weight-bold">Patients</p>
                </Link>
            </div>
            <div>
                <Link to='/dashboard/addDoctor' className="text-light">
                    <p className="font-weight-bold">Add a Doctor</p>
                </Link>
            </div>
            <div>
                <Link to='/prescriptions' className="text-light">
                    <p className="font-weight-bold">Prescriptions</p>
                </Link>
            </div>
            <div>
                <Link to='/setting' className="text-light">
                    <p className="font-weight-bold">Setting</p>
                </Link>
            </div>
            </div>
            }


        </div>
    );
};

export default Sidebar;