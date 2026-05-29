import React, { useState } from 'react';

function StudentRegistration() {
    const [data, setData] = useState({
        name: "Parth",
        tel: "978645645",
        email: "ugghj2hg@kj"
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.name == "" || data.tel == "" || data.email == "") {
            alert("Fill all data");
        } else {
            alert(`Data submitted successfully by ${data.name}`);
        }

        setData({ name: "", tel: "", email: "" });
    };

    return (
        <div>
            <h1>Student Registration</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={data.name} 
                    onChange={handleChange}
                />

                <label>Mobile:</label>
                <input 
                    type="tel" 
                    name="tel" 
                    value={data.tel} 
                    onChange={handleChange}
                />

                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={data.email} 
                    onChange={handleChange}
                />

                <button type='submit'>Register here!</button>
            </form>
        </div>
    );
}

export default StudentRegistration;