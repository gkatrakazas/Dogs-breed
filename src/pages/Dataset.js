import React from 'react';
import "../css/Dataset.css";
import img from '../media/user.png';

function ourdataset() {
  return (

    <div id="dataset">
      
      <div className='container_dataset'>
        
        <div className="column box">
          <div className="column-content">
            <p id='main-title'>Unveiling Insights from the Dog Breeds Dataset</p>
          </div>
        </div>
      </div>

      <div className="dataset-container">
        <h4 className='subtitle'>The dataset</h4>
        <p>
        The dataset encompasses a diverse collection of dog breeds, each accompanied by
         their respective attributes. It provides valuable information on various aspects, 
         including the breed's country of origin, fur color options, height range, color of eyes, 
         longevity in years, character traits, and common health problems. This comprehensive 
         dataset allows for a broad exploration of the interplay between breed characteristics, 
         health issues, and life expectancy. From loyal and intelligent breeds to energetic and 
         good-natured ones, the dataset offers insights into the diverse traits exhibited by different breeds. 
         Additionally, it highlights the common health problems faced by various breeds, ranging from hip 
         dysplasia and obesity to ear infections and respiratory issues. By delving into this dataset, 
         researchers, dog enthusiasts, and professionals in the field can gain a deeper understanding 
         of the intricacies surrounding breed-specific attributes and health concerns, ultimately 
         fostering informed decision-making and better care for our beloved canine companions. 
        To access the complete dataset, you can visit the Kaggle link provided here.</p>
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
