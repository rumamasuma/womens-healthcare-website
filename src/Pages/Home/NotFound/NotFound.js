import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    // handle go back button
const handleBackButton =()=>{
    history.push("/home");
}
    return (
        <div >
            <div className='not-found'>
           
            </div>
            <button className='details-button' onClick= {handleBackButton}>GO BACK TO HOME</button>
        </div>
    );
};

export default NotFound;