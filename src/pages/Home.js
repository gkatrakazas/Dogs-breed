import React from 'react';
import "../css/Home.css";
import img from '../media/user.png';


function Home() {
  return (
    <div>
      <div id='container_home'>
        <div className="column box">
          <div className="column-content">
            <p id='main-title'>Longevity Paws: Visualizing Dog Breed Lifespans</p>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div className="team-column">
          <img src={img} alt="Team Member 1" />
          <h3>Team Member 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit risus et massa elementum, eget tristique urna bibendum.</p>
        </div>
        <div className="team-column">
          <img src={img} alt="Team Member 2" />
          <h3>Team Member 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit risus et massa elementum, eget tristique urna bibendum.</p>
        </div>
        <div className="team-column">
          <img src={img} alt="Team Member 3" />
          <h3>Team Member 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit risus et massa elementum, eget tristique urna bibendum.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
