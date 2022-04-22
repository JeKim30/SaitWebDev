import './App.css';

import Header from './Header.js';
import Education from './Education';
import TechnologySummary from './TechnologySummary';
import WorkExperience from './WorkExperience';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="container">
        <div className="row mt-3">

          <div className="col-md">
            <WorkExperience />
          </div>

          <div className="col-md">
            <TechnologySummary />
          </div>


        </div>
        <div className="row mt-3">

          <div className="col-md">
            <Projects />
          </div>

          <div className="col-md">
            <Education />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
