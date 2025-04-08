import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import CVDisplay from './components/CVDisplay.jsx';
import './styles/App.scss';

function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationSubmit = (data) => {
    setEducation(data);
  };

  const handleExperienceSubmit = (data) => {
    setExperience(data);
  };

  return (
    <div className="app-container">
      <h1>CV Application</h1>
      <GeneralInfo onSubmit={handleGeneralInfoSubmit}/>
      <Education onSubmit={handleEducationSubmit}/>
      <Experience onSubmit={handleExperienceSubmit}/>
      <CVDisplay
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
