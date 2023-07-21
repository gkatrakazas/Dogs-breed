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
              <h4 style={{fontWeight:'600'}}>Do dog breeds with specific <span className='blue'>height</span> and specific <span className='pink'>health problems</span> live longer?</h4>
              <div className='con-col'>
                <div className='coll'>
                  <p><strong><span className='blue'>Height</span> and <span className='pink'><span className='pink'>health problems</span></span> seem to affect dogs' <span className='green'><span className='green'>longevity</span></span>.</strong></p> 
                  <p>It seems that taller dog breeds live more years than shorter ones. Additionally, it seems that dog breeds with specific <span className='fn'>health problems</span> seem to have larger <span className='fn'>longevity</span>, while there are some <span className='fn'>health problems</span> that negatively affect dogs' breed <span className='fn'>longevity</span>. In the above chart, we can also see which <span className='fn'>health problems</span> are common among all dog breeds (i.e. the bubble’s size depicts the count of breeds). </p>
                  <p>On the right column we can see which <span className='fn'>health problems</span> affect dogs’ <span className='fn'>longevity</span> the most as well as which ones affect dogs’ <span className='fn'>longevity</span> the least.</p>
                </div>
                <div className='coll collr'>
                  <p> <strong>Top common <span className='pink'>health problems</span> with <span className='underline'>high average</span> <span className='green'>longevity</span>:</strong> </p> 
                  <ul>
                    <li><span className='pink'>Eye problems</span> (79 out of 103 dog breeds - <strong>12,9</strong> years of <span className='fn'>longevity</span>)</li>
                    <li><span className='pink'>Dental problems</span> (76 out of 103 dog breeds - <strong>13</strong> years of <span className='fn'>longevity</span>) </li>
                    <li><span className='pink'>Skin allergies</span> (72 out of 103 dog breeds - <strong>12,7</strong> years of <span className='fn'>longevity</span>)</li>
                  </ul>
                  <p>➤ The dog breeds with the above least fatal <span className='fn'>health problems</span> are the <strong>shortest ones</strong>.</p>

                  <p> <strong>Top common <span className='pink'>health problems</span> with <span className='underline'>low average</span> <span className='green'>longevity</span>: </strong> </p> 
                  <ul>
                    <li><span className='pink'>Cancer</span> ➤ It seems to be the <strong>most common</strong> among these 3 <span className='fn'>health problems</span> (17 out of 103 dog breeds with <strong>10,8</strong> years of average <span className='fn'>longevity</span>)</li>
                    <li><span className='pink'>Heart conditions</span> ➤ 9 out of 103 dog breeds with <strong>9,7</strong> years of average <span className='fn'>longevity</span> </li>
                    <li><span className='pink'>Elbow dysplasia</span> ➤ It seems to be the <strong>most severe</strong> among these 3 <span className='fn'>health problems</span> (<strong>8,8</strong> years of average <span className='fn'>longevity</span>), but it is extremely <strong>rare</strong> among dogs breeds (2 out of 103 dog breeds)</li>

                  </ul>

                  <p>➤ The dog breeds with the above most fatal <span className='fn'>health problems</span> are the <strong>tallest</strong> ones.</p>
                  <p><strong>Additional info</strong></p>
                  <p><strong>Top 3 <span className='underline'>most severe</span> <span className='pink'>health problems</span> (regardless of their frequency)</strong></p>
                  <ul>
                    <li><span className='pink'>Elbow dysplasia</span> ➤ <strong>8,8</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Heart conditions</span> ➤ <strong>9,7</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Cancer</span> ➤ <strong>10,8</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>
                  <p><strong>Top 3 <span className='underline'>least severe</span> health problems (regardless of their frequency)</strong></p>
                  <ul>
                    <li><span className='pink'>Bladder stones</span> ➤ <strong>13,8</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Intervertebral disc disease - Hereditary myopathy - Epilepsy - Diabetes</span> ➤ <strong>13,5</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Dental problems</span> ➤ <strong>13</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>
                </div>

              </div>
              
              <br></br>
              {/* second */}
              <h4><strong>Do dog breeds with specific <span className='blue'>height</span> and specific <span className='brown'>character traits</span> live longer?</strong></h4>
              <div className='con-col'>
                <div className='coll'>
                  <p><strong><span className='blue'>Height</span> and <span className='brown'>character traits</span> seem to affect dogs' <span className='green'>longevity</span>.</strong> </p> 
                  <p>Consequently, some dog breeds with concrete <span className='fn'>character traits</span> seem to have larger <span className='fn'>longevity</span>.  On the other hand there are <span className='fn'>character traits</span> that appear in dogs with lower <span className='fn'>longevity</span>.  In the above chart, we can also see which <span className='fn'>character traits</span> are common among all dog breeds (i.e. the bubble’s size depicts the count of breeds). The only difference between the 1st and the 2nd bubble chart is that instead of circles, we have squares.</p>
                </div>
                <div className='coll collr'>
                  <p> <strong>Top common <span className='brown'>character traits</span> with high average <span className='green'>longevity</span>:</strong> </p> 
                  <ul>
                    <li><span className='brown'>Intelligent</span> ➤ It seems to be the <strong>most common</strong> among all <span className='fn'>character traits</span> (95 out of 103 dog breeds with 12,6 years of average <span className='fn'>longevity</span>)</li>
                    <li><span className='brown'>Good-Natured</span> ➤ 87 out of 103 dog breeds with <strong>12,6</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Energetic</span> ➤ 81 out of 103 dog breeds with <strong>13</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>

                  <p> <strong><span className='brown'>Character traits</span> with the highest average <span className='green'>longevity</span> (Top 3 average <span className='green'>longevity</span> values):</strong> </p> 
                  <ul>
                    <li><span className='brown'>Social - charming - sensitive - curious- active</span> ➤ <strong>13,5</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Affectionate</span> ➤ <strong>13,3</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Playful</span> ➤ <strong>13,2</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>


                  <p> <strong>Top common <span className='brown'>Character traits</span> with the lowest average <span className='green'>longevity</span>:</strong> </p> 
                  <ul>
                    <li><span className='brown'>Strong</span> ➤ 2 out of 103 dog breeds - <strong>11</strong> years of <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Trainable-athletic</span> ➤ 2 out of 103 dog breeds - <strong>11</strong> years of <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Protective</span> ➤ 9 out of 103 dog breeds - <strong>10,3</strong> years of <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Gentle</span> ➤ It seems to be the <strong>most common</strong> among these <span className='fn'>character traits</span> (11 out of 103 dog breeds - <strong>9,8</strong> years of <span className='fn'>longevity</span>)</li>

                  </ul>

                  <p> <strong><span className='brown'>Character traits</span> with the lowest average <span className='green'>longevity</span> (Bottom 3 average <span className='green'>longevity</span> values):</strong></p> 
                  <ul>
                    <li><span className='brown'>Protective</span> ➤ <strong>10,3</strong> years of <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Gentle</span> ➤ <strong>9,8</strong> years of <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Brave</span> ➤ <strong>9</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>

                  <p> <strong><span className='brown'>Character traits</span> with the highest and lowest average height (regardless of their frequency):</strong></p> 
                    <p>➤ The dog breeds with the <span className='fn'>character traits</span> of <strong>social</strong>, <strong>sensitive</strong>, <strong>curious</strong>, <strong>active</strong> and <strong>brave</strong> are the <strong>shortest</strong> ones.</p>
                    <p>➤ The dog breeds that are <strong>gentle</strong> and <strong>protective</strong> are the <strong>tallest</strong> among all dog breeds.</p>

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
                  All the <span className='brown'>character traits</span> and <span className='pink'>health problems</span>(intelligence, playfulness, skin allergies, eye and dental problems etc) that give dog breeds high average <span className='green'>longevity</span>, due to the fact that appeared in many dog breeds it could be possible to calculate empirically the average <span className='green'>longevity</span> for all breeds.                 </p>           
                </li>
                <li>
                  <p>
                  Also it is occurred that the dog breeds that are intelligent, curious, social, sensitive or good-natured for example due to its high average <span className='green'>longevity</span>, they know how to live,  even as dog breeds with more activeness, for example energetic , active, playful.                </p>           
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
