import { useState } from "react";
import '../styles/GeneralInfo.scss';

function GeneralInfo() {
    const [info, setInfo] = useState({ name: '', email: '', phone: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleEdit = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="general-info">
            <h2>General Information</h2>
            {!isSubmitted ? ( 
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Full Name:</label>
                        <input 
                            type="text"
                            name="name"
                            value={info.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
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
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ): (
                <div className="info-display">
                    <p>Name: {info.name}</p>
                    <p>Email: {info.email}</p>
                    <p>Phone: {info.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default GeneralInfo;