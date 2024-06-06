import React, { useState } from 'react';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import axios from 'axios';

const data = {
    username:"bhaskar",
    course:'fullstack',
    studentId:'Bp83673673',
    adminisiondate:'9-27-2024',
    image:''
}
const IDCard = () => {

  const [isData, setIsData] = useState(false);
  const [data, setdata] = useState({
    name:"yourname",
    course:'course',
    studentId:'studentID',
    adminisiondate:'9-27-2024',
    image:''
  })
  const [formstudentId, setFormStudentId] = useState(null)
  const { name, course, studentId, adminisiondate, image } = data;

  const handleDownload = () => {
    toPng(document.getElementById('id-card'))
      .then((dataUrl) => {
        saveAs(dataUrl, 'id-card.png');
      })
      .catch((err) => {
        console.error('oops, something went wrong!', err);
      });
  };

  const generateHandler = ()=>{
    axios.get(`https://student-portal-backend-1.onrender.com/api/admin/receipt/${formstudentId}`)
    .then((responce)=>{
        alert('success')
        console.log(responce);
        setdata(responce.data);
        setIsData(true);
    })
    .catch((error)=>{
        console.log(error);
        alert('error')
    })
    alert(formstudentId);
  }

  return (
    <div className='p-3 p-md-5'>
        <div className="d-flex justify-content-between gap-3">
            <span className="fs-4 fw-bold">Generate your ID Card</span>
            <button className="btn-main-orange">Register now</button>
        </div>
        <hr />

        <div className="row">
            <div className="col-md-5 m-auto">
                <div className="card p-3 d-flex gap-3 flex-row">
                    <input type="text" placeholder='Student ID' className="form-control p-2 fs-5" value={formstudentId} onChange={(e)=>setFormStudentId(e.target.value)} />
                    <button className="btn-main-dark rounded-1" onClick={generateHandler}>Generate</button>
                </div>
            </div>
        </div>
 {
    isData?(
        <div className='p-3 d-flex flex-column align-items-center justify-content-center bg-light-orange mt-5 overflow-auto'>
        <div id="id-card" style={styles.idCard}>
             <div style={styles.left}>
               <img src={image || 'https://via.placeholder.com/150'} alt="Student" style={styles.image} />
             </div>
             <div style={styles.right}>
               <h2 style={styles.name}>{name}</h2>
               <p><strong>Course:</strong> {course}</p>
               <p><strong>Student ID:</strong> {studentId}</p>
               <p><strong>Admission Date:</strong> 01-05-2024</p>
               <div style={styles.signatures}>
                 <div>
                   <p>Director's Signature</p>
                   <div style={styles.signatureLine}></div>
                 </div>
                 <div>
                   <p>Student's Signature</p>
                   <div style={styles.signatureLine}></div>
                 </div>
               </div>
             </div>
           </div>
           <button onClick={handleDownload} className='btn-main-orange mt-4'>Download ID Card</button>
        </div>
    ):(null)
 }
    </div>
  );
};

const styles = {
  idCard: {
    display: 'flex',
    border: '1px solid #0c0c0c',
    width: '450px',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow:'0px 0px 10px #ccc'
  },
  left: {
    flex: '1',
    textAlign: 'center',
  },
  right: {
    flex: '3',
    paddingLeft: '20px',
  },
  image: {
    width: '100px',
    height: '100px',
    // borderRadius: '50%',
  },
  name: {
    margin: '10px 0',
  },
  signatures: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  signatureLine: {
    width: '100px',
    borderTop: '1px solid #000',
    marginTop: '10px',
  },
  downloadButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default IDCard;
