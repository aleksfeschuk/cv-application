import { useState } from "react";
import '../styles/Education.scss';

function Education({ onSubmit }) {
    const [education, setEducation] = useState({
        school: '',
        study: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(education);
        setEducation({ school: '', study: '', date: ''});
    };


    return (
        <div className="education">
            <h2>Educational Experience</h2>
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
        </div>
    );
}

export default Education;