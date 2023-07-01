import React from 'react';
import "../css/Team.css";
import img_grigoris from '../media/grigoris.png';
import img_dimitris from '../media/dimitris.jpg';
import img from '../media/user.png';

function ourteam() {
  return (

    <div id="team">
      
      <div className='container_team'>
        <div className="column box">
          <div className="column-content">
            <p id='main-title'>Uniting Passion, Expertise, and Dedication</p>
          </div>
        </div>
      </div>

      <div className="team-container">
        <h4 className='subtitle'>Meet Our Team</h4>
        <p>
Welcome to our team page, where you get to meet the brilliant minds behind our project. We are a dedicated group of dog enthusiasts, data visualization experts, and researchers united by a common goal: to explore the interplay of characteristics, health problems, and life expectancy in breed dogs. Each team member brings a unique set of skills and expertise, from meticulous data analysis to captivating visual design. Together, we work collaboratively, fueled by our passion for dogs and the desire to make a difference. Get to know us better as we share our stories, experiences, and the driving force behind our commitment to uncovering valuable insights. Join us on this exciting journey and discover the power of our collective knowledge and love for our canine companions.</p>

        <div className='team-content'>
          <div className="team-column">
            <img src={img_dimitris} alt="Dimitrios Orinos" />
            <h3>Dimitrios<br></br> Orinos</h3>
            <p>Dimitris, a 26-year-old individual, possesses a profound passion for physics and programming, with a particular emphasis on Python. Observing football or basketball matches and engaging in football video games such as FIFA serve as his preferred means of relaxation.</p>
          </div>
          <div className="team-column">
            <img src={img} alt="EvangeliaTsiropoulou" />
            <h3>Evangelia <br></br> Tsiropoulou</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit risus et massa elementum, eget tristique urna bibendum.</p>
          </div>
          <div className="team-column">
            <img src={img_grigoris} alt="Grigoris Katrakazas" />
            <h3>Grigoris<br></br> Katrakazas</h3>
            <p>Grigoris Katrakazas, a full-stack developer, is deeply passionate about programming, specifically in web application development. With a Bachelor's in Informatics and Telecommunications and a Master's in Computer Science, he specializes in Data and Knowledge Management.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ourteam;
