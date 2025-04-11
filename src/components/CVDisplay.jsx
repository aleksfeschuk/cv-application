
import { jsPDF } from 'jspdf';
import '../styles/CVDisplay.scss';

function CVDisplay({ generalInfo, education, experience, onEdit, onDelete }) {

    const generatePDF = () => {
        const doc = new jsPDF();
        let y = 20;
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        const maxLineWidth = pageWidth - 2 * margin;
    
        const addSectionTitle = (title) => {
            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(14);
            doc.setTextColor(44, 62, 80);
            doc.text(title, margin, y);
            y += 8;
        };
    
        const addTextBlock = (label, text) => {
            if (!text) return;
            const fullText = `${label}: ${text}`;
            const lines = doc.splitTextToSize(fullText, maxLineWidth);
            doc.text(lines, margin, y);
            y += lines.length * 6 + 2;
        };
    
        const addSpacer = (space = 8) => {
            y += space;
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        };
    
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(20);
        doc.setTextColor(44, 62, 80);
        doc.text('Resume', 105, y, { align: 'center' });
        y += 10;
    
        doc.setDrawColor(52, 152, 219);
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 10;
    
        // General Info
        if (generalInfo) {
            addSectionTitle('General Information');
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(12);
            doc.setTextColor(51, 51, 51);
    
            addTextBlock('Name', generalInfo.name);
            addTextBlock('Email', generalInfo.email);
            addTextBlock('Phone', generalInfo.phone);
            addTextBlock('Location', generalInfo.location);
    
            addSpacer();
        }
    
        // Education
        if (education.length > 0) {
            addSectionTitle('Education');
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(12);
            doc.setTextColor(51, 51, 51);
    
            education.forEach((edu, i) => {
                doc.setFont('Helvetica', 'bold');
                doc.setFontSize(12);
                doc.setTextColor(52, 152, 219);
                doc.text(`Education #${i + 1}`, margin, y);
                y += 6;
    
                doc.setFont('Helvetica', 'normal');
                doc.setFontSize(12);
                doc.setTextColor(51, 51, 51);
    
                addTextBlock('Location', edu.location);
                addTextBlock('School', edu.school);
                addTextBlock('Title of Study', edu.study);
                addTextBlock('Date', edu.date);
    
                addSpacer(10);
            });
        }
    
        // Experience
        if (experience.length > 0) {
            addSectionTitle('Experience');
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(12);
            doc.setTextColor(51, 51, 51);
    
            experience.forEach((exp, i) => {
                doc.setFont('Helvetica', 'bold');
                doc.setFontSize(12);
                doc.setTextColor(52, 152, 219);
                doc.text(`Experience #${i + 1}`, margin, y);
                y += 6;
    
                doc.setFont('Helvetica', 'normal');
                doc.setFontSize(12);
                doc.setTextColor(51, 51, 51);
    
                addTextBlock('Location', exp.location);
                addTextBlock('Company', exp.company);
                addTextBlock('Position', exp.position);
                addTextBlock('Responsibilities', exp.responsibilities);
                addTextBlock('From - To', `${exp.dateFrom} – ${exp.dateTo}`);
    
                addSpacer(10);
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
                    <div className="cv-entry">
                        <p>Name: {generalInfo.name}</p>
                        <p>Email: {generalInfo.email}</p>
                        <p>Phone: {generalInfo.phone}</p>
                        {generalInfo.location && <p>Location: {generalInfo.location}</p>}
                        <div className="button-group">
                            <button className="edit-button" onClick={() => onEdit('general')}>
                                    Edit
                            </button>
                        </div>
                    </div>
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