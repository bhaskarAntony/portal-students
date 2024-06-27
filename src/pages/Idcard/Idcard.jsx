import React, { useState, useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const IDCard = () => {
  const { id } = useParams();
  const [isData, setIsData] = useState(false);
  const [data, setData] = useState({
    name: 'yourname',
    course: 'course',
    studentId: 'studentID',
    admissionDate: '9-27-2024',
    image: '',
  });

  const imgRef = useRef();

  useEffect(() => {
    axios.get(`https://student-portal-backend-1.onrender.com/card/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setIsData(true);
      })
      .catch((error) => {
        console.log(error);
        alert('error');
      });
  }, [id]);

  const { name, course, studentId, admissionDate, image } = data;

  const handleDownload = () => {
    const node = document.getElementById('id-card');
    
    if (node) {
      toPng(node)
        .then((dataUrl) => {
          saveAs(dataUrl, 'id-card.png');
          alert('Id card is downloaded.')
        })
        .catch((err) => {
          console.error('oops, something went wrong!', err);
          alert('try again later..')
        });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleImageError = (e) => {
    console.error('Image load error', e);
  };

  return (
    <div className='p-3 p-md-5'>
      <div className="d-flex justify-content-between gap-3 align-items-center">
        <span className="fs-4 fw-bold">Generate your ID Card</span>
        <button className="btn-main-orange">Register now</button>
      </div>
      <hr />
      {isData ? (
        <div className='p-3 d-flex flex-column align-items-center justify-content-center bg-light-orange mt-5 overflow-auto'>
          <div id="id-card" style={styles.idCard}>
            <div style={styles.left}>
              {/* <img
                ref={imgRef}
                src={image || 'https://via.placeholder.com/150'}
                alt="Student"
                style={styles.image}
                onLoad={() => console.log('Image loaded')}
                onError={handleImageError}
                crossOrigin="anonymous"
              /> */}
              <div style={styles.image}></div>
            </div>
            <div style={styles.right}>
              <h2 style={styles.name}>{name}</h2>
              <p><strong>Course:</strong> {course}</p>
              <p><strong>Student ID:</strong> {studentId}</p>
              <p><strong>Admission Date:</strong> {formatDate(admissionDate)}</p>
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
      ) : null}
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
    boxShadow: '0px 0px 10px #ccc'
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
    background:'#ccc'
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
};

export default IDCard;
