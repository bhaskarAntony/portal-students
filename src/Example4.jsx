import React, { useState } from 'react'

function Example4() {
  const [userData, setuserData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phonenumber:"",
    address:""
  })
  const userHandler = (event)=>{
    const {name, value} = event.target
    setuserData({...userData,  [name]:value})
  }

  const AlluserHandler = ()=>{
    const allUserData ={
      firstname:"chinnu",
    lastname:"racchu",
    email:"chinnu@123",
    phonenumber:"907547874",
    address:"beeranahalli"
  }
  setuserData({...userData, ...allUserData})
}
  return (
    <div className='container-fluid'>
      <div className="card mt-5 shadow col-md-5  offset-md-3">
        <h1 className='text-center mt-2'>User Details</h1>
        <img src="" alt="" />
       <div className="form-group ">
       <label className='form-label p-2 fs-5'>Firstname</label>
       <input type="text"  className="form-control fs-5"placeholder='Enter Firstname' onChange={userHandler} name={userData.firstname} value='firstname'/>
       </div>

       <div className="form-group ">
       <label className='form-label p-2 fs-5'>Secondname</label>
       <input type="text"  className="form-control fs-5"placeholder='Enter secondname' onChange={userHandler} name={userData.lastname} value='lastname'/>
       </div>

       <div className="form-group ">
       <label className='form-label p-2 fs-5'>Email</label>
       <input type="text"  className="form-control fs-5"placeholder='Enter email address' onChange={userHandler} name={userData.email} value='email'/>
       </div>

       <div className="form-group ">
       <label className='form-label p-2 fs-5'>Phone number</label>
       <input type="tel" maxLength={12} minLength={0} className="form-control fs-5"placeholder='Enter phone number' onChange={userHandler} name={userData.phonenumber} value='phonenumber'/>
       </div>

       <div className="form-group ">
       <label className='form-label p-2 fs-5'>address</label>
       <input type="text" className="form-control fs-5"placeholder='Enter  user adress' onChange={userHandler} name={userData.address} value='address'/>
       </div>
       <button className="btn btn-danger fs-5 mt-3" onClick={AlluserHandler}>create</button>
      </div>
      
    </div>
  )
}

export default Example4