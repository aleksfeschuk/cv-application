import { useState } from "react";
import '../styles/Experience.scss';

function Experience({ onSubmit }) {
    const [experience, setExperience] = useState({
        company: '',
        position: '',
        responsibilities: '',
        dateFrom: '',
        dateTo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(experience);
        setExperience({
            company: '',
            position: '',
            responsibilities: '',
            dateFrom: '',
            dateTo: '',
        });
    };

    return(
        <div className="experience">
            <h2>Practical Experience</h2>
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
                </div>
                <div>
                    <label>Main Responsibilities:</label>
                    <textarea 
                        name="responsibilities" 
                        value={experience.responsibilities}
                        onChange={handleChange}
                        placeholder="Enter main resposibilities"
                    />
                </div>
                <div>
                    <label>Date From:</label>
                    <input 
                        type="text"
                        name="dateFrom"
                        value={experience.dateFrom}
                        onChange={handleChange}
                        placeholder="Enter start date (e.g., 2025-01)"
                    />
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
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Experience;