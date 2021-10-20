import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const history = useHistory();

    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() =>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data =>{
        const detailInfo = data.find(ServiceData => ServiceData.id == serviceId);
        setServiceDetails(detailInfo);
        // console.log(detailInfo);
    })
    },[serviceId])


// handle go back button
const handleBackButton =()=>{
    history.push("/home");
}

    return (
        <div >
         <h2>Our Health Care Services</h2>
         
        <div className='serviceDetail-card mx-auto m-5'>
        <img  src={serviceDetails.img} alt="" />
              <div className='m-2'>
              <h3>{serviceDetails.title}</h3>
              <p>{serviceDetails.description}</p>
             </div> 
             <button className='details-button' onClick= {handleBackButton}>GO BACK TO HOME</button>
        </div>
        </div>
    );
};

export default ServiceDetails;