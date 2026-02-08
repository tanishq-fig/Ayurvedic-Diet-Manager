import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    ailments: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient data:', formData);
    alert('Patient record saved!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>Patient Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '10px' }} />
        <input name="age" placeholder="Age" type="number" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '10px' }} />
        <select name="gender" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '10px' }}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input name="height" placeholder="Height (cm)" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '10px' }} />
        <input name="weight" placeholder="Weight (kg)" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '10px' }} />
        <textarea name="ailments" placeholder="Ailments" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '10px' }} />
        <button type="submit" style={{ padding: '10px 20px' }}>Save Patient</button>
      </form>
    </div>
  );
};

export default PatientForm;
