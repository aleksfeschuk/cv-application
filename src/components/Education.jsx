import { useState } from "react";
import '../styles/Education.scss';

function Education() {
    const [education, setEducation] = useState({
        school: '',
        study: '',
        date: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleEdit = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="education">
            <h2>Educational Experience</h2>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>School Name:</label>
                        <input 
                            type="text" 
                            name="school"
                            value={education.school}
                            onChange={handleChange}
                            placeholder="Enter school name"
                        />
                    </div>
                    <div>
                        <label>Title of Study:</label>
                        <input 
                            type="text" 
                            name="study"
                            value={education.study}
                            onChange={handleChange}
                            placeholder="Enter title of study"
                        />
                    </div>
                    <div>
                        <label>Date of Study:</label>
                        <input 
                            type="text" 
                            name="date"
                            value={education.date}
                            onChange={handleChange}
                            placeholder="Enter date (e.g., 2018-2025)"
                        />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            ): (
                <div className="education-display">
                    <p>School: {education.school}</p>
                    <p>Title of Study: {education.study}</p>
                    <p>Date: {education.date}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default Education;