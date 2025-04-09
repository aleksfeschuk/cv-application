import '../styles/CVDisplay.scss';

function CVDisplay({ generalInfo, education, experience, onEdit }) {
    return (
        <div className="cv-display">
            <h2>Your CV</h2>
            {generalInfo && (
                <div className="cv-section">
                    <h3>General Information</h3>
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone: {generalInfo.phone}</p>
                    <button onClick={() => onEdit('general')}>Edit</button>
                </div>
            )}
            {education.length > 0 && (
                <div className="cv-section">
                    <h3>Education</h3>
                    {education.map((edu, index) => (
                        <div key={index} className="cv-entry">
                            <p>School: {edu.school}</p>
                            <p>Title of Study: {edu.study}</p>
                            <p>Date: {edu.date}</p>
                            <button onClick={() => onEdit('education', index)}>Edit</button>
                        </div>
                    ))}
                </div>
            )}
            {experience.length > 0 && (
                <div className="cv-section">
                    <h3>Experience</h3>
                    {experience.map((exp, index) => (
                        <div key={index} className='cv-entry'>
                            <p>Company: {exp.company}</p>
                            <p>Position: {exp.position}</p>
                            <p>Responsibilities: {exp.responsibilities}</p>
                            <p>From: {exp.dateFrom} To: {exp.dateTo}</p>
                            <button onClick={() => onEdit('experience', index)}>Edit</button>
                        </div>
                    ))}
                </div>
            )}
            {!generalInfo && education.length === 0 && experience.length === 0 && (
                <p>No data to display. Please fill out the sections above</p>
            )}
        </div>
    );
}

export default CVDisplay;