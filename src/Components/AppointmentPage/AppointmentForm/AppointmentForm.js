import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, subject, date }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log(data);
    data.service = subject;
    data.date = date;
    data.created = new Date();
        fetch('https://obscure-crag-50787.herokuapp.com/addAppointment' ,{
        method: "POST",
        headers : {'content-type' : 'application/json'},
        body: JSON.stringify(data)
    }
        )
        .then(response => response.json())
        .then(success => {
            if(success) {
                closeModal();
                alert('Appointment created successfully')
            }
        })
      
        
    };

    return (
        <div>

            <Modal

                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="text-right">
                    <button className="btn primary text-light" type="submit" onClick={closeModal}>Close</button>
                </div>
                <div className="text-center my-3">
                    <h2 className="primary-color">{subject}</h2>
                    <p><small className="text-secondary">
                        On {date.toDateString()}
                    </small></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This Field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                            {errors.phone && <span className="text-danger">This Field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="email" placeholder="Email Adress" className="form-control" />
                            {errors.email && <span className="text-danger">This Field is required</span>}
                        </div>
                        <div className="form-group row">
                            <div className="col-4">
                                <select name="gender" className="form-control" ref={register({ required: true })}>
                                    <option value="Not set" disabled={true}>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender && <span className="text-danger">This Field is required</span>}
                            </div>
                            <div className="col-4">
                                <input type="text" ref={register({ required: true })} name="age" placeholder="Age" className="form-control" />
                                {errors.age && <span className="text-danger">This Field is required</span>}
                            </div>
                            <div className="col-4">
                                <input type="text" ref={register({ required: true })} name="weight" placeholder="Weight" className="form-control" />
                                {errors.weight && <span className="text-danger">This Field is required</span>}
                            </div>
                        </div>
                        <div className="form-group text-right my-4">
                            <button className="btn primary text-light" type="submit" >Submit</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;