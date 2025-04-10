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
  const [tempEducation, setTempEducation] = useState(null);
  const [experience, setExperience] = useState([]);
  const [tempExperience, setTempExperience] = useState(null);
  const [editingSection, setEditingSection] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [openSection, setOpenSection] = useState(null);

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
    setEditingSection(null);
    setOpenSection(null);
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
    setTempEducation(null);
    setEditingSection(null);
    setEditingIndex(null);
    setOpenSection(null);
  };

  const handleEducationChange = (data) => {
    setTempEducation(data);
  };

  const handleExperienceSubmit = (data) => {
    if (editingIndex !== null) {
      setExperience((prev) => 
        prev.map((item, i) => (i === editingIndex ? data : item))
      );
    } else {
      setExperience((prev) => [...prev, data]);
    }
    setTempExperience(null);
    setEditingSection(null);
    setEditingIndex(null);
    setOpenSection(null);
  };

  const handleExperienceChange = (data) => {
    setTempExperience(data);
  }

  const handleClear = () => {
    setGeneralInfo(null);
    setTempGeneralInfo(null);
    setEducation([]);
    setTempEducation(null);
    setExperience([]);
    setTempExperience(null);
    setEditingSection(null);
    setEditingIndex(null);
    setOpenSection(null);
  }

  const handleEditSection = (section, index = null) => { 
    setEditingSection(section);
    setEditingIndex(index);
    setOpenSection(section);
  }

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
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
          <div className="accordion-section">
            <h2 onClick={() => toggleSection('general')}>
              General Information {openSection === 'general' ? '▼' : '▶'}
            </h2>
            {openSection === 'general' && (
              <GeneralInfo 
                onSubmit={handleGeneralInfoSubmit}
                onChange={handleGeneralInfoChange}
                initialData={generalInfo}
              />
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection('education')}>
              Educational Experience {openSection === 'education' ? '▼' : '▶'}
            </h2>
            {openSection === 'education' && (
              <Education 
                onSubmit={handleEducationSubmit}
                onChange={handleEducationChange}
                initialData={
                  editingSection === 'education' && editingIndex !== null
                   ? education[editingIndex]
                   : null
               }
               isEditing={editingSection === 'education'}
               onAdd={() => handleEditSection('education')}
             />
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection('experience')}>
              Practical Experience {openSection === 'experience' ? '▼' : '▶' }
            </h2>
            {openSection === 'experience' && (
              <Experience 
                onSubmit={handleExperienceSubmit}
                onChange={handleExperienceChange}
                initialData={
                  editingSection === 'experience' && editingIndex !== null
                    ? experience[editingIndex]
                    : null
                } 
                isEditing={editingSection === 'experience'}
                onAdd={() => handleEditSection('experience')}
            />
            )}
          </div>
        </div>
        <div className="right-column">
            <CVDisplay
              generalInfo={generalInfo || tempGeneralInfo}
              education={[...(education || []), ...(tempEducation ? [tempEducation] : [])]}
              experience={[...(experience || []), ...(tempExperience ? [tempExperience] : [])]}
              onEdit={handleEditSection}
              onDelete={handleDelete}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
