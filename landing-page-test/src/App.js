import logo from './logo.svg';
import airJordan from './AirJordan1.png';
import HorizontalScroll from 'react-scroll-horizontal'
import './App.css';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const child = { width: `300em`, height: `100%`}
  return (
    <div>
      {/* <Parallax pages={5}>
      <ParallaxLayer
          offset={0}
          speed={1}
          factor={2} 
          style={{
            backgroundColor: `#000000`,
            backgroundSize: `cover`
            }}
        >
          <div className='test'>
          <img src={airJordan} alt="Norway"/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1}
          style={{
            backgroundColor:`blue`,
            backgroundImage: `url(${airJordan})`
          }}
          >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          style={{
            backgroundColor: `black`
          }}
        >
          <p>Following the threads of our interests and passions, wherever they take us, is exhilarating. That’s why Times journalism not only reports on the issues that matter but illuminates how they’re connected — so we can marvel at the complexity of our world as we come to understand it better.</p>
        </ParallaxLayer>
      </Parallax> */}
      <div className='App'>
        <HorizontalScroll>
          <div style={child}>
            <h1>Hello World</h1>
          </div>
        </HorizontalScroll>
      </div>

      
    </div>
  );
}

export default App;
