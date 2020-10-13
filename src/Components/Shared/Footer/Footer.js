import React from 'react';
import './Footer.css';
import {faGoogle , faTwitter , faFacebook} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <section style={{marginTop: '100px'}} className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="text-secondary" style={{marginTop: '35px'}}>
                        
                             <Link className="text-secondary" to="/"><li>Emergency Dental Care</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                             <Link className="text-secondary" to="/"><li>Treatment of Personal disease</li></Link>      
                             <Link className="text-secondary" to="/"><li>Tooth Extraction</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="text-secondary">
                            
                             <Link className="text-secondary" to="/"><li>
                                <h5 className="primary-color">Services</h5>
                            </li></Link>
                             <Link className="text-secondary" to="/"><li>Emergency Dental Care</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                             <Link className="text-secondary" to="/"><li>Treatment of Personal disease</li></Link>      
                             <Link className="text-secondary" to="/"><li>Tooth Extraction</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="text-secondary">
                         <Link className="text-secondary" to="/"><li> 
                                <h5 className="primary-color">Oral Health</h5>
                            </li></Link>
                             <Link className="text-secondary" to="/"><li>Emergency Dental Care</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                             <Link className="text-secondary" to="/"><li>Treatment of Personal disease</li></Link>      
                             <Link className="text-secondary" to="/"><li>Tooth Extraction</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                             <Link className="text-secondary" to="/"><li>Check Up</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="text-secondary">
                            <Link className="text-secondary" to="/"><li>
                                <h5 className="primary-color">Our Adress</h5>
                            </li></Link>
                             <Link className="text-secondary" to="/"><li>New York 101011 Hudson <br/> Yards </li></Link>
                            <Link className="text-secondary" to="/"><li style={{marginTop: '30px'}}>
                            <FontAwesomeIcon className="footer-icon" icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon className="footer-icon" icon={faGoogle}></FontAwesomeIcon>
                            <FontAwesomeIcon className="footer-icon" icon={faTwitter}></FontAwesomeIcon>
                            </li></Link>
                            <Link className="text-secondary" to="/"><li style={{marginTop: '50px'}}>
                                Call Now 
                                <br/>
                                <button className="btn primary text-light font-weight-bold">
                                    +0123456789
                                </button>
                        
                            </li></Link>
                        </ul>
                    </div>
                </div>
                <div className="copy-right text-center" style={{ marginTop: "40px"}}>
              <p className="text-secondary font-weight-bold"><small> 2020 All Rights Reserved</small></p>
                </div>
            </div>
        </section>
    );
};

export default Footer;