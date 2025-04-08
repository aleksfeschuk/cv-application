import { useState, useEffect } from "react";
import '../styles/Education.scss';

function Education({ onSubmit, initialData }) {
    const [education, setEducation] = useState({
        school: '',
        study: '',
        date: '',
    });
    const [errors, setErrors] = useState({ school: '', study: '', date: ''});

    useEffect(() => {
        if(initialData) {
            setEducation(initialData)
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prev) => ({ ...prev, [name]: value}));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = { school: '', study: '', date: ''};
        let isValid = true;

        if(!education.school.trim()) {
            newErrors.school = 'School name is required';
            isValid = false;
        }
        if (!education.study.trim()) {
            newErrors.study = 'Title of study is required';
            isValid = false;
        }
        if (!education.date.trim()) {
            newErrors.date = 'Date of study is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(education);
        }
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
                    {errors.school && <span className="error">{errors.school}</span>}
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
                    {errors.study && <span className="error">{errors.study}</span>}
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
                    {errors.date && <span className="error">{errors.date}</span>}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Education;