import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import CVDisplay from './components/CVDisplay.jsx';

function App() {
  return (
    <div className="app-container">
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
      <CVDisplay />
    </div>
  );
}

export default App;
