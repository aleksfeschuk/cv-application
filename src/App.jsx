import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import CVDisplay from './components/CVDisplay.jsx';
import './styles/App.scss';

function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [editingSection, setEditingSection] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
    setEditingSection(null);
  };

  const handleEducationSubmit = (data) => {
    if (editingIndex !== null) {
      setEducation((prev) => 
        prev.map((item, i) => (i === editingIndex ? data : item))
      );
    } else {
      setEducation((prev) => [...prev, data]);
    }
    setEditingSection(null);
    setEditingIndex(null);
  };

  const handleExperienceSubmit = (data) => {
    if (editingIndex !== null) {
      setExperience((prev) => 
        prev.map((item, i) => (i === editingIndex ? data : item))
      );
    } else {
      setExperience((prev) => [...prev, data]);
    }
    setEditingSection(null);
    setEditingIndex(null);
  };

  const handleClear = () => {
    setGeneralInfo(null);
    setEducation([]);
    setExperience([]);
    setEditingSection(null);
    setEditingIndex(null);
  }

  const handleEditSection = (section, index = null) => { 
    setEditingSection(section);
    setEditingIndex(index);
  }

  return (
    <div className="app-container">
      <h1>CV Application</h1>
      <button className="clear-button" onClick={handleClear}>
        Clear All
      </button>
      {(!generalInfo || editingSection === 'general') && (
        <GeneralInfo 
          onSubmit={handleGeneralInfoSubmit}
          initialData={generalInfo}
        />
      )}
      <Education 
        onSubmit={handleEducationSubmit}
        initialData={
          editingSection === 'education' && editingIndex !== null
            ? education[editingIndex]
            : null
        }
        isEditing={editingSection === 'education'}
        onAdd={() => handleEditSection('education')}
      />
      <Experience 
        onSubmit={handleExperienceSubmit}
        initialData={
          editingSection === 'experience' && editingIndex !== null
            ? experience[editingIndex]
            : null
        } 
        isEditing={editingSection === 'experience'}
        onAdd={() => handleEditSection('experience')}
      />
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
