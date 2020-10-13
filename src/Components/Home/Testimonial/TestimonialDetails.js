import React from 'react';

const TestimonialDetails = ({ data }) => {
    const { name, img , place } = data;
    return (
        <div className="col-md-4">
            <div style={{boxShadow: '1px 1px 5px gray' , padding: "15px" , borderRadius: '5px'}}>
                <div>
                    <p className="dark-color">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia quo, velit officiis nulla beatae corporis assumenda soluta excepturi eveniet nemo qui fugit.
                              </p>
                </div>
                <div className="d-flex">
                    <div style={{borderRadius: '100%'}}>
                        <img src={img} alt=""/>
                    </div>
                    <div className="d-flex align-items-center" style={{marginLeft: '15px'}}>
                    <div className="d-block">
    <h5 className="primary-color">{name}</h5>
    <small className="text-secondary">{place}</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;