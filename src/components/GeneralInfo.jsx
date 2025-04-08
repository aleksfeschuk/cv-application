import { useState, useEffect } from "react";
import '../styles/GeneralInfo.scss';

function GeneralInfo({ onSubmit, initialData }) {
    const [info, setInfo] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({ name: '', email: '', phone: ''});

    useEffect(() => {
        if(initialData) {
            setInfo(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', phone: ''};
        let isValid = true;

        if(!info.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!info.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(info.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!info.phone.trim()) {
            newErrors.phone = 'Phone is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(info);
        }
    };


    return (
        <div className="general-info">
            <h2>General Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={info.name}
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
                        value={info.email}
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
                        value={info.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GeneralInfo;