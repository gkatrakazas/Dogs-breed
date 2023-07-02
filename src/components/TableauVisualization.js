import React, { useRef, useEffect } from 'react';
import '../css/Tableau.css';

const {tableau} = window;
function TableauVisualization() {

    const ref = useRef(null);
    const url ='https://public.tableau.com/views/Dog-breeds-visualization/Dashboard1';

    const initViz = () => {
        const existingViz = tableau.VizManager.getVizs()[0]; // Get the existing viz
        if (existingViz) {
          existingViz.dispose(); // Dispose of the existing viz
        }
      
        new tableau.Viz(ref.current, url, {
          width: '100%',
          height: '90vh',
        });
      };
      

    useEffect(initViz,[]);

  return <div ref={ref}/>;
}

export default TableauVisualization;
