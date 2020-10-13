import React from 'react';

const AppointmentsByDate = ({date ,appointments}) => {
    // console.log(appointments);

    return (
        <div className="container dark-color">
            <br/>
            <br/>
            <br/>
            <h4>Appointments On {date.toDateString()}</h4>
            <br/>
            
                
            
           <table className="table">
               <thead>
                  <tr><th>Name</th>
                   <th>Service</th>
                   <th>Email</th>
                   <th>Phone</th></tr> 
               </thead>
               <tbody>
               {appointments.length ? 
             
               ( appointments.map(data => <tr key={data._id}>
                
                   
                    <td>
                    {data.name}
                    </td>
               <td>{data.service}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                  
                </tr>))
                :
                <tr><td colSpan="4">No appointments available.</td></tr>
            }
        
               
            
               </tbody>
           </table>
        </div>
    );
};

export default AppointmentsByDate;