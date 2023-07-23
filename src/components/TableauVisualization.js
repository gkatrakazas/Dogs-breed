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
                  <p>In the adjacent column we can see which <span className='fn'>health problems</span> affect dogs’ <span className='fn'>longevity</span> the most as well as which ones affect dogs’ <span className='fn'>longevity</span> the least.</p>
                </div>
                <div className='coll collr'>

                  <p> <strong>Top common (high frequency) <span className='pink'>health problems</span> with <span className='underline'>high average</span> <span className='green'>longevity</span>:</strong> </p> 
                  <ul>
                    <li><span className='pink'>Eye problems</span> ➤ 79 out of 103 dog breeds - <strong>12,9</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Dental problems</span> ➤ 76 out of 103 dog breeds - <strong>13</strong> years of average <span className='fn'>longevity</span> </li>
                    <li><span className='pink'>Skin allergies</span> ➤ 72 out of 103 dog breeds - <strong>12,7</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>

                  <p> <strong>Top common (high frequency) <span className='pink'>health problems</span> with <span className='underline'>low average</span> <span className='green'>longevity</span>: </strong> </p> 
                  <ul>
                    <li><span className='pink'>Cancer</span> ➤ It seems to be the <strong>most common</strong> among these 3 <span className='fn'>health problems</span> (17 out of 103 dog breeds - <strong>10,8</strong> years of average <span className='fn'>longevity</span>)</li>
                    <li><span className='pink'>Heart conditions</span> ➤ 9 out of 103 dog breeds - <strong>9,7</strong> years of average <span className='fn'>longevity</span> </li>
                    <li><span className='pink'>Elbow dysplasia</span> ➤ It seems to be the <strong>most severe</strong> among these 3 <span className='fn'>health problems</span> (<strong>8,8</strong> years of average <span className='fn'>longevity</span>), but fortunately it is extremely <strong>rare</strong> among dogs breeds (2 out of 103 dog breeds)</li>

                  </ul>

                  <p><strong>Top 3 <span className='pink'>health problems</span> with lowest lifespan (regardless of their frequency):</strong></p>
                  <ul>
                    <li><span className='pink'>Elbow dysplasia</span> ➤ <strong>8,8</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Heart conditions</span> ➤ <strong>9,7</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Cancer</span> ➤ <strong>10,8</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>

                  <p><strong><span className='pink'>Health problems</span> grouped by top 3 higher lifespan (regardless of their frequency):</strong></p>
                  <ul>
                    <li><span className='pink'>Bladder stones</span> ➤ <strong>13,8</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Intervertebral disc disease - Hereditary myopathy - Epilepsy - Diabetes</span> ➤ <strong>13,5</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='pink'>Dental problems</span> ➤ <strong>13</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>

                  <p><strong> <span className='blue'>Height</span> and <span className='green'>longevity</span></strong></p>
                  <p>➤ The dog breeds with the above <strong>most</strong> fatal health problems are <strong>the tallest</strong> ones.</p>
                  <p>➤ The dog breeds with the above <strong>least</strong> fatal health problems have <strong>low</strong> average height.</p>

                </div>



              </div>
              
              <br></br>
              {/* second */}
              <h4><strong>Do dog breeds with specific <span className='blue'>height</span> and specific <span className='brown'>character traits</span> live longer?</strong></h4>
              <div className='con-col'>

                <div className='coll'>
                  <p><strong><span className='blue'>Height</span> and <span className='brown'>character traits</span> seem to affect dogs' <span className='green'>longevity</span>.</strong> </p> 
                  <p>Consequently, some dog breeds with concrete <span className='fn'>character traits</span> seem to have higher <span className='fn'>longevity</span>. On the other hand there are <span className='fn'>character traits</span> that appear in dogs with lower <span className='fn'>longevity</span>. In the above 2nd chart, we can also see which <span className='fn'>character traits</span> are common among all dog breeds (i.e. the bubble’s size depicts the count of breeds). The only difference between the 1st and the 2nd bubble chart is that instead of circles, we have squares.</p>
                  <p>In the adjacent column we can see which <span className='fn'>character traits</span> affect dogs’ <span className='fn'>longevity</span> the most as well as which ones affect dogs’ <span className='fn'>longevity</span> the least.</p>
                </div>

                <div className='coll collr'>
                  <p><strong>Top common (high frequency) <span className='brown'>character traits</span> with <span className='underline'>high average</span> <span className='green'>longevity</span>:</strong> </p> 
                  <ul>
                    <li><span className='brown'>Intelligent</span> ➤ <strong>95</strong> out of 103 dog breeds - <strong>12,6</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Good-Natured</span> ➤ <strong>87</strong> out of 103 dog breeds - <strong>12,6</strong> years of average <span className='fn'>longevity</span></li>
                    <li><span className='brown'>Energetic</span> ➤ <strong>81</strong> out of 103 dog breeds - <strong>13</strong> years of average <span className='fn'>longevity</span></li>
                  </ul>

                  <p><strong>Top common (high frequency) <span className='brown'>character traits</span> with the <span className='underline'>lowest average</span> <span className='green'>longevity</span>:</strong> </p> 
                  <ul>
                    <li> <span className='brown'>Gentle</span> ➤ It seems to be the <strong>most common</strong> among these character traits because <strong>11</strong> out of 103 dog breeds  - <strong>9,8</strong> years of average <strong>longevity</strong></li>
                    <li> <span className='brown'>Protective</span> ➤ <strong>9</strong> out of 103 dog breeds - <strong>10,3</strong> years of average <strong>longevity</strong></li>
                    <li> <span className='brown'>Strong</span> ➤ <strong>2</strong> out of 103 dog breeds - <strong>11</strong> years of average <strong>longevity</strong></li>
                    <li> <span className='brown'>Trainable-athletic</span> ➤ <strong>2</strong> out of 103 dog breeds - <strong>11</strong> years of average <strong>longevity</strong></li>
                  </ul>

                  <p><strong> <span className='brown'>Character traits</span> grouped by top 3 <span className='underline'>higher</span> lifespan (regardless of the frequency):</strong> </p> 
                  <ul>
                    <li> <span className='brown'>Social - charming - sensitive - curious- active- hypoallergenic</span> ➤ <strong>13,5</strong> years of average <strong>longevity</strong></li>
                    <li> <span className='brown'>Affectionate</span> ➤ <strong>13,3</strong> years of average <strong>longevity</strong></li>
                    <li> <span className='brown'>Playful</span> ➤ <strong>13,2</strong> years of average <strong>longevity</strong></li>
                  </ul>

                  <p><strong> <span className='brown'>Character traits</span> grouped by top 3 <span className='underline'>lower</span> lifespan (regardless of the frequency):</strong> </p> 
                  <ul>
                    <li> <span className='brown'>Brave-calm</span> ➤ <strong>9</strong> years of average <strong>longevity</strong></li>
                    <li> <span className='brown'>Gentle</span> ➤ <strong>9,8</strong> years of average <strong>longevity</strong></li>
                    <li> <span className='brown'>Protective</span> ➤ <strong>10,3</strong> years of average <strong>longevity</strong></li>
                  </ul>

                  <p><strong> <span className='blue'>Height</span> and <span className='green'>longevity</span></strong></p>
                  <p>➤ The most dog breeds that live a few years are generally <strong>taller</strong>.</p>
                  <p>➤ The most dog breeds that live many years are generally <strong>shorter</strong>.</p>

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
              <h4 style={{fontWeight:'600'}}>Which combination of <span className='pink'>health problems</span> and <span className='brown'>character traits</span> affect dogs' <span className='green'>longevity</span>? </h4>
              <p style={{fontStyle:'italic'}}>In the above two bar charts,  it is easier to see which <strong> groups of health problems and character traits are the most common among all dog breeds</strong> (i.e. the bar’s size depicts the count of breeds).</p>
              <p><strong>Most common combination of <span className='pink'>health problems</span> and <span className='brown'>character traits</span></strong></p>              
              <p style={{fontStyle:'italic'}}>Health problems concerning dogs’ <span className='pink'>teeth</span>, <span className='pink'>skin</span> and <span className='pink'>eyes</span> seem to appear most of the time in dogs, while also most dogs seem to have a nice personality: they are <span className='brown'>intelligent</span>, <span className='brown'>good-natured</span>, <span className='brown'>energetic</span> and <span className='brown'>playful</span>.</p>

              <p style={{fontStyle:'italic'}}>➤ Most significantly, the above given characteristics relate to a high <strong>average longevity</strong> that ranges from <strong>12,6</strong> to <strong>13,2</strong> years, so we can infer that most dogs live between <strong>12,6</strong> and <strong>13,2</strong> years.</p>
              <p style={{fontStyle:'italic'}}>➤ It is very interesting the fact that most dog breeds (95 out 103) which also have a high <strong>average longevity</strong> are <span className='brown'>intelligent</span>. A possible reason for that is that they are smart enough to protect themselves and they may know better how to survive.</p>

              <p><strong> <span className='brown'>Character traits</span> and <span className='pink'>health problems</span> grouped based on <span className='underline'>highest</span> <span className='green'>longevity</span></strong></p>
              <p style={{fontStyle:'italic'}}>Dog breeds that are <span className='brown'>social, charming, sensitive, curious, active</span> and <span className='brown'>hypoallergenic</span> and also suffering from <span className='pink'>bladder stones, intervertebral disc disease, hereditary myopathy, epilepsy</span> and <span className='pink'>diabetes</span> seem to have the highest <strong>average longevity</strong> that ranges from <strong>13,3</strong> to <strong>13,8</strong> years, but the aforementioned <strong>character traits</strong> and <strong>health problems</strong> are generally <strong>rare</strong> among all dog breeds.</p>

              <p><strong> <span className='brown'>Character traits</span> and <span className='pink'>health problems</span> grouped based on <span className='underline'>lowest</span> <span className='green'>longevity</span></strong></p>
              <p style={{fontStyle:'italic'}}>Dog breeds that suffer from <span className='pink'>elbow dysplasia, heart conditions</span> and <span className='pink'>cancer</span> and they are <span className='brown'>brave, gentle, calm, protective, athletic, patient</span> and <span className='brown'>trainable</span> seem to have the lowest longevity that ranges from <strong>8,7</strong> to <strong>11</strong> years.</p>

              <p style={{fontStyle:'italic'}}>➤ A possible reason that <span className='brown'>athletic, trainable</span> and <span className='brown'>protective</span> dog breeds have a very low average longevity is that they may risk their lives or get involved in fights more easily.</p>
              <p style={{fontStyle:'italic'}}>➤ ‘’<span className='brown'>Brave’’</span> and ‘’<span className='brown'>calm’’</span> character traits appear only <strong>once</strong> among all 103 dog breeds but they have the most negative effect on average <strong>longevity</strong>. The most interesting fact is that these two character traits are very different from each other. For example a brave dog could possibly risk its life, but a calm dog may not do the same. </p>

              <br></br>
              <h4 style={{textDecoration:'underline'}}><strong>How can these data visualization could help the users</strong></h4>
              <p style={{fontStyle:'italic'}}>These data visualizations could help the users, who already have a dog (or dogs), to see the corresponding character traits and health problems of their dog (or dogs), if they know their longevity and their height.  It could also help someone who wants to get a dog (or dogs) to carefully examine its respective character traits and health problems based on its corresponding longevity and height. So he could make the right decision and he could be better prepared for the new family member!</p>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TableauVisualization;
