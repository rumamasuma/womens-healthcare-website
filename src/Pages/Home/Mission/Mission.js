import React from 'react';
import './Mission.css';

const Mission = () => {
    return (
        <div className='m-5'>
         {/* <h2> Our Mission & Vission</h2>    */}
         <div className='row d-flex align-items-center mission p-2 '>
  <div className=" col-md-6 col-sm-12 p-2">
   <h2>Mission</h2>
   <h4>WE ARE DEDICATED TO MEETING THE NEEDS OF:</h4>
   <p># Our patient - excellent and cost-effective healthcare for women</p>
   <p># Our staff   - continuing development and welfare</p>
   <p># Our nation  - partnership in promoting health in Bangladesh</p>
  </div>
  <div className="  col-md-6 col-sm-12 p-2">
<h2>Vision</h2>
<div class="card">
  <div class="card-header">
<h5> PROVIDE WORLD CLASS HEALTH SERVICE</h5>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>"TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE, PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."</p>
      <footer class="blockquote-footer">By <cite title="Source Title">Chairman of Qudrah Women's Health Care</cite></footer>
    </blockquote>
  </div>
</div>

  </div>
         </div>
        </div>
    );
};

export default Mission;