import { useState, useEffect } from "react";
import '../styles/GeneralInfo.scss';

function GeneralInfo({ onSubmit, onChange, initialData }) {
    const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '', location: '' });
    const [errors, setErrors] = useState({ name: '', email: '', phone: '', location: ''});

    useEffect(() => {
        if(initialData) {
            setGeneralInfo(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGeneralInfo((prev) => {
            const updatedInfo = { ...prev, [name]: value};
            onChange(updatedInfo);
            return updatedInfo;
        });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', phone: '', location: ''};
        let isValid = true;

        if(!generalInfo.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!generalInfo.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(generalInfo.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!generalInfo.phone.trim()) {
            newErrors.phone = 'Phone is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(generalInfo);
        }
    };


    return (
        <div className="general-info">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={generalInfo.name}
                        onChange={handleChange}
                        placeholder="Enter your Full name"
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email"
                        value={generalInfo.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label>Phone:</label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={generalInfo.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div>
                    <label>Location:</label>
                    <input 
                        type="tel" 
                        name="location"
                        value={generalInfo.location}
                        onChange={handleChange}
                        placeholder="Enter your location (e.g., Toronto, ON, Canada)"
                    />
                    {errors.location && <span className="error">{errors.location}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GeneralInfo;