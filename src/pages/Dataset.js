import React from 'react';
import "../css/Dataset.css";
import img from '../media/user.png';

function ourdataset() {
  return (

    <div id="dataset">
      
      <div className='container_dataset'>
        
        <div className="column box">
          <div className="column-content">
            <p id='main-title'>Uniting Passion, Expertise, and Dedication</p>
          </div>
        </div>
      </div>

      <div className="dataset-container">
        <h4 className='subtitle'>Meet Our dataset</h4>
        <p>
Welcome to our dataset page, where you get to meet the brilliant minds behind our project. We are a dedicated group of dog enthusiasts, data visualization experts, and researchers united by a common goal: to explore the interplay of characteristics, health problems, and life expectancy in breed dogs. Each dataset member brings a unique set of skills and expertise, from meticulous data analysis to captivating visual design. Together, we work collaboratively, fueled by our passion for dogs and the desire to make a difference. Get to know us better as we share our stories, experiences, and the driving force behind our commitment to uncovering valuable insights. Join us on this exciting journey and discover the power of our collective knowledge and love for our canine companions.</p>

        <div className='dataset-content'>
          <div className="dataset-column">
            <img src={img} alt="Dimitrios Orinos" />
            <h3>Dimitrios<br></br> Orinos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit risus et massa elementum, eget tristique urna bibendum.</p>
          </div>
          <div className="dataset-column">
            <img src={img} alt="EvangeliaTsiropoulou" />
            <h3>Evangelia <br></br> Tsiropoulou</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit risus et massa elementum, eget tristique urna bibendum.</p>
          </div>
          <div className="dataset-column">
            <img src={img} alt="Grigoris Katrakazas" />
            <h3>Grigoris<br></br> Katrakazas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit risus et massa elementum, eget tristique urna bibendum.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ourdataset;
