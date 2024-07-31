import Navbar from "../Components/Navbar";
import profile from '../assets/Manas.jpg';
import { FaPencilAlt } from 'react-icons/fa';
import { useState } from 'react';
import './AboutPage.css';

const AboutPage = () => {

    const [isEditing, setIsEditing] = useState(false);


    const [formData, setFormData] = useState({
        name: "Manas Ghosh",
        email: "manasghosh@gmail.com",
        password: "...................",
        phoneNumber: "9583203241",
        address: "Patia, Bhubaneswar",
        state: "Odisha",
        zipCode: "751024"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };


    const handleSaveClick = () => {
        setIsEditing(false);

    };

    return (
        <>
            <h1>Profile/ About us</h1>
            <Navbar center={true} hideLogin={true} />
            <div className="profile-container">
                <div className="profile">
                    <div className="header">
                        <img src={profile} alt="Profile" />
                    </div>
                    <div className="about-form">
                        <div className="Pname">
                            Name
                            <div className="icon" onClick={handleEditClick}>
                                Edit
                                <FaPencilAlt />
                            </div>
                        </div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                        <label>Phone Number</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                        <div className="address">
                            <div className="state">
                                <label>State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div className="pin">
                                <label>Zip Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    readOnly={!isEditing}
                                />
                            </div>
                        </div>
                        {isEditing && (
                            <button className="save-button" onClick={handleSaveClick}>
                                Save
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
