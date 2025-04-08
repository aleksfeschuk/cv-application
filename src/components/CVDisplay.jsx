import '../styles/CVDisplay.scss';

function CVDisplay({ generalInfo, education, experience }) {
    return (
        <div className="cv-display">
            <h2>Your CV</h2>
            {generalInfo && (
                <div className="cv-section">
                    <h3>General Information</h3>
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone: {generalInfo.phone}</p>
                </div>
            )}
            {education && (
                <div className="cv-section">
                    <h3>Education</h3>
                    <p>School: {education.school}</p>
                    <p>Title of Study: {education.study}</p>
                    <p>Date: {education.date}</p>
                </div>
            )}
            {experience && (
                <div className="cv-section">
                    <h3>Experience</h3>
                    <p>Company: {experience.company}</p>
                    <p>Position: {experience.position}</p>
                    <p>Responsibilities: {experience.responsibilities}</p>
                    <p>From: {experience.dateFrom} To: {experience.dateTo}</p>
                </div>
            )}
            {!generalInfo && !education && !experience && (
                <p>No data to display. Please fill out the sections above</p>
            )}
        </div>
    );
}

export default CVDisplay;