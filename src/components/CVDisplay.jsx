import { jsPDF } from 'jspdf';
import '../styles/CVDisplay.scss';

function CVDisplay({ generalInfo, education, experience, onEdit, onDelete }) {
   const generatePDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(44, 62, 80);
    doc.text('Curriculum Vitae', 105, yPosition, { align: 'center' });
    yPosition += 10;

    doc.setLineWidth(0.5);
    doc.setDrawColor(52, 152, 219);
    doc.line(20, yPosition, 190, yPosition);
    yPosition += 15;

    if (generalInfo) {
        doc.setFont('Helvetica', 'bold')
        doc.setFontSize(14);
        doc.setTextColor(44, 62, 80);
        doc.text('General Information', 20, yPosition);
        yPosition += 8;

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(12);
        doc.setTextColor(51, 51, 51);
        doc.text(`Name: ${generalInfo.name}`, 20, yPosition);
        yPosition += 6;
        doc.text(`Email: ${generalInfo.email}`, 20, yPosition);
        yPosition += 6;
        doc.text(`Phone: ${generalInfo.phone}`, 20, yPosition);
        if (generalInfo.location) {
            doc.text(`Location: ${generalInfo.location}`, 20, yPosition);
            yPosition += 15;
        } else {
            yPosition += 15;
        }
    }

    if (education.length > 0) {
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(44, 62, 80);
        doc.setTextColor(44, 62, 80);
        doc.text('Education', 20, yPosition);
        yPosition += 8;    
    
        education.forEach((edu, index) => {
            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(12);
            doc.setTextColor(52, 152, 219);
            doc.text(`Education #${index + 1}`, 20, yPosition);
            yPosition += 6;

            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(12);
            doc.setFontSize(51, 51, 51);
            if (edu.location) {
                doc.text(`Location: ${edu.location}`, 20, yPosition);
                yPosition += 6;
            }
            doc.text(`School: ${edu.school}`, 20, yPosition);
            yPosition += 6;
            doc.text(`Title of study: ${edu.study}`, 20, yPosition);
            yPosition += 6;
            doc.text(`Date: ${edu.date}`, 20, yPosition);
            yPosition += 15;
        })
    }

    if (experience.length > 0) {
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(44, 62, 80);
        doc.text('Experience', 20, yPosition);
        yPosition += 8;

        experience.forEach((exp, index) => {
            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(12);
            doc.setTextColor(52, 152, 219);
            doc.text(`Experience #${index + 1}`, 20, yPosition);
            yPosition += 6;

            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(12);
            doc.setTextColor(51, 51, 51);
            if (generalInfo.location) {
                doc.text(`Location: ${exp.location}`, 20, yPosition);
                yPosition += 6;
            }
            doc.text(`Company: ${exp.company}`, 20, yPosition);
            yPosition += 6;
            doc.text(`Position: ${exp.position}`, 20, yPosition);
            yPosition += 7;

            const responsibilities = doc.splitTextToSize(
                `Responsibilities: ${exp.responsibilities}`,
                170
            );
            doc.text(responsibilities, 20, yPosition);
            yPosition += responsibilities.length * 6 + 6;

            doc.text(`From: ${exp.dateFrom} To: ${exp.dateTo}`, 20, yPosition);
            yPosition += 15;
        });
    }
    doc.save('cv.pdf');
   };
   return (
    <div className="cv-display">
        <div className="cv-header">
            <h2>Your CV</h2>
        </div>
        <div className="cv-content">
        <button className='download-button' onClick={generatePDF}>
            Download CV as PDF
        </button>
        {generalInfo && (
            <div className="cv-section">
                <h3>General Information</h3>
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Phone: {generalInfo.phone}</p>
                {generalInfo.location && <p>Location: {generalInfo.location}</p>}
                <button onClick={() => onEdit('general')}>Edit</button>
            </div>
        )}
        {education.length > 0 && (
            <div className="cv-section">
                <h3>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className="cv-entry">
                        {edu.location && <p>Location: {edu.location}</p>}
                        <p>School: {edu.school}</p>
                        <p>Title of Study: {edu.study}</p>
                        <p>Date: {edu.date}</p>
                        <div className="button-group">
                            <button onClick={() => onEdit('education', index)}>Edit</button>
                            <button 
                                className='delete-button'
                                onClick={() => onDelete('education', index)}
                                >
                                    Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}
        {experience.length > 0 && (
            <div className="cv-section">
                <h3>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='cv-entry'>
                        {exp.location && <p>Location: {exp.location}</p>}
                        <p>Company: {exp.company}</p>
                        <p>Position: {exp.position}</p>
                        <p>Responsibilities: {exp.responsibilities}</p>
                        <p>From: {exp.dateFrom} To: {exp.dateTo}</p>
                        <div className="button-group">
                            <button onClick={() => onEdit('experience', index)}>Edit</button>
                            <button 
                                className='delete-button'
                                onClick={() => onDelete('experience', index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}
        {!generalInfo && education.length === 0 && experience.length === 0 && (
            <p>No data to display. Please fill out the sections above</p>
        )}
        </div>
    </div>
    );
}

export default CVDisplay;