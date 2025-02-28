import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    newsletter: false, // Checkbox
    gender: 'male', // Radio button default
    country: 'usa', // Dropdown/Select default
    preferences: [], // Multi-select (checkboxes for preferences)
    theme: 'light', // Switch default
    volume: 50, // Slider default (0-100)
    message: '',
    file: null, // File input
    birthDate: '' // Date input
  });

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    if (type === 'checkbox' && name === 'preferences') {
      const newPreferences = formData.preferences.includes(value)
        ? formData.preferences.filter(item => item !== value)
        : [...formData.preferences, value];
      setFormData(prevState => ({
        ...prevState,
        [name]: newPreferences
      }));
    } else if (type === 'range') { // Slider
      setFormData(prevState => ({
        ...prevState,
        [name]: parseInt(value, 10)
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Subscribe to Newsletter:
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Gender:
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        /> Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        /> Female
      </label>
      <br /><br />

      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
      </label>
      <br /><br />

      <label>
        Preferences (Select multiple):
        <input
          type="checkbox"
          name="preferences"
          value="notifications"
          checked={formData.preferences.includes('notifications')}
          onChange={handleChange}
        /> Notifications
        <input
          type="checkbox"
          name="preferences"
          value="updates"
          checked={formData.preferences.includes('updates')}
          onChange={handleChange}
        /> Updates
        <input
          type="checkbox"
          name="preferences"
          value="offers"
          checked={formData.preferences.includes('offers')}
          onChange={handleChange}
        /> Offers
      </label>
      <br /><br />

      <label>
        Theme:
        <input
          type="checkbox"
          name="theme"
          checked={formData.theme === 'dark'}
          onChange={(e) => handleChange({...e, target: {...e.target, name: 'theme', value: e.target.checked ? 'dark' : 'light'}})}
        /> Dark Mode
      </label>
      <br /><br />

      <label>
        Volume:
        <input
          type="range"
          name="volume"
          min="0"
          max="100"
          value={formData.volume}
          onChange={handleChange}
        />
        {formData.volume}%
      </label>
      <br /><br />

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Upload File:
        <input
          type="file"
          name="file"
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Birth Date:
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}