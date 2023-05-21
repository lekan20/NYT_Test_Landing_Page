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
      </section>
        <div className='container'>
          <div className='wrapper'>
            <section className='slide'>
              <div className='layer1'>
              <nav>
              <div className='nytLink'>
                <a href='https://www.nytimes.com/'>
                  The New York Times
                </a>
              </div>
            </nav>
            <div className='firstPassage'>
              <p>{`Following the threads of our interests and passions, wherever they take us, is exhilarating. That’s why Times journalism not only reports on the issues that matter but illuminates how they’re connected — so we can marvel at the complexity of our world as we come to understand it better.`}</p>
              <br></br>
              <p>{`More of life brought to life.`}</p>
            </div>
              </div>
            </section>
            <section className='slide'>
            <h1>{'If you understand Sneakers'}</h1>
              <div className='layer2'>
                <img src={airJordan} alt='test'></img>
                <div className='link'>
                  <a href='https://www.nytimes.com/interactive/2021/10/15/style/sneaker-bots.html'>
                    <h4>Styles</h4>
                    <h3>The Fight for Sneakers</h3>
                    <p>By Daisuke Wakabayashi</p>
                  </a>
                </div>
              </div>
            </section>
            <section className='slide'>
              <div className='lastSlide'>
                <h2>{'More of life brought to life.'}</h2>
              </div>
            </section>
          </div>
        </div>
    </div>
  );
}

export default App;
