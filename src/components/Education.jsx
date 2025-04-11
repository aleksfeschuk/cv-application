import { useState, useEffect } from "react";
import '../styles/Education.scss';

function Education({ onSubmit, onChange, initialData, isEditing, onAdd }) {
    const [education, setEducation] = useState({
        school: '',
        study: '',
        date: '',
        location: '',
    });
    const [errors, setErrors] = useState({ school: '', study: '', date: '', location: ''});

    useEffect(() => {
        if (initialData) {
            setEducation(initialData)
        } else {
            setEducation({school: '', study: '', date: '', location: ''});
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prev) => {
            const updatedEducation = { ... prev, [name]: value};
            onChange(updatedEducation);
            return updatedEducation;
        });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = { school: '', study: '', date: '', location: ''};
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


    const handleCancel = () => {
        setEducation({ school: '', study: '', date: '', location: ''});
        setErrors({ school: '', study: '', date: '', location: ''});
        onAdd();
    }

    return (
        <div className="education">
            {!isEditing ? (
                <button className="add-button" onClick={onAdd}>
                    Add Education
                </button>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Location:</label>
                        <input 
                            type="text" 
                            name="location"
                            value={education.location}
                            onChange={handleChange}
                            placeholder="Enter location (e.g., Toronto, ON, Canada)"
                        />
                        {errors.location && <span className="error">{errors.location}</span>}
                    </div>
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
                    </div>
                    <div className="button-group">
                        <button type="submit">Submit</button>
                        <button type="button" className="cancel-button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Education;