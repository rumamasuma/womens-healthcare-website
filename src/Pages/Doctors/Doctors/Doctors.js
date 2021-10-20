import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors , setDoctors] = useState([]);

    useEffect(() =>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    },[])
    return (
        <div>
            <h2 className ='login-heading'><i>Doctors Zone</i></h2>
            <div className='row services-part'>
                {
                 doctors.map(doctor => <Doctor key={doctor.id} 
                    doctor={doctor}
                 ></Doctor>)
                }
                
            </div>

        </div>
    );
};

export default Doctors;