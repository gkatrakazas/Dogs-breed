import React from 'react';
import "../css/Home.css";
import img_aims from '../media/accuracy.png';
import img_target from '../media/target.png';
import img_challenge from '../media/challenge.png';
import img_data from '../media/data.png';

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

      <div className="aims_target_container">
      <div className='content'>
        <div className="column">
          <img width='200' src={img_aims} alt="aims of the project" />
            <h3>Aims of the project</h3>
            <p>The project aims to investigate the relationship between characteristics and health problems of breed dogs and their life expectancy. It seeks to uncover patterns, correlations, and insights that can help understand how these factors interact and influence the longevity of different dog breeds.</p>
          </div>
          <div className="column">
          <img width='200' src={img_target} alt="aims of the project" />
            <h3>Target audience</h3>
            <p>The target audience for this project includes dog enthusiasts, veterinarians, breeders, researchers in the field of animal health, and anyone interested in understanding the factors that impact the life expectancy of breed dogs. It caters to individuals with a general interest in dog breeds as well as professionals seeking data-driven insights.</p>
          </div>
        </div>

      </div>
      
      <div className="challenge_container">

        <div className='challenge_content'>
          <div className="text_challenge_column">
            <h4 className='subtitle'>Significance of the work and visual data science challenges</h4>
            <p>This project is significant as it explores the relationship between breed characteristics, health problems, and life expectancy in dogs. The visual data science 
              challenges involve effectively analyzing multidimensional data, integrating diverse sources, and presenting insights in a visually appealing and understandable way. 
              The main challenge is dealing with qualitative variables (e.g., health problems and characteristics) and connecting them with quantitative data to create interpretable 
              visualizations. This requires splitting the traits and health problems into separate columns for each breed, using them as filters to determine maximum life expectancy, 
              and capturing the breeds with specific health problems. Overcoming these challenges enhances our understanding of these relationships and aids in informed decisions regarding 
              breed selection and health management.</p>
          </div>
          <div className="img_challenge_column">
          <img width='200' src={img_challenge} alt="aims of the project" />
          </div>
        </div>
      </div>

      <div className="data_container">

        <div className='data_content'>
        <div className="img_data_column">
          <img width='200' src={img_data} alt="data of the project" />
          </div>
          <div className="text_data_column">
            <h4 className='subtitle'>The dataset considered</h4>
            <p>The project utilizes one dataset to achieve its goals. The dataset is carefully selected from Kaggle (Dog breeds | Kaggle) and refers to specific topics for dogs such as fur color, eyes color or country of origin of each dog breed.
This dataset includes information on breed characteristics, such as height, character traits, for example kindness, strength, confidence, and trainability. Additionally, it gives information on breed-specific more severe health problems like cancer, pancreatitis or more common health problems such as dental problems, ear infections, skin allergies, breath problems etc.  Also average lifespan for each breed is also considered. 
</p>
          </div>

        </div>
      </div>

      {/* <div className="team-container">
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

      </div> */}
    </div>
  );
}

export default Home;
