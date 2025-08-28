// src/App.jsx
import Hero from './components/Hero.jsx';
import Introduction from './components/Introduction.jsx';
import Sidebar from './components/Sidebar.jsx';
import EarlyInnovations from './components/EarlyInnovations.jsx';
import SpaceRace from './components/SpaceRace.jsx';
import ShuttleEra from './components/ShuttleEra.jsx';
import NewSpaceAge from './components/NewSpaceAge.jsx';
import FutureOfRockets from './components/FutureOfRockets.jsx';

function App() {
  return (
    <div className="bg-cosmic-dark">
      <Sidebar />
      <main>
        <Hero />

        {/* This wrapper ensures the following sections scroll OVER the sticky Hero */}
        <div className="relative z-10">
          <Introduction />

          {/* This inner wrapper gives the rest of the timeline its own background, ending the parallax effect */}
          <div className="bg-cosmic-dark">
            <EarlyInnovations />
            <SpaceRace />
            <ShuttleEra />
            <NewSpaceAge />
            <FutureOfRockets />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
