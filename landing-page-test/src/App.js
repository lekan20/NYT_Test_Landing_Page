import logo from './logo.svg';
import airJordan from './AirJordan1.png';
import HorizontalScroll from 'react-scroll-horizontal'
import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  // const child = { width: `300em`, height: `100%`}
  return (
    <div className='App'>
      <section>
        <nav>
          <div>
            <a href='https://www.nytimes.com/'>
              The New York Times
            </a>
          </div>
        </nav>
      </section>
        <div className='container'>
          <div className='wrapper'>
            <section className='slide'>
              <div className='layer l1'>
                <p>{`Following the threads of our interests and passions, wherever they take us, is exhilarating. That’s why Times journalism not only reports on the issues that matter but illuminates how they’re connected — so we can marvel at the complexity of our world as we come to understand it better.`}</p>
                <br></br>
                <p>{`More of life brought to life.`}</p>
              </div>
            </section>
            <section className='slide'>
              <h1>PLACE YOUR CONTENT HERE</h1>
              <img src={airJordan} alt='test'></img>
              <div className='layer l3'></div>
            </section>
          </div>
        </div>
    </div>
  );
}

export default App;
