import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import CVDisplay from './components/CVDisplay.jsx';
import './styles/App.scss';

function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [tempGeneralInfo, setTempGeneralInfo] = useState(null);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [editingSection, setEditingSection] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
    setEditingSection(null);
  };

  const handleGeneralInfoChange = (data) => {
    setTempGeneralInfo(data);
  }

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
    setTempGeneralInfo(null);
    setEducation([]);
    setExperience([]);
    setEditingSection(null);
    setEditingIndex(null);
  }

  const handleEditSection = (section, index = null) => { 
    setEditingSection(section);
    setEditingIndex(index);
  }

  const handleDelete = (section, index) => {
    if (section === 'education') {
      setEducation((prev) => prev.filter((_, i) => i !== index));
    } else if (section === 'experience') {
      setExperience((prev) => prev.filter((_, i) => i !== index));
    }
  };



  return (
    <div className="app-container">
      <h1>CV Application</h1>
      <div className="button-group">
        <button className="clear-button" onClick={handleClear}>
          Clear Resume
        </button>
      </div>
      <div className="columns">
        <div className="left-column">
          {(!generalInfo || editingSection === 'general') && (
            <GeneralInfo 
              onSubmit={handleGeneralInfoSubmit}
              onChange={handleGeneralInfoChange}
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
        </div>
        <div className="right-column">
            <CVDisplay
              generalInfo={generalInfo || tempGeneralInfo}
              education={education}
              experience={experience}
              onEdit={handleEditSection}
              onDelete={handleDelete}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
