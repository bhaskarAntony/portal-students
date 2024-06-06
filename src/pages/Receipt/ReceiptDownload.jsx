import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReceiptDownload = () => {
  const [studentId, setStudentId] = useState('');
  const [data, setData] = useState([]);
  const studentData = {
    "sui": "1BP24JV08",
    "receiptNo": 20,
    "name": "Venkata Sai Pratap",
    "receiptCount": "1st",
    "totalFees": 30000,
    "firstPayment": 11000,
    "receiptDate": "29-May-2024",
    "secondInstallment": 19000,
    "secondDueDate": "05-Jul-2024",
    "thirdInstallment": 0,
    "thirdDueDate": "",
    "fourthInstallment": 0,
    "fourthDueDate": "",
    "balance": 19000,
    "modeOfPayment": "MT",
    "drawnOn": "",
    "courseName": "Java Full Stack Development",
    "trainingMode": "Offline",
    "admissionFeesPaid": "New",
    "instructions1": "Follow the guidelines",
    "instructions2": "Submit documents on time"
  }

  const handleFetch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/receipt/${studentId}`);
      setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
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
    doc.text(`Student's Unique ID (SUI): ${studentData.sui}`, margin, y);
    y += lineSpacing;
    doc.text(`Receipt No: ${studentData.receiptNo}`, margin, y);
    y += lineSpacing;
    doc.text(`Received with thanks from: Mr./Ms. ${studentData.name}`, margin, y);
    y += lineSpacing;
    doc.text(`Receipt Count: ${studentData.receiptCount}`, margin, y);
    y += lineSpacing;

    // Fees Info
    const feesData = [
      ['Total Fees (₹)', studentData.totalFees.toFixed(2)],
      ['Registration / 1st payment (₹)', studentData.firstPayment.toFixed(2)],
      ['Receipt Date', studentData.receiptDate],
      ['2nd installment (₹)', studentData.secondInstallment.toFixed(2)],
      ['Due Date', studentData.secondDueDate],
      ['3rd installment (₹)', studentData.thirdInstallment.toFixed(2)],
      ['Due Date', studentData.thirdDueDate],
      ['4th installment (₹)', studentData.fourthInstallment.toFixed(2)],
      ['Due Date', studentData.fourthDueDate],
      ['Balance (₹)', studentData.balance.toFixed(2)],
      ['Mode of Payment', studentData.modeOfPayment],
      ['Drawn on', studentData.drawnOn],
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
    doc.text(`Course Name: ${studentData.courseName}`, margin, y);
    y += lineSpacing;
    doc.text(`Training Mode: ${studentData.trainingMode}`, margin, y);
    y += lineSpacing;
    doc.text(`Admission/fees paid: ${studentData.admissionFeesPaid}`, margin, y);
    y += lineSpacing * 2;

    // Signature
    doc.text('Signature', margin, y);
    y += lineSpacing * 2;

    // Instructions
    doc.text('Instructions for students:', margin, y);
    y += lineSpacing;
    doc.text(`1. ${studentData.instructions1}`, margin, y);
    y += lineSpacing;
    doc.text(`2. ${studentData.instructions2}`, margin, y);
    y += lineSpacing;

    doc.save(`receipt_${studentData.sui}.pdf`);
  };

  return (
    <div className="container mt-5">
     
      <div className="d-flex justify-content-between gap-3">
            <span className="fs-4 fw-bold">Download your installment Receipts</span>
            <button className="btn-main-orange">Register now</button>
        </div>
        <hr />

        <div className="row">
            <div className="col-md-5 m-auto">
                <div className="card p-3 d-flex gap-3 flex-row">
                <input type="text" className="form-control" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder='BP9277863' />
                    <button className="btn-main-dark rounded-1" onClick={handleFetch} >Check</button>
                </div>
            </div>
        </div>
      {data.installments?.length > 0 && (
        <div>
            <h1 className="fs-3 fw-bold mt-4">Hello {data.name}</h1>
          <p>here is your all installment information here you can download your receipt if you arealready paid..</p>
          <hr />
          {/* <ul className="list-group">
            {data.installments?.map(inst => (
              <li key={inst.number} className="list-group-item">
                Installment {inst.number}: {inst.status}
                {inst.status === 'Paid' && (
                  <button className="btn btn-success float-end" onClick={() => downloadReceipt(inst.number)}>
                    Download Receipt
                  </button>
                )}
              </li>
            ))}
          </ul> */}
          <table className='table'>
            <tr>
              
                <th>Installment</th>
                <th>Ammount</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {data.installments.map((item, index)=>(
                <tr>
                    <td>{item.number}</td>
                    <td>{item.amount}</td>
                    <td>{item.status}</td>
                    <td><button className="btn-main-orange" onClick={generatePDF}>Receipt</button></td>
                </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );

  function downloadReceipt(installmentNumber) {
    // Implement receipt download logic
    alert(`Downloading receipt for installment ${installmentNumber}`);
  }
};

export default ReceiptDownload;
