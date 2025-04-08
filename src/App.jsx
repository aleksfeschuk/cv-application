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

  const [editingSection, setEditingSection] = useState(null);

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
    setEditingSection(null);
  };

  const handleEducationSubmit = (data) => {
    setEducation(data);
    setEditingSection(null);
  };

  const handleExperienceSubmit = (data) => {
    setExperience(data);
    setEditingSection(null);
  };

  const handleEditSection = (section) => {
    setEditingSection(section);
  }

  return (
    <div className="app-container">
      <h1>CV Application</h1>
      {(!generalInfo || editingSection === 'general') && (
        <GeneralInfo 
          onSubmit={handleGeneralInfoSubmit}
          initialData={generalInfo}
        />
      )}
      {(!education || editingSection === 'education') && (
        <Education 
          onSubmit={handleEducationSubmit}
          initialData={education}
        />
      )}
      {(!experience || editingSection === 'experience') && (
        <Experience 
          onSubmit={handleExperienceSubmit}
          initialData={experience}
        />
      )}
      <CVDisplay
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        onEdit={handleEditSection}
      />
    </div>
  );
}

export default App;
