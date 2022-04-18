import React from "react";
import profilephoto from "../../profilephoto.jpg";

const About = () => {
  return (
    <div>
        <h3 className="text center">My goals in 2022</h3>
      <div className="container d-flex align-items-center">
        <div>
          <img className="w-25" src={profilephoto} alt="" />
        </div>

        <div className="w-25">
          <ul className="list-group list-group-numbered">
            <li className="list-group-item">Become an web developer</li>
            <li className="list-group-item">Work as a frrelancer</li>
            <li className="list-group-item">Start my Own Bussiness</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
