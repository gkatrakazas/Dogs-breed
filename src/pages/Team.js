import React from 'react';
import "../css/Team.css";
import img from '../media/user.png';

function ourteam() {
  return (

    <div id="team">
      
      <div className='container_team'>
        <div className="column box">
          <div className="column-content">
            <p id='main-title'>Exploring Character Traits in Dog Breeds</p>
          </div>
        </div>
      </div>

      <div className="intro-container">
        <h4 className='subtitle'>Our Visualization</h4>
        This dashboard provides an interactive visualization that explores the relationship between character traits and longevity in dog breeds. By examining various traits such as playfulness, trainability, temperament, loyalty, adaptability, and more, you can gain insights into how these characteristics impact the lifespan of different breeds. Through interactive charts and filters, this dashboard empowers dog enthusiasts, veterinarians, breeders, and researchers to make data-driven decisions and enhance their understanding of the factors that contribute to the longevity of specific dog breeds.
      </div>

    </div>
  );
}

export default ourteam;
