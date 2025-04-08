import { useState } from "react";
import '../styles/GeneralInfo.scss';

function GeneralInfo({ onSubmit }) {
    const [info, setInfo] = useState({ name: '', email: '', phone: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(info);
        setInfo({ name: '', email: '', phone: ''});
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
        </div>
    );
}

export default GeneralInfo;