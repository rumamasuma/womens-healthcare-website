import React, { useEffect, useState } from 'react';
import SpecialService from '../SpecialService/SpecialService';

const Speciality = () => {

    const [speciality ,setSpeciality]= useState([]);

    useEffect(() =>{
      fetch('speciality.json')
      .then(res =>res.json())
      .then(data => setSpeciality(data));
    },[])

    return (
        <div>
            <h2 className ='login-heading'><i>Qudrah's Speciality</i></h2>
           <div className='row row-cols-1 row-cols-md-3 g-4 m-3'>
               {
                   speciality.map(specialService => <SpecialService  key ={specialService.id}
                    specialService={specialService}
                   ></SpecialService> )
               }

           </div>

        </div>
    );
};

export default Speciality;
