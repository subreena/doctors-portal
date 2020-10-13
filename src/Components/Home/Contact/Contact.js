import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
const Contact = () => {
    return (
        <section style={{ marginTop: '100px' }} className="contact">
            <div className="text-center">
                <h5 className="primary-color text-uppercase">
                    contact us
                </h5>
                <h3 className="text-light">
                    Always Connect with Us
                </h3>
            </div>
            <div className="container">
                <div className="d-flex justify-content-center ">   
                 <form action="" className="form w-75">
                    <div className="form-group">
                        <input className="form-control" type="text" name="email" id="" placeholder="Email Adress" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="subject" id="" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="6" id="" placeholder="Message"></textarea>
                    </div>
                    <Link to="/appointment">
                    <button className="btn primary text-light w-50 mx-auto d-block">
                     Submit
                 </button>
                    </Link>
                </form>
          
                </div>
                
            </div>
        </section>
    );
};

export default Contact;