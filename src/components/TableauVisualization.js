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
                  <br></br>
            <h5>Conclusions</h5>
            <ul>
              <li>
                <p>
                  Character traits like gentle, protective or even active, strong and trainable appeared in dog breeds with large average height, but with low average longevity. All these character traits does not appear in dog breeds very frequently.
                </p>           
              </li>
              <li>
                <p>
                  Surprisingly it is observe that the only dog breed that has the character trait of braveness, it does not live more and also it has a small height.              
                </p>           
              </li>
              <li>
                <p>
                  Playfulness, good relationship with nature, and intelligence appeared very frequently in dog breeds and giving them a high average longevity. Also a dog that is energetive lives for many years, but its average height is not so high.
                </p>           
              </li>
              <li>
                <p>
                  Dogs that are characterized by their sensitivity, socialness, curiosity and also activeness have a high average longevity, middle-low average height and there are not so many.
                </p>           
              </li>
            </ul>
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
