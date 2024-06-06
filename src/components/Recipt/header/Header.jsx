import React from 'react'
import './style.css'

function Header() {
  return (
    <div className='border border-bottom'>
        <nav class="navbar navbar-expand-lg p-3">
  <div class="container-fluid">
    <a class="navbar-brand fs-3 text-main fw-bold" href="#">myinfo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#">Download Reciepts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Installments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/payment">Confirm Installments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/id_card">Generate ID Card</a>
        </li>
      
       
      </ul>
   <div className="d-flex gap-3">
   <button className="btn-main-dark-outline">Paymnts</button>
   <button className="btn-main-orange">Create Account</button>
   </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header