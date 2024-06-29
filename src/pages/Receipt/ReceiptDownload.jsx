// import React, { useState } from 'react';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const ReceiptDownload = () => {
//   const [studentId, setStudentId] = useState('');
//   const [data, setData] = useState([]);
//   const studentData = {
//     "sui": "1BP24JV08",
//     "receiptNo": 20,
//     "name": "Venkata Sai Pratap",
//     "receiptCount": "1st",
//     "totalFees": 30000,
//     "firstPayment": 11000,
//     "receiptDate": "29-May-2024",
//     "secondInstallment": 19000,
//     "secondDueDate": "05-Jul-2024",
//     "thirdInstallment": 0,
//     "thirdDueDate": "",
//     "fourthInstallment": 0,
//     "fourthDueDate": "",
//     "balance": 19000,
//     "modeOfPayment": "MT",
//     "drawnOn": "",
//     "courseName": "Java Full Stack Development",
//     "trainingMode": "Offline",
//     "admissionFeesPaid": "New",
//     "instructions1": "Follow the guidelines",
//     "instructions2": "Submit documents on time"
//   }

//   const handleFetch = async () => {
//     try {
//       const response = await axios.get(`https://student-portal-backend-1.onrender.com/api/admin/receipt/${studentId}`);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const margin = 10;
//     const lineSpacing = 10;
//     let y = margin;

//     doc.setFontSize(12);

//     // Title
//     doc.text('Be Practical Receipt Report', margin, y);
//     y += lineSpacing * 2;

//     // Form Title
//     doc.text('Form: BE PRACTICAL TECH SOLUTIONS RECEIPT', margin, y);
//     y += lineSpacing * 2;

//     // Student Info
//     doc.text(`Student's Unique ID (SUI): ${studentData.sui}`, margin, y);
//     y += lineSpacing;
//     doc.text(`Receipt No: ${studentData.receiptNo}`, margin, y);
//     y += lineSpacing;
//     doc.text(`Received with thanks from: Mr./Ms. ${studentData.name}`, margin, y);
//     y += lineSpacing;
//     doc.text(`Receipt Count: ${studentData.receiptCount}`, margin, y);
//     y += lineSpacing;

//     // Fees Info
//     const feesData = [
//       ['Total Fees (₹)', studentData.totalFees.toFixed(2)],
//       ['Registration / 1st payment (₹)', studentData.firstPayment.toFixed(2)],
//       ['Receipt Date', studentData.receiptDate],
//       ['2nd installment (₹)', studentData.secondInstallment.toFixed(2)],
//       ['Due Date', studentData.secondDueDate],
//       ['3rd installment (₹)', studentData.thirdInstallment.toFixed(2)],
//       ['Due Date', studentData.thirdDueDate],
//       ['4th installment (₹)', studentData.fourthInstallment.toFixed(2)],
//       ['Due Date', studentData.fourthDueDate],
//       ['Balance (₹)', studentData.balance.toFixed(2)],
//       ['Mode of Payment', studentData.modeOfPayment],
//       ['Drawn on', studentData.drawnOn],
//     ];

//     doc.autoTable({
//       startY: y,
//       head: [['Description', 'Amount']],
//       body: feesData,
//       theme: 'grid',
//       margin: { left: margin, right: margin },
//     });

//     y = doc.previousAutoTable.finalY + lineSpacing;

//     // Course Info
//     doc.text(`Course Name: ${studentData.courseName}`, margin, y);
//     y += lineSpacing;
//     doc.text(`Training Mode: ${studentData.trainingMode}`, margin, y);
//     y += lineSpacing;
//     doc.text(`Admission/fees paid: ${studentData.admissionFeesPaid}`, margin, y);
//     y += lineSpacing * 2;

//     // Signature
//     doc.text('Signature', margin, y);
//     y += lineSpacing * 2;

//     // Instructions
//     doc.text('Instructions for students:', margin, y);
//     y += lineSpacing;
//     doc.text(`1. ${studentData.instructions1}`, margin, y);
//     y += lineSpacing;
//     doc.text(`2. ${studentData.instructions2}`, margin, y);
//     y += lineSpacing;

//     doc.save(`receipt_${studentData.sui}.pdf`);
//   };

//   return (
//     <div className="container mt-5">
     
//       <div className="d-flex justify-content-between gap-3 align-items-center">
//             <span className="fs-4 fw-bold">Download your installment Receipts</span>
//             <button className="btn-main-orange">Register now</button>
//         </div>
//         <hr />

//         <div className="row">
//             <div className="col-md-5 m-auto">
//                 <div className="card p-3 d-flex gap-3 flex-row">
//                 <input type="text" className="form-control" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder='BP9277863' />
//                     <button className="btn-main-dark rounded-1" onClick={handleFetch} >Check</button>
//                 </div>
//             </div>
//         </div>
//       {data.installments?.length > 0 && (
//         <div>
//             <h1 className="fs-3 fw-bold mt-4">Hello {data.name}</h1>
//           <p>here is your all installment information here you can download your receipt if you arealready paid..</p>
//           <hr />
//           {/* <ul className="list-group">
//             {data.installments?.map(inst => (
//               <li key={inst.number} className="list-group-item">
//                 Installment {inst.number}: {inst.status}
//                 {inst.status === 'Paid' && (
//                   <button className="btn btn-success float-end" onClick={() => downloadReceipt(inst.number)}>
//                     Download Receipt
//                   </button>
//                 )}
//               </li>
//             ))}
//           </ul> */}
//           {/* <table className='table'>
//             <tr>
              
//                 <th>Installment</th>
//                 <th>Ammount</th>
//                 <th>Status</th>
//                 <th>Action</th>
//             </tr>
//             {data.installments.map((item, index)=>(
//                 <tr>
//                     <td>{item.number}</td>
//                     <td>{item.amount}</td>
//                     <td>{item.status}</td>
//                     <td><button className="btn-main-orange" onClick={generatePDF}>Receipt</button></td>
//                 </tr>
//             ))}
//           </table> */}
//         </div>
//       )}
//     </div>
//   );

//   function downloadReceipt(installmentNumber) {
//     // Implement receipt download logic
//     alert(`Downloading receipt for installment ${installmentNumber}`);
//   }
// };

// export default ReceiptDownload;
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReceiptDownload = () => {
  const [formData, setFormData] = useState({
    sui: '',
    receiptNo: '',
    name: '',
    receiptCount: '',
    totalFees: 0,  // Initialize as a number
    firstPayment: 0,  // Initialize as a number
    receiptDate: '',
    secondInstallment: 0,  // Initialize as a number
    secondDueDate: '',
    thirdInstallment: 0,  // Initialize as a number
    thirdDueDate: '',
    fourthInstallment: 0,  // Initialize as a number
    fourthDueDate: '',
    balance: 0,  // Initialize as a number
    modeOfPayment: '',
    drawnOn: '',
    courseName: '',
    trainingMode: '',
    admissionFeesPaid: '',
    instructions1: '',
    instructions2: '',
  });

  const [showPreview, setShowPreview] = useState(false);
  const [pdfDoc, setPdfDoc] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert numeric fields to numbers
    const newValue = name === 'totalFees' || name === 'firstPayment' || name === 'secondInstallment' ||
                     name === 'thirdInstallment' || name === 'fourthInstallment' || name === 'balance'
                     ? parseFloat(value)
                     : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const margin = 10;
    const lineSpacing = 10;
    let y = margin;
  
    doc.setFontSize(12);
  
    // Title
    doc.text('Be Practical Receipt Report', margin, y);
    y += lineSpacing * 2;
  
    // Form Title
    doc.text('Form: BE PRACTICAL TECH SOLUTIONS RECEIPT', margin, y);
    y += lineSpacing * 2;
  
    // Student Info
    doc.text(`Student's Unique ID (SUI): ${formData.sui}`, margin, y);
    y += lineSpacing;
    doc.text(`Receipt No: ${formData.receiptNo}`, margin, y);
    y += lineSpacing;
    doc.text(`Received with thanks from: Mr./Ms. ${formData.name}`, margin, y);
    y += lineSpacing;
    doc.text(`Receipt Count: ${formData.receiptCount}`, margin, y);
    y += lineSpacing;
  
    // Fees Info
    const feesData = [
      ['Total Fees (₹)', isNaN(formData.totalFees) ? '' : formData.totalFees.toFixed(2)],
      ['Registration / 1st payment (₹)', isNaN(formData.firstPayment) ? '' : formData.firstPayment.toFixed(2)],
      ['Receipt Date', formData.receiptDate],
      ['2nd installment (₹)', isNaN(formData.secondInstallment) ? '' : formData.secondInstallment.toFixed(2)],
      ['Due Date', formData.secondDueDate],
      ['3rd installment (₹)', isNaN(formData.thirdInstallment) ? '' : formData.thirdInstallment.toFixed(2)],
      ['Due Date', formData.thirdDueDate],
      ['4th installment (₹)', isNaN(formData.fourthInstallment) ? '' : formData.fourthInstallment.toFixed(2)],
      ['Due Date', formData.fourthDueDate],
      ['Balance (₹)', isNaN(formData.balance) ? '' : formData.balance.toFixed(2)],
      ['Mode of Payment', formData.modeOfPayment],
      ['Drawn on', formData.drawnOn],
    ];
  
    doc.autoTable({
      startY: y,
      head: [['Description', 'Amount']],
      body: feesData,
      theme: 'grid',
      margin: { left: margin, right: margin },
    });
  
    y = doc.previousAutoTable.finalY + lineSpacing;
  
    // Course Info
    doc.text(`Course Name: ${formData.courseName}`, margin, y);
    y += lineSpacing;
    doc.text(`Training Mode: ${formData.trainingMode}`, margin, y);
    y += lineSpacing;
    doc.text(`Admission/fees paid: ${formData.admissionFeesPaid}`, margin, y);
    y += lineSpacing * 2;
  
    // Signature
    doc.text('Signature', margin, y);
    y += lineSpacing * 2;
  
    // Instructions
    doc.text('Instructions for students:', margin, y);
    y += lineSpacing;
    doc.text(`1. ${formData.instructions1}`, margin, y);
    y += lineSpacing;
    doc.text(`2. ${formData.instructions2}`, margin, y);
    y += lineSpacing;
  
    doc.save(`receipt_${formData.sui}.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
    setShowPreview(true);
  };


  const handleDownload = () => {
    if (pdfDoc) {
      const url = URL.createObjectURL(pdfDoc);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `receipt_${formData.sui}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <span className="fs-4 fw-bold">Enter Receipt Details</span>
      </div>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="sui" className="form-label">Student's Unique ID (SUI)</label>
            <input
              type="text"
              className="form-control"
              id="sui"
              name="sui"
              value={formData.sui}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="receiptNo" className="form-label">Receipt No</label>
            <input
              type="number"
              className="form-control"
              id="receiptNo"
              name="receiptNo"
              value={formData.receiptNo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="receiptCount" className="form-label">Receipt Count</label>
            <input
              type="text"
              className="form-control"
              id="receiptCount"
              name="receiptCount"
              value={formData.receiptCount}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="totalFees" className="form-label">Total Fees (₹)</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="totalFees"
              name="totalFees"
              value={formData.totalFees}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="firstPayment" className="form-label">Registration / 1st Payment (₹)</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="firstPayment"
              name="firstPayment"
              value={formData.firstPayment}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="receiptDate" className="form-label">Receipt Date</label>
            <input
              type="date"
              className="form-control"
              id="receiptDate"
              name="receiptDate"
              value={formData.receiptDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="secondInstallment" className="form-label">2nd Installment (₹)</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="secondInstallment"
              name="secondInstallment"
              value={formData.secondInstallment}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="secondDueDate" className="form-label">2nd Installment Due Date</label>
            <input
              type="date"
              className="form-control"
              id="secondDueDate"
              name="secondDueDate"
              value={formData.secondDueDate}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="thirdInstallment" className="form-label">3rd Installment (₹)</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="thirdInstallment"
              name="thirdInstallment"
              value={formData.thirdInstallment}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="thirdDueDate" className="form-label">3rd Installment Due Date</label>
            <input
              type="date"
              className="form-control"
              id="thirdDueDate"
              name="thirdDueDate"
              value={formData.thirdDueDate}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="fourthInstallment" className="form-label">4th Installment (₹)</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="fourthInstallment"
              name="fourthInstallment"
              value={formData.fourthInstallment}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="fourthDueDate" className="form-label">4th Installment Due Date</label>
            <input
              type="date"
              className="form-control"
              id="fourthDueDate"
              name="fourthDueDate"
              value={formData.fourthDueDate}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="balance" className="form-label">Balance (₹)</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="balance"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="modeOfPayment" className="form-label">Mode of Payment</label>
            <input
              type="text"
              className="form-control"
              id="modeOfPayment"
              name="modeOfPayment"
              value={formData.modeOfPayment}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="drawnOn" className="form-label">Drawn On</label>
            <input
              type="text"
              className="form-control"
              id="drawnOn"
              name="drawnOn"
              value={formData.drawnOn}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="courseName" className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="trainingMode" className="form-label">Training Mode</label>
            <input
              type="text"
              className="form-control"
              id="trainingMode"
              name="trainingMode"
              value={formData.trainingMode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="admissionFeesPaid" className="form-label">Admission/Fees Paid</label>
            <input
              type="text"
              className="form-control"
              id="admissionFeesPaid"
              name="admissionFeesPaid"
              value={formData.admissionFeesPaid}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="instructions1" className="form-label">Instructions 1</label>
            <input
              type="text"
              className="form-control"
              id="instructions1"
              name="instructions1"
              value={formData.instructions1}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="instructions2" className="form-label">Instructions 2</label>
            <input
              type="text"
              className="form-control"
              id="instructions2"
              name="instructions2"
              value={formData.instructions2}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Generate Receipt</button>
          </div>
        </div>
      </form>

      {/* Display current form data for verification */}
      <div className="mt-5">
        <h2>Current Form Data</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
      {showPreview && pdfDoc && (
        <div className="mt-5">
          <h2>Generated Receipt Preview</h2>
          <iframe
            title="Receipt Preview"
            src={URL.createObjectURL(pdfDoc)}
            width="100%"
            height="500px"
          />
          <button className="btn btn-success mt-3" onClick={handleDownload}>Download Receipt</button>
        </div>
      )}
    </div>
  );
};

export default ReceiptDownload;

