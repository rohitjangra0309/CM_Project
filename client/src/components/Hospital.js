import React from "react";
import { useNavigate } from "react-router-dom";

function Hospital({ hospital }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${hospital._id}`)}
    >
      <h1 className="card-title">
        {hospital.hName} 
      </h1>
      <hr />
      <p>
        <b>Phone Number : </b>
        {hospital.phoneNumber}
      </p>
      <p>
        <b>Address : </b>
        {hospital.address}
      </p>
      {/* <p>
        <b>Cost Per Vaccines : </b>
        {hospital.vacCost}
      </p> */}
      <p>
        <b>Working Hours : </b>
        {hospital.timings[0]} - {hospital.timings[1]}
      </p>
      
    </div>
  );
}

export default Hospital;
