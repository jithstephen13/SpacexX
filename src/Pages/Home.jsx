import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from '../textBlock';
import '../App.css';
import Navbar from '../components/Navbar';
 
 

function Home() {
  return (
    <div className="app">

      
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
      
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
          <Navbar/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer  offset={0} speed={0.45}> 
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
     
      </Parallax>
    </div>
  );
}

export default Home;