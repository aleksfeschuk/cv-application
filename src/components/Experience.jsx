import { useState, useEffect } from "react";
import '../styles/Experience.scss';

function Experience({ onSubmit, initialData, isEditing, onAdd }) {
    const [experience, setExperience] = useState({
        company: '',
        position: '',
        responsibilities: '',
        dateFrom: '',
        dateTo: '',
    });
    const [errors, setErrors] = useState({ 
        company: '', 
        position: '', 
        responsibilities: '',
        dateFrom: '',
        dateTo: ''
    });

    useEffect(() => {
        if(initialData) {
            setExperience(initialData);
        } else {
            setExperience({
                company: '',
                position: '',
                responsibilities: '',
                dateFrom: '',
                dateTo: '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience((prev) => ({ ...prev, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = { 
            company: '', 
            position: '', 
            responsibilities: '',
            dateFrom: '',
            dateTo: '',
        };
        let isValid = true;

        if(!experience.company.trim()) {
            newErrors.company = 'Company name is required';
            isValid = false;
        }
        if (!experience.position.trim()) {
            newErrors.position = 'Position title is required';
            isValid = false;
        }
        if (!experience.responsibilities.trim()) {
            newErrors.responsibilities = 'Responsibilities are required';
            isValid = false;
        }
        if (!experience.dateFrom.trim()) {
            newErrors.dateFrom = 'Start date is required';
            isValid = false;
        }
        if (!experience.dateTo.trim()) {
            newErrors.dateTo = 'End date is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(experience);
        }
    };

    return(
        <div className="experience">
            <h2>Practical Experience</h2>
            {!isEditing ? (
                <button className="add-button" onClick={onAdd}>
                    Add Experience
                </button>
            ) : (
                <form onSubmit={handleSubmit}>
                <div>
                    <label>Company Name:</label>
                    <input 
                        type="text"
                        name="company"
                        value={experience.company}
                        onChange={handleChange}
                        placeholder="Enter company name"
                    />
                    {errors.company && <span className="error">{errors.company}</span>}
                </div>
                <div>
                    <label>Position Title:</label>
                    <input 
                        type="text"
                        name="position"
                        value={experience.position}
                        onChange={handleChange}
                        placeholder="Enter company title"
                    />
                    {errors.position && <span className="error">{errors.position}</span>}
                </div>
                <div>
                    <label>Main Responsibilities:</label>
                    <textarea 
                        name="responsibilities" 
                        value={experience.responsibilities}
                        onChange={handleChange}
                        placeholder="Enter main resposibilities"
                    />
                    {errors.responsibilities && <span className="error">{errors.responsibilities}</span>}
                </div>
                <div>
                    <label>Date From:</label>
                    <input 
                        type="text"
                        name="dateFrom"
                        value={experience.dateFrom}
                        onChange={handleChange}
                        placeholder="Enter start date (e.g., 2025-01)"
                    />{errors.dateFrom && <span className="error">{errors.dateFrom}</span>}
                </div>
                <div>
                    <label>Date To:</label>
                    <input 
                        type="text"
                        name="dateTo"
                        value={experience.dateTo}
                        onChange={handleChange}
                        placeholder="Enter end date(e.g., 2025-01)"
                    />
                    {errors.dateTo && <span className="error">{errors.dateTo}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}

export default Experience;