import { useState } from 'react';
import '../styles/signupForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [hearAbout, setHearAbout] = useState([]);
  const [city, setCity] = useState('Mumbai');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleHearAboutChange = (e) => {
    setHearAbout(e.target.value);
  };

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/register', {
        name,
        email,
        password,
        phone,
        gender,
        hearAbout,
        city,
        state,
      })
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="title-heading">
        <h1>Signup Page</h1>
      </div>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="column">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              required
            />

            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
              pattern="[0-9]+"
            />
          </div>

          <div className="column">
            <label>Gender:</label>
            <select value={gender} onChange={handleGenderChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label>How did you hear about us:</label>
            <select value={hearAbout} onChange={handleHearAboutChange}>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Friends">Friends</option>
              <option value="Job Portal">Job Portal</option>
              <option value="Others">Others</option>
            </select>

            <label>City:</label>
            <select value={city} onChange={handleCityChange}>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>

            <label>State:</label>
            <input
              type="text"
              value={state}
              onChange={handleStateChange}
              required
            />
          </div>
          <button type="submit">SignUp</button>
        </form>
        <p>Already Have an Account?</p>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </>
  );
}

export default Signup;
