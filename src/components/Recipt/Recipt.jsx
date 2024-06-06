// src/components/Receipt.js
import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Recipt = ({ studentData }) => {
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
    <button onClick={generatePDF}>Download Receipt</button>
  );
};

export default Recipt;
