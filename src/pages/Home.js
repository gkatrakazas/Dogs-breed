import React from 'react';
import "../css/Home.css";
import img from '../media/user.png';
import img_aims from '../media/accuracy.png';
import img_target from '../media/target.png';

function Home() {
  return (
    <div id="home">
      <div className='container_home'>
        <div className="column box">
          <div className="column-content">
            <p id='main-title'>Exploring the Interplay: Characteristics, Health Problems, and Life Expectancy of Breed Dogs</p>
          </div>
        </div>
      </div>

      <div className="intro-container">
        <h4 className='subtitle'>Introduction</h4>
        <p>This visualization project explores the relationship between characteristics, health problems, and life expectancy of breed dogs. By analyzing data on breed-specific traits, common health issues, and average lifespan, the project aims to uncover insights into how these factors interact and impact the longevity of different dog breeds. So the dog lovers from this visualization are able to know how long its breed lives and why!</p>
      </div>

      <div className="aims-container">
      <div className='team-content'>
        <div className="team-column">
          <img width='200' src={img_aims} alt="aims of the project" />
            <h3>Aims of the project</h3>
            <p>The project aims to investigate the relationship between characteristics and health problems of breed dogs and their life expectancy. It seeks to uncover patterns, correlations, and insights that can help understand how these factors interact and influence the longevity of different dog breeds.</p>
          </div>
          <div className="team-column">
          <img width='200' src={img_target} alt="aims of the project" />
            <h3>Target audience</h3>
            <p>The target audience for this project includes dog enthusiasts, veterinarians, breeders, researchers in the field of animal health, and anyone interested in understanding the factors that impact the life expectancy of breed dogs. It caters to individuals with a general interest in dog breeds as well as professionals seeking data-driven insights.</p>
          </div>
        </div>

        {/* <div className='aims-content'>
          <div className="img-aims-column">
          <img width='200' src={img_aims} alt="aims of the project" />

           </div>
          <div className="text-aims-column">
            <h4 className='subtitle'>Aims of the project</h4>
            <p>The project aims to investigate the relationship between characteristics and health problems of breed dogs and their life expectancy. It seeks to uncover patterns, correlations, and insights that can help understand how these factors interact and influence the longevity of different dog breeds.</p>
            </div>

        </div> */}
      </div>
      
      <div className="target-container">

        <div className='target-content'>
          <div className="text-target-column">
            <h4 className='subtitle'>Target audience</h4>
            <p>The target audience for this project includes dog enthusiasts, veterinarians, breeders, researchers in the field of animal health, and anyone interested in understanding the factors that impact the life expectancy of breed dogs. It caters to individuals with a general interest in dog breeds as well as professionals seeking data-driven insights.</p>
          </div>
          <div className="img-target-column">
          <img width='200' src={img_target} alt="aims of the project" />
          </div>

        </div>
      </div> 

      <div className="team-container">
        <h4 className='subtitle'>Our Team</h4>

        <div className='team-content'>
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
    </div>
  );
}

export default Home;
