import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import img from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const DoctorsDetails = ({ data }) => {

    return (
        <div className="col-md-4 text-center">
            {
                data.image
                    ?
                    <img src={`data:image/png;base64,${data.image.img}`} alt="" style={{ height: "200px" }} className="img-fluid" />
                    :
                    <img src={`https://obscure-crag-50787.herokuapp.com/${data.img}`} alt="" style={{ height: "200px" }} className="img-fluid" />
            }
            <h4 className="text-center dark-color">
                {data.name}
            </h4>
            <h6 className="text-center text-secondary">
                <FontAwesomeIcon className="primary-color" icon={faPhone}></FontAwesomeIcon>
                {data.email}
            </h6>
        </div>
    );
};

export default DoctorsDetails;