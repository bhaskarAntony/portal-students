import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    totalFees: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://student-portal-backend-1.onrender.com/api/student/register', formData);
      alert('Registration successful');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    // <div className="container mt-5">
    //   <h2 className="text-center">Student Registration</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <label className="form-label">Name</label>
    //       <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Email</label>
    //       <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Course</label>
    //       <input type="text" className="form-control" name="course" value={formData.course} onChange={handleChange} required />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Total Fees</label>
    //       <input type="number" className="form-control" name="totalFees" value={formData.totalFees} onChange={handleChange} required />
    //     </div>
    //     <button type="submit" className="btn btn-primary">Register</button>
    //   </form>
    // </div>
    <div className="container-fluid">
        <div className="container border p-3 my-3 rounded">
            <div className="text-center">
                <h1 className="fs-2 text-main">Be Practical <small>TECH SOLUTIONS</small></h1>
                <span className="fs-6 text-secondary">#737C, 1st Floor, 1st Cross 3rd Stage, 4th Block Basaveshwara Nagara Bengaluru-560079</span>
                <h1 className="fs-3 my-3">ADMISSION FORM</h1> <hr />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Student Name</label>
                        <input type="text" className="form-control" placeholder='Enter student name' name='studentname' />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" placeholder='Enter email address' name='email' />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">College Name</label>
                        <input type="text" className="form-control" placeholder='Enter your college name' name='college' />
                    </div>
                </div>
                <div className="col-md-12">
                    <span className="fs-4  d-block mt-3">Gender</span>
               <div className="gender d-flex gap-3">
               <div class="form-check form-switch mt-3">
                <label class="form-check-label mx-3 fs-4" for="flexSwitchCheckDefault">Male</label>
                <input class="form-check-input" name='gender' type="radio" role="switch" id="flexSwitchCheckDefault"/>
                </div>

                <div class="form-check form-switch mt-3">
                <label class="form-check-label fs-4 mx-2" for="flexSwitchCheckDefault">Female</label>
                <input class="form-check-input" name='gender' type="radio" role="switch" id="flexSwitchCheckDefault"/>
                </div>
               </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Phone number</label>
                        <input type="tel" minLength={10} maxLength={13} className="form-control" placeholder='Enter Your Phone number' name='phonenumber' />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Guardian's No</label>
                        <input type="tel" minLength={10} maxLength={13} className="form-control" placeholder='Enter Guardian Number' name='guardianPhoneNumber' />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Qualification</label>
                        <input type="tel" minLength={10} maxLength={13} className="form-control" placeholder='Enter your qualification' name='qualification' />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Course intrested in</label>
                       <select name="course" id="course" className="form-select">
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
                        <label htmlFor="elite" className="form-label">Elite programs</label>
                       <select name="elite" id="elite" className="form-select">
                        <option value="MERN Fullstack">MERN Fullstack</option>
                        <option value="PYTHON Fullstack">PYTHON Fullstack</option>
                        <option value="JAVA Fullstack">JAVA Fullstack</option>
                        <option value="others">Others</option>
                     
                       </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="elite" className="form-label">Professional Details</label>
                       <select name="elite" id="elite" className="form-select">
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="student">Student</option>
                     
                       </select>
                    </div>
                </div>

                <div className="col-md-12">
                <span className="fs-4 d-block my-3">How did you came to know about be-practical?</span>
                    <div className="form-group mt-3 d-flex gap-3 flex-wrap">
                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='google' />
                        <label htmlFor="Google" className="form-check-label mx-2">Google</label>
                       </div>

                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Facebook' />
                        <label htmlFor="Facebook" className="form-check-label mx-2">Facebook</label>
                       </div>


                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Internet' />
                        <label htmlFor="Internet" className="form-check-label mx-2">Internet</label>
                       </div>


                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Website' />
                        <label htmlFor="Website" className="form-check-label mx-2">Website</label>
                       </div>

                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Instagram' />
                        <label htmlFor="Instagram" className="form-check-label mx-2">Instagram</label>
                       </div>


                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Twitter' />
                        <label htmlFor="Twitter" className="form-check-label mx-2">Twitter</label>
                       </div>


                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Board' />
                        <label htmlFor="Board" className="form-check-label mx-2">Board</label>
                       </div>


                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Roadshow' />
                        <label htmlFor="Roadshow" className="form-check-label mx-2">Roadshow</label>
                       </div>


                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Newspaper' />
                        <label htmlFor="Newspaper" className="form-check-label mx-2">Newspaper</label>
                       </div>


                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Pamphlets' />
                        <label htmlFor="Pamphlets" className="form-check-label mx-2">Pamphlets</label>
                       </div>

                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Other' />
                        <label htmlFor="Other" className="form-check-label mx-2">Other</label>
                       </div>

                       <div className="border p-2   rounded">
                       <input type="checkbox" className="form-check-input" placeholder='Enter Guardian Number' name='Reference' />
                        <label htmlFor="Reference" className="form-check-label mx-2">Reference</label>
                       </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="elite" className="form-label">Mode of Payment</label>
                       <select name="elite" id="elite" className="form-select">
                        <optgroup label='Online'>
                            <option value="phonepe">Phone pe</option>
                            <option value="phonepe">Google pay</option>
                            <option value="phonepe">Account transfer</option>
                            <option value="phonepe">Cheque</option>
                        </optgroup>
                        <option value="Unemployed">Offline</option>
                        <option value="Self-employed">Self-employed</option>
                     
                       </select>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Total Fees</label>
                        <input type="text"  className="form-control" placeholder='Enter your qualification' disabled name='totalfees' />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="paid" className="form-label">Fees Paid</label>
                        <input type="number"  className="form-control" placeholder='Enter how much you paid'  name='paidfees' />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Balance Amount</label>
                        <input type="text"  className="form-control"  disabled name='balance' />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group mt-3">
                        <label htmlFor="duedate" className="form-label">Dext Due date</label>
                        <input type="date"  className="form-control"  disabled name='duedate' />
                    </div>
                </div>
            </div>

            <button className="btn-main-orange text-center my-4 px-5">Register</button>
        </div>
    </div>
  );
};

export default Registration;
