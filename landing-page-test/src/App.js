import logo from './logo.svg';
import airJordan from './AirJordan1.png';
import HorizontalScroll from 'react-scroll-horizontal'
import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  // const child = { width: `300em`, height: `100%`}
  return (
    <div className='App'>
      <h1>The New York Times</h1>
      
        <div className='container'>
          <div className='wrapper'>
            <div className='slide'>
              <div className='layer l1'></div>
              <div className='layer l2'></div>
              <div className='layer l3'></div>
            </div>
            <div className='slide'></div>
          </div>
        </div>
      {/* <Parallax 
        pages={10} 
        style={{
          backgroundColor: `#000000`,
          backgroundSize: `cover`
        }}>
      <ParallaxLayer
          offset={0}
          speed={1}
          factor={2} 
        >
          <div>
            <div>
            <p className='title'>Following the threads of our interests and passions, wherever they take us, is exhilarating. That’s why Times journalism not only reports on the issues that matter but illuminates how they’re connected — so we can marvel at the complexity of our world as we come to understand it better.</p>
            </div>
            <div>
              <p className='title'>More of life brought to life.</p>
            </div>
          </div>
          
        </ParallaxLayer>
        <ParallaxLayer 
              offset={1}
              >
              <div className='test'>
                <img src={airJordan} alt="placeHolder"/>
              </div>
              <div className='sneakersText'>
                <a href='www.nba.com'>
                  <h4>Styles</h4>
                  <h3>The Fight for Sneakers</h3>
                  <p>By Daisuke Wakabayashi Oct. 15, 2021</p>
                </a>
              </div>
            </ParallaxLayer>

            <ParallaxLayer 
              offset={8}
            >
              <h2 className='finalHeader'>More of life brought to life.</h2>
            </ParallaxLayer>
            <ParallaxLayer 
              offset={9}
            >
              <h2 className='finalHeader'>LAST PAGE</h2>
            </ParallaxLayer> */}

        
        {/* <div className='horizontalContainer'>
          <div className='wrapper'>
            
          </div>
        </div> */}
        
      {/* </Parallax> */}
      {/* <div className='App'>
        <HorizontalScroll>
          <div style={child}>
            <h1>Hello World</h1>
          </div>
        </HorizontalScroll>
      </div> */}

      
    </div>
  );
}

export default App;
