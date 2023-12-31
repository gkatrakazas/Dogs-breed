import React from 'react';
import "../css/Visualization.css";
import TableauVisualization from '../components/TableauVisualization';

function visualization() {
  return (

    <div id="visualization">

      <div className='container_visualization'>
        <div className="column box">
          <div className="column-content">
            <p id='main-title'>Unveiling Insights with Data</p>
          </div>
        </div>
      </div>

      <div className="intro-container">
        <h4 className='subtitle'>Our Visualization</h4>
        <p>
        Step into our visualization page, a gateway to a visual journey through the complex dynamics of breed characteristics, health problems, height and life expectancy. Here, we present an immersive experience that combines art and science to unravel the hidden insights within the data. Through interactive charts, graphs, and visual representations, we aim to provide a comprehensive understanding of the intricate interplay between breed traits, height, health issues, and the longevity of our canine companions. Explore our dynamic visualizations that allow you to filter average longevity and average height especially, analyze, and explore the data from multiple perspectives. Witness how different breed characteristics contribute to health problems and how these factors including height impact the life expectancy of various breeds. In other words this visualization helps anyone ,either a dog lover or not, who wants to buy a dog to get the best decision. Delve into the correlations and patterns that emerge, enabling you to gain valuable insights into breed selection, health management, and overall well-being. Whether you're a dog enthusiast seeking a deeper understanding of your furry friend or a professional in the field, our visualizations offer a powerful tool for data-driven decision-making and a gateway to a more informed and compassionate approach to dog care. Join us on this visual voyage and unlock a new level of understanding in the world of dogs.      
        </p>
        </div>
        <TableauVisualization />
    </div>
  );
}

export default visualization;