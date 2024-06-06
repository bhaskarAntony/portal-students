import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/registration/Registration';
import PaymentForm from './pages/payment/PaymentForm';
import ReceiptDownload from './pages/Receipt/ReceiptDownload';
import Header from './components/Recipt/header/Header';
import Home from './pages/home/Home';
import IdCard from './pages/Idcard/Idcard';


function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/receipt" element={<ReceiptDownload />} />
          <Route path="/id_card" element={<IdCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
