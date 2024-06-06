import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    installmentNumber: '',
    date: '',
    amount: '',
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
      const response = await axios.post('https://student-portal-backend-1.onrender.com/api/student/payment', formData);
      alert('Payment request submitted');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
   <div className="contaienr-fluid p-3 p-md-5">
       <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-4">Download Your installment receipt</span>
            <button className="btn-main-orange">Pay Installment</button>
        </div> 
        <hr />
        <div className="row">
            <div className="col-md-6">
                <div className="payment-left">

                </div>
            </div>
            <div className="col-md-6">
                <div className="payment-right">
                    <div className="card p-3">
                        <span className="fw-bold fs-3">Send Installment Confirmation</span>
                        <div className="form-group mt-3">
                            <label htmlFor="id" className="form-label">Student ID</label>
                            <input type="text" name='studentId' className="form-control p-3 fs-5" placeholder='Ex:BP2973333' value={formData.studentId} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="id" className="form-label">Student ID</label>
                           <select className="form-select p-3 fs-5" name='installmentNumber' value={formData.installmentNumber} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                           </select>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="id" className="form-label">Payed date</label>
                            <input type="date" className="form-control p-3 fs-5" name='date' value={formData.date} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="id" className="form-label">Payed Ammount</label>
                            <input type="number" className="form-control p-3 fs-5" name='amount' placeholder='30000' value={formData.amount}  onChange={handleChange}/>
                        </div>
                        <div className="form-group mt-4 d-flex flex-wrap flex-md-nowrap gap-3">
                            <button className="btn-main-orange w-100" onClick={handleSubmit}>Send request</button>
                            <button className="btn-main-dark-outline w-100">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
  );
};

export default PaymentForm;
