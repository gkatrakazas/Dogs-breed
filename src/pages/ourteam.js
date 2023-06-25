import React from 'react';
import "../css/ourteam.css";
import img from '../media/user.png';

function ourteam() {
  return (

    <div id="ourteam">
      <div className='container_character'>
        <div className="column box">
          <div className="column-content">
            <p id='main-title'>Exploring Character Traits in Dog Breeds</p>
          </div>
        </div>
      </div>

      <div className=" container team-container">
        <h4 className='subtitle'>This dashboard presents</h4>

        <div className='team-content'>
        <p>
        This dashboard provides an interactive visualization that explores the relationship between character traits and longevity in dog breeds. By examining various traits such as playfulness, trainability, temperament, loyalty, adaptability, and more, you can gain insights into how these characteristics impact the lifespan of different breeds. Through interactive charts and filters, this dashboard empowers dog enthusiasts, veterinarians, breeders, and researchers to make data-driven decisions and enhance their understanding of the factors that contribute to the longevity of specific dog breeds.
        </p>
        </div>

      </div>
    </div>
  );
}

export default ourteam;
