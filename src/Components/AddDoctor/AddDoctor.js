import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {

        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://obscure-crag-50787.herokuapp.com/addDoctor', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
               if(data){
                    console.log(data)
                alert("New doctor created")
               }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='d-flex row'>
            <div className="primary text-white text center col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="container">
                <h2 className="primary-color">
                    Add a Doctor
                    </h2>
                <br />
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload an image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;