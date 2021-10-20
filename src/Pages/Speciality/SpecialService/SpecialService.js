import React from 'react';
import './SpecialService.css';

const SpecialService = ({specialService}) => {
    const {img, title,description } = specialService;
    return (
        <div className="col speciality text-center px-3 login-card ">
        <div className="card h-100">
          <img src={img} className="card-img-top mx-auto p-2 m-3 img-fluid" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default SpecialService;