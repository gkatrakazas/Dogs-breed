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
            <p id='main-title'>How Personality, Health Problems and Height affect dog's Longevity</p>
          </div>
        </div>
      </div>

      <div className="intro-container">
        <h4 className='subtitle'>Introduction</h4>
        <p>
        This visualization project explores the relationship between characteristics, health problems, height and life expectancy of breed dogs. By analyzing data on breed-specific traits, common health issues average height, and average lifespan, the project aims to uncover insights into how these factors interact and impact the longevity of different dog breeds. So the dog lovers from this visualization are able to know how long its breed lives and why!
          </p>
      </div>

      <div className="aims_target_container">
      <div className='content'>
        <div className="column">
          <img width='200' src={img_aims} alt="aims of the project" />
            <h3>Aims of the project</h3>
            <p>The project aims to investigate the relationship between characteristics, height and health problems of breed dogs and their life expectancy. It seeks to uncover patterns, correlations, and insights that can help understand how these factors interact and influence the longevity of different dog breeds.</p>
          </div>
          <div className="column">
          <img width='200' src={img_target} alt="aims of the project" />
            <h3>Target audience</h3>
            <p>The target audience for this project includes dog enthusiasts, veterinarians, breeders, researchers in the field of animal health, 
              and anyone interested in understanding the factors that impact the life expectancy of breed dogs. It caters to individuals with a general 
              interest in dog breeds as well as professionals seeking data-driven insights.</p>
          </div>
        </div>

      </div>

      <div className="video_container">

        <div className='video_content'>
          <div className="text_video_column">
            <h4 className='subtitle'>Demo Video</h4>
            <p>In this demo video, we provide a comprehensive overview of the interactive dashboard designed to unlock insights into character traits, height and health problems in dog breeds longevity. Watch as we guide you through the user interface, demonstrating its intuitive design and seamless navigation. Explore how you can interact with the visualizations and filters, allowing you to customize your analysis and gain a deeper understanding of the data.</p>
          </div>
          <div className="img_video_column">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VHKNiadNVM0" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>      
      <div className="challenge_container">

        <div className='challenge_content'>
          <div className="text_challenge_column">
            <h4 className='subtitle'>Significance of the work and visual data science challenges</h4>
            <p>This project is significant as it explores the relationship between breed characteristics, health problems, height and life expectancy in dogs. The visual data science challenges involve effectively analyzing multidimensional data, integrating diverse sources, and presenting insights in a visually appealing and understandable way. The main challenge is dealing with qualitative variables (e.g., health problems and characteristics) and connecting them with quantitative data to create interpretable visualizations, which is something very important and quite difficult. This requires splitting the traits and health problems into separate columns for each breed, using them in order to  determine average life expectancy and secondly average height, and capturing the breeds with specific health problems. Overcoming these challenges enhances our understanding of these relationships and aids in informed decisions regarding breed selection and health management.</p>
          </div>
          <div className="img_challenge_column">
          <img width='200' src={img_challenge} alt="aims of the project" />
          </div>
        </div>
      </div>
      
      <div className="meet-team-container">
        <h4 className='subtitle'>Meet our team</h4>
        <p>Passionate about dogs and driven by data visualization, our exceptional team explores breed characteristics, health problems, and life expectancy. With expertise, creativity, and a love for our furry friends, we are dedicated to unraveling insights and making a positive impact. Discover the faces behind our project on our team page and join us as we delve into the fascinating world of dogs.</p>
        <a href='/dogs_breed/team'>
        <button className='classic_button' >Read More for the Team</button>
        </a>
      </div>

      <div className="data_container">

        <div className='data_content'>
        <div className="img_data_column">
          <img width='200' src={img_data} alt="data of the project" />
          </div>
          <div className="text_data_column">
            <h4 className='subtitle'>The dataset considered</h4>
            <p>The project utilizes one dataset to achieve its goals. The dataset is carefully selected from Kaggle and refers to specific topics for dogs such as fur color, eyes color or country of origin of each dog breed.
              This dataset includes information on breed characteristics, such as height, character traits, for example kindness, strength, confidence, and trainability. Additionally, it gives information on breed-specific more severe health problems 
              like cancer, pancreatitis or more common health problems such as dental problems, ear infections, skin allergies, breath problems etc.  Also average lifespan for each breed is also considered. 
            </p>
            <a href='/dogs_breed/dataset'>
              <button className='classic_button' >Read More for Dataset</button>
            </a>             
        </div>

        </div>
      </div>

      <div className="visualization-container">
        <h4 className='subtitle'>Our visualization</h4>
        <p>Through captivating visual representations, we bring together breed characteristics, health problems, and life expectancy in an engaging and informative way. Dive into our interactive visualizations to uncover patterns, correlations, and insights that will deepen your understanding of the fascinating world of dogs. Whether you're a dog enthusiast, veterinarian, breeder, or researcher, our visualizations provide a comprehensive view of how these factors interplay, empowering you to make data-driven decisions and contribute to the well-being of our furry friends.</p>
        <a href='/dogs_breed/visualization'>
        <button className='classic_button' >Read More the visualization</button>
        </a>      
      </div>
    </div>
  );
}

export default Home;
