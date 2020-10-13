import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Patients = () => {
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        fetch('https://obscure-crag-50787.herokuapp.com/allAppointments')
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                setPatient(result);
            })
    }, [])

    return (
        <>
            <div className="d-flex">
                <div className="primary text-white text center col-md-2">
                    <Sidebar></Sidebar>
                </div>
               <div className="col-md-10">
               <div className="container">
                    <h2 className="primary-color">All Patients</h2>
                    <br/>
                    <br/>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Sl. No.</td>
                                <td>Name</td>
                                <td>Gender</td>
                                <td>Weight</td>
                                <td>Age</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Service</td>
                                <td>AppointmentDate</td>
                                


                            </tr>
                        </thead>
                        <tbody>
                            {
                                patient.map((data , index) => <tr data={data} key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.weight}</td>
                                    <td>{data.age}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.service}</td>
                                    <td>{data.date}</td>
                                  
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
               </div>
            </div>
        </>
    );
};

export default Patients;