import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceDetails, setServiceDetails] = useState();

useEffect(() =>{
    fetch('services.json')
    .then(res => res.json())
    .then(data =>console.log(data));
    },[])
},[])
    return (
        <div>
         <h2>Qudrah Women's Healthcare Services</h2>
         <h3>Service details  of {serviceId}</h3>
        </div>
    );
};

export default ServiceDetails;