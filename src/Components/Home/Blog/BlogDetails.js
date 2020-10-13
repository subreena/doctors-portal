import React from 'react';

const BlogDetails = ({ data }) => {
    return (
        <div className="col-md-4">
            <div style={{ boxShadow: '1px 1px 5px gray', padding: "15px", borderRadius: '5px' , height: '350px'}}>
                <div className="d-flex">
                    <div style={{ borderRadius: '100%' }}>
                        <img src={data.img} alt="" className="img-round" />
                    </div>
                    <div className="d-flex align-items-center" style={{ marginLeft: '15px' }}>
                        <div className="d-block">
                            <h6 className="primary-color">{data.doctor}</h6>
                            <small className="text-secondary">{data.date}</small>
                        </div>
                    </div>

                </div>
                <h5 className="dark-color mt-3">{data.title}</h5>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorum pariatur eius ipsam necessitatibus dolorem eaque ut doloremque aliquam! Rem aspernatur placeat molestias?
            </p>
            </div>
        </div>
    );
};

export default BlogDetails;