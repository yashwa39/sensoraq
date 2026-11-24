import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ProcessFlow from './components/ProcessFlow';
import Technology from './components/Technology';
import QualityDemo from './components/QualityDemo';
import ConveyorAnimation from './components/ConveyorAnimation';
import Benefits from './components/Benefits';
import Applications from './components/Applications';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-forest">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ProcessFlow />
      <Technology />
      <QualityDemo />
      <ConveyorAnimation />
      <Benefits />
      <Applications />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
