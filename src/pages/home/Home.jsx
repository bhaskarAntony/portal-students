import React from 'react'
import './style.css'

function Home() {
  return (
    <div className='container p-3 p-md-5'>
      <div className="row">
        <div className="col-md-6">
          <div className=" receipts text-white p-3 rounded mb-4">
              <h1 className="fs-2">generate Receipts</h1>
              <p className="fs-6">Generating receipts involves creating structured documents that provide a detailed record of financial transactions or payments.</p>
              <button className="btn btn-light rounded-pill">Generate</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" idcard  p-3 rounded mb-4">
              <h1 className="fs-2">generate Student ID</h1>
              <p className="fs-6">Generating a Student ID (SUI - Student Unique Identifier) involves creating a unique and structured identifier for each student within a system</p>
              <button className="btn btn-dark rounded-pill">Generate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home