import { jsPDF } from 'jspdf';
import '../styles/CVDisplay.scss';

function CVDisplay({ generalInfo, education, experience, onEdit }) {
   const generatePDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;

    doc.setFontSize(18);
    doc.text('Curriculum Vitae', 105, yPosition, { align: 'center' });
    yPosition += 15;

    if (generalInfo) {
        doc.setFontSize(14);
        doc.text('General Information', 20, yPosition);
        yPosition += 10;
        doc.setFontSize(12);
        doc.text(`Name: ${generalInfo.email}`, 20, yPosition);
        yPosition += 7;
        doc.text(`Email: ${generalInfo.email}`, 20, yPosition);
        yPosition += 7;
        doc.text(`Phone: ${generalInfo.phone}`, 20, yPosition);
        yPosition += 15;
    }

    if (experience.length > 0) {
        doc.setFontSize(14);
        doc.text('Experience', 20, yPosition);
        yPosition += 10;
        experience.forEach((exp, index) => {
            doc.setFontSize(12);
            doc.text(`Experience #${index + 1}`, 20, yPosition);
            yPosition += 7;
            doc.text(`Company: ${exp.company}`, 20, yPosition);
            yPosition += 7;
            doc.text(`Position: ${exp.position}`, 20, yPosition);
            yPosition += 7;

            const responsibilities = doc.splitTextToSize(
                `Responsibilities: ${exp.responsibilities}`,
                170
            );
            doc.text(responsibilities, 20, yPosition);
            yPosition += responsibilities.length * 7 + 7;

            doc.text(`From: ${exp.dateFrom} To: ${exp.dateTo}`, 20, yPosition);
            yPosition += 15;
        });
    }
    doc.save('cv.pdf');
   };
   return (
    <div className="cv-display">
        <h2>Your CV</h2>
        <button className='download-button' onClick={generatePDF}>
            Download CV as PDF
        </button>
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