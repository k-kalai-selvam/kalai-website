import About from './about/About';
import './App.css';
import Contact from './contact/Contact';
import Header from './header/Header';
import Portfolio from './portfolio/Portfolio';
import Skill from './skills/Skill';

function App() {
  return (
    <div>
      
      <Header/>
      <Portfolio/>
      {/* <Skill/> */}
      <About/>
      
      <Contact/>
    </div>
  );
}

export default App;
