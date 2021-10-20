import React from 'react';

const Doctor = ({doctor}) => {
    const { img, name, designation, visitingDay1 , visitingDay2 , visitingDay3 }= doctor;
    return (
       <div className='service-part'>
 <div className="card" >
  <img src={img} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{designation}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{visitingDay1}</li>
    <li className="list-group-item">{visitingDay2}</li>
    <li className="list-group-item">{visitingDay3}</li>
  </ul>
 
</div>
       </div>
            
       
    );
};

export default Doctor;