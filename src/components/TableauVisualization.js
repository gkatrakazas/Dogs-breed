import React, { useRef, useEffect } from 'react';
import '../css/Tableau.css';

const { tableau } = window;

function TableauVisualization() {
  const viz1Ref = useRef(null);
  const viz2Ref = useRef(null);
  const viz1Url = 'https://public.tableau.com/views/Dog-breeds-visualization/Dashboard1';
  const viz2Url = 'https://public.tableau.com/views/Dog-breeds-visualization2/Dashboard2';

  const initViz = (ref, url) => {
    const viz = new tableau.Viz(ref.current, url, {
      width:'100vh',
      height: '90vh',
    });

    return () => {
      viz.dispose();
    };
  };

  useEffect(() => {
    const cleanup1 = initViz(viz1Ref, viz1Url);
    const cleanup2 = initViz(viz2Ref, viz2Url);

    return () => {
      cleanup1();
      cleanup2();
    };
  }, []);

  return (
<div className="tableau-container">
      <div className="row">
        <div className="col">
          <div className="tableau-viz">
            <div ref={viz1Ref}  />
            <div className='conclutions'>
              <h4>Do dog breeds with specific height and specific health problems live longer</h4>
              <div className='con-col'>
                <div className='coll'>
                  <h5> <strong>Height and health problems seem to affect dogs' longevity</strong> </h5>
                </div>
                <div className='coll'>
                  <p>vvf</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="row">
        <div className="col">
        <div className="tableau-viz">
            <div ref={viz2Ref}  />
            <div className='conclutions'>
                <br></br>
              <h5>Conclusions</h5>
              <ul>
                <li>
                  <p>
                  All the character traits and health problems(intelligence, playfulness, skin allergies, eye and dental problems etc) that give dog breeds high average longevity, due to the fact that appeared in many dog breeds it could be possible to calculate empirically the average longevity for all breeds.                 </p>           
                </li>
                <li>
                  <p>
                  Also it is occurred that the dog breeds that are intelligent, curious, social, sensitive or good-natured for example due to its high average longevity, they know how to live,  even as dog breeds with more activeness, for example energetic , active, playful.                </p>           
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TableauVisualization;
