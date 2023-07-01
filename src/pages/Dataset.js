import React, { useState, useEffect } from 'react';
import "../css/Dataset.css";
import df from '../dataset/dog_breeds.csv';
import newdf from '../dataset/new_dog_breeds_v0.4.csv';

import Papa from 'papaparse';

function Dataset() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(df); // Update the file path as per your project structure
        const text = await response.text();
        const { data } = Papa.parse(text, { header: true });
        setCsvData(data);
      } catch (error) {
        console.error('Error fetching CSV file:', error);
      }
      
    };

    fetchData();
  }, []);

  const [csvDatanew, setCsvDatanew] = useState([]);

  useEffect(() => {
    const fetchDatanew = async () => {
      try {
        const response = await fetch(newdf); // Update the file path as per your project structure
        const text = await response.text();
        const { data } = Papa.parse(text, { header: true });
        setCsvDatanew(data);
      } catch (error) {
        console.error('Error fetching CSV file:', error);
      }
      
    };

    fetchDatanew();
  }, []);

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
        <h4 className='subtitle'>The Dataset</h4>
        <p>
          Our project leverages a carefully curated dataset sourced from Kaggle, focusing on various aspects of dog breeds. This comprehensive dataset includes detailed information on breed characteristics, ranging from height and character traits to fur color, eyes color, and country of origin. Additionally, it sheds light on breed-specific health problems, including more severe conditions such as cancer and pancreatitis, as well as common issues like dental problems, ear infections, skin allergies, and breath problems. Furthermore, the dataset incorporates the average lifespan for each breed, providing valuable insights into the longevity of different dog breeds. By exploring this dataset, we aim to unravel the intricate relationships between these attributes and gain a deeper understanding of the interplay between breed characteristics, health problems, and life expectancy. This dataset serves as the foundation for our data-driven analysis and visualization, enabling us to uncover patterns, correlations, and insights that contribute to the well-being of our canine companions. Delve into this rich dataset to explore the fascinating world of dog breeds and gain valuable insights into their unique traits, health concerns, and overall longevity.
        </p>
        <p>
          To access the complete dataset, you can visit the Kaggle link provided <a href='https://www.kaggle.com/datasets/marshuu/dog-breeds?fbclid=IwAR2XaMOkw760F5rIXK1qvVz8nEzL_HzOq9U6BeaMvSxh0m0xtTEksXljxh0' target='_blank' rel='noopener noreferrer'>here</a>.
        </p>
      </div>

      <h4 className='subtitle'>Original Dataset</h4>
      <div className="table-container">
        <table className="csv-table">
          <thead>
            <tr>
              {csvData.length > 0 &&
                Object.keys(csvData[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dataset-container">
        <h4 className='subtitle'>Refining the Dataset</h4>
        <p>To prepare our dataset for analysis and visualization, we conducted several preprocessing steps. Firstly, we addressed duplicate entries by identifying breeds with multiple occurrences and merged their data. This ensured that each breed had a single representative entry, avoiding redundancy in our dataset.

          <br></br>Next, we focused on refining the attribute values to enhance the accuracy and clarity of our analysis. We standardized the formatting of  character traits, and common health problems. This involved consolidating similar values, capitalizing the first letter, and ensuring consistency throughout the dataset.

          <br></br>Furthermore, we improved the structure of the dataset by creating separate columns for each characteristic and health problem. This allowed for easier filtering and analysis, enabling us to explore the impact of specific traits and health issues on breed longevity more effectively.

          <br></br>Also, in order to provide more precise information, we further refined the dataset by splitting the 'Height (in)' and 'Longevity (yrs)' columns into minimum and maximum values. By doing so, we were able to calculate the average height and life expectancy for each breed. This allows for a more accurate understanding of the range within which these attributes fall. By considering both the minimum and maximum values, we can capture a more comprehensive picture of the breed's characteristics. This refinement adds an extra layer of detail to our analysis and visualization, enabling a deeper exploration of the interplay between breed characteristics, health problems, and life expectancy.
          
          <br></br>We have also taken the initiative to ensure better compatibility with visualization tools such as Tableau by making adjustments to the names of certain countries 'Country of origin' in the dataset. This allows for smoother integration and seamless presentation of the data
          
          <br></br>By removing duplicates, standardizing attribute values, and restructuring the dataset, we have laid the foundation for meaningful insights and visualizations. These preprocessing steps ensure that our data is accurate, organized, and ready for in-depth exploration of the interplay between breed characteristics, health problems, and life expectancy in dogs.        </p>
      </div>

      <div className='new_dataset'>
      <h4 className='subtitle'>Refined Dataset</h4>
      <div className="table-container">
        <table className="csv-table">
          <thead>
            <tr>
              {csvDatanew.length > 0 &&
                Object.keys(csvDatanew[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {csvDatanew.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      
              
    </div>
      
  );
}

export default Dataset;