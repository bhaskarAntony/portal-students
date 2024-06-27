import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    gender: '',
    phoneNumber: '',
    guardianPhoneNumber: '',
    qualification: '',
    course: '',
    elite: '',
    professionalDetails: '',
    knowAbout: [],
 
    admisionDate:''
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          knowAbout: [...prevData.knowAbout, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          knowAbout: prevData.knowAbout.filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://student-portal-backend-1.onrender.com/api/student/register', formData);
      console.log(response.data);
      alert('Registration successful');
      navigate(`/id_card/${response.data.studentId}`)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="container border p-3 my-3 rounded">
        <div className="text-center">
          <h1 className="fs-2 text-main">
            Be Practical <small>TECH SOLUTIONS</small>
          </h1>
          <span className="fs-6 text-secondary">
            #737C, 1st Floor, 1st Cross 3rd Stage, 4th Block Basaveshwara Nagara Bengaluru-560079
          </span>
          <h1 className="fs-3 my-3">ADMISSION FORM</h1> <hr />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="name" className="form-label">
                  Student Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter student name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="college" className="form-label">
                  College Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your college name"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <span className="fs-4 d-block mt-3">Gender</span>
              <div className="gender d-flex gap-3">
                <div className="form-check form-switch mt-3">
                  <label className="form-check-label mx-3 fs-4" htmlFor="male">
                    Male
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-check form-switch mt-3">
                  <label className="form-check-label fs-4 mx-2" htmlFor="female">
                    Female
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone number
                </label>
                <input
                  type="tel"
                  minLength={10}
                  maxLength={13}
                  className="form-control"
                  placeholder="Enter Your Phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="guardianPhoneNumber" className="form-label">
                  Guardian's No
                </label>
                <input
                  type="tel"
                  minLength={10}
                  maxLength={13}
                  className="form-control"
                  placeholder="Enter Guardian Number"
                  name="guardianPhoneNumber"
                  value={formData.guardianPhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="qualification" className="form-label">
                  Qualification
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="course" className="form-label">
                  Course interested in
                </label>
                <select
                  name="course"
                  id="course"
                  className="form-select"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="MERN with React Native">MERN with React Native</option>
                  <option value="MERN Fullstack">MERN Fullstack</option>
                  <option value="MEAN Fullstack">MEAN Fullstack</option>
                  <option value="MEAN Fullstack Software testing">MEAN Fullstack Software testing</option>
                  <option value="CloudOops-Linux, AWS, DevOps/Azure">CloudOops-Linux, AWS, DevOps/Azure</option>
                  <option value="Python Fullstack/Core">Python Fullstack/Core</option>
                  <option value="Frontend with React JS">Frontend with React JS</option>
                  <option value="Java Fullstack/Core">Java Fullstack/Core</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Data Science">Data Science</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="elite" className="form-label">
                  Elite programs
                </label>
                <select
                  name="elite"
                  id="elite"
                  className="form-select"
                  value={formData.elite}
                  onChange={handleChange}
                  required
                >
                  <option value="MERN Fullstack">MERN Fullstack</option>
                  <option value="PYTHON Fullstack">PYTHON Fullstack</option>
                  <option value="JAVA Fullstack">JAVA Fullstack</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="professionalDetails" className="form-label">
                  Professional Details
                </label>
                <select
                  name="professionalDetails"
                  id="professionalDetails"
                  className="form-select"
                  value={formData.professionalDetails}
                  onChange={handleChange}
                  required
                >
                  <option value="Employed">Employed</option>
                  <option value="UnEmployed">UnEmployed</option>
                  <option value="Freelancer">Freelancer</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mt-3">
                <span className="fs-4 d-block">How did you know about us?</span>
                <div className="d-flex flex-wrap gap-5">
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="socialMedia"
                      name="knowAbout"
                      value="Social Media"
                      checked={formData.knowAbout.includes('Social Media')}
                      onChange={handleChange}
                    />
                    <label className="form-check-label mx-3 fs-5" htmlFor="socialMedia">
                      Social Media
                    </label>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="google"
                      name="knowAbout"
                      value="Google"
                      checked={formData.knowAbout.includes('Google')}
                      onChange={handleChange}
                    />
                    <label className="form-check-label mx-3 fs-5" htmlFor="google">
                      Google
                    </label>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="linkedin"
                      name="knowAbout"
                      value="Linkedin"
                      checked={formData.knowAbout.includes('Linkedin')}
                      onChange={handleChange}
                    />
                    <label className="form-check-label mx-3 fs-5" htmlFor="linkedin">
                      Linkedin
                    </label>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="friend"
                      name="knowAbout"
                      value="Friend"
                      checked={formData.knowAbout.includes('Friend')}
                      onChange={handleChange}
                    />
                    <label className="form-check-label mx-3 fs-5" htmlFor="friend">
                      Friend
                    </label>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="whatsapp"
                      name="knowAbout"
                      value="WhatsApp"
                      checked={formData.knowAbout.includes('WhatsApp')}
                      onChange={handleChange}
                    />
                    <label className="form-check-label mx-3 fs-5" htmlFor="whatsapp">
                      WhatsApp
                    </label>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="poster"
                      name="knowAbout"
                      value="Poster"
                      checked={formData.knowAbout.includes('Poster')}
                      onChange={handleChange}
                    />
                    <label className="form-check-label mx-3 fs-5" htmlFor="poster">
                      Poster
                    </label>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="others"
                      name="knowAbout"
                      value="Others"
                      checked={formData.knowAbout.includes('Others')}
                      onChange={handleChange}
                    />
                    <label className="form-check-label mx-3 fs-5" htmlFor="others">
                      Others
                    </label>
                  </div>
                </div>
              </div>
            </div>
           
           
            <div className="col-md-4">
              <div className="form-group mt-3">
                <label htmlFor="admisionDate" className="form-label">
                  Admision Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter total fees"
                  name="admisionDate"
                  value={formData.admisionDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
           
           
           
          </div>
          <div>
            <button type="submit" className="btn-main-orange mt-3 px-5">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
