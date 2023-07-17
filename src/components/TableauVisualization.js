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
              <h4>Do dog breeds with specific height and specific health problems live longer?</h4>
              <div className='con-col'>
                <div className='coll'>
                  <h5> <strong>Height and health problems seem to affect dogs' longevity.</strong> </h5> 
                  <p>It seems that taller dog breeds live more years than shorter ones. Additionally, it seems that dog breeds with specific health problems seem to have larger longevity, while there are some health problems that negatively affect dogs' breed longevity. In the above chart, we can also see which health problems are common among all dog breeds (i.e. the bubble’s size depicts the count of breeds). </p>
                  <p>Below we can see which health problems affect dogs’ longevity the most as well as which ones affect dogs’ longevity the least.</p>
                </div>
                <div className='coll collr'>
                <p> <strong>Top common health problems with high average longevity:</strong> </p> 
                <ul>
                  <li>Eye problems (79 out of 103 dog breeds - 12,9 years of longevity)</li>
                  <li>Dental problems (76 out of 103 dog breeds - 13 years of longevity) </li>
                  <li>Skin allergies (72 out of 103 dog breeds - 12,7 years of longevity)</li>

                </ul>
                <p>➤ The dog breeds with the above least fatal health problems are the shortest ones.</p>

                <p> <strong>Top common health problems with low average longevity: </strong> </p> 
                <ul>
                  <li>Cancer ➤ It seems to be the most common among these 3 health problems (17 out of 103 dog breeds with 10,8 years of average longevity).</li>
                  <li>Heart conditions ➤ 9 out of 103 dog breeds with 9,7 years of average longevity </li>
                  <li>Elbow dysplasia ➤ It seems to be the most severe among these 3 health problems (8,8 years of average longevity), but it is extremely rare among dogs breeds (2 out of 103 dog breeds). </li>

                </ul>
                <p>➤ The dog breeds with the above most fatal health problems are the tallest ones.</p>

                </div>

              </div>
              
              <br></br>
              {/* second */}
              <h4>Do dog breeds with specific height and specific character traits live longer?</h4>
              <div className='con-col'>
                <div className='coll'>
                  <h5> <strong>Height and character traits seem to affect dogs' longevity.</strong> </h5> 
                  <p>Consequently, some dog breeds with concrete character traits seem to have larger longevity.  On the other hand there are character traits that appear in dogs with lower longevity.  In the above chart, we can also see which character traits are common among all dog breeds (i.e. the bubble’s size depicts the count of breeds). The only difference between the 1st and the 2nd bubble chart is that instead of circles, we have squares.</p>
                </div>
                <div className='coll collr'>
                <p> <strong>Top common character traits with high average longevity:</strong> </p> 
                <ul>
                  <li>Intelligent ➤ It seems to be the most common among all character traits (95 out of 103 dog breeds with 12,6 years of average longevity)</li>
                  <li>Good-Natured ➤ 87 out of 103 dog breeds with 12,6 years of average longevity</li>
                  <li>Energetic ➤ 81 out of 103 dog breeds with 13 years of average longevity</li>
                </ul>

                <p>Social, charming, sensitive, curious and active ➤ It seems that dog breeds with these character traits live the <strong>longest</strong> (13,5 years), but these traits are extremely <strong>rare</strong> among dog breeds. However, ‘’active’’ dog breeds appear more frequently (4 out of 103 dog breeds). </p>

                <p> <strong>Top common character traits with the lowest average longevity:</strong> </p> 
                <ul>
                  <li>Gentle ➤ It seems to be the most common among these character traits (11 out of 103 dog breeds - 9,8 years of longevity)</li>
                  <li>Protective ➤ 9 out of 103 dog breeds - 10,3 years of longevity</li>
                  <li>Strong ➤ 2 out of 103 dog breeds - 11,3 years of longevity</li>
                  <li>Trainable and athletic ➤ 2 out of 103 dog breeds - 11 years of longevity</li>

                </ul>
                <p>Brave ➤ It appears only <strong>once</strong> among all 103 dog breeds. However, ‘’brave’’ dog breeds are not tall and has the most negative effect on dogs’ breed longevity (9 years of average longevity). </p>
                <p>➤ The dog breeds with the character traits of social, sensitive, curious, active and brave are the shortest ones.</p>
                <p>➤ The dog breeds that are gentle and protective are the tallest among all dog breeds.</p>
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
