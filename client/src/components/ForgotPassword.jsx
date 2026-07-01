import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot password submitted');
    // Placeholder logic for routing
    navigate('/login');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column' }}>
        <div className="login-right" style={{ padding: '60px' }}>
          <div className="form-header">
            <h2>Forgot Password</h2>
            <p>Enter your email to receive a password reset link.</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="input-field" placeholder="Enter your email" style={{ paddingLeft: '14px' }} required />
            </div>
            
            <button type="submit" className="login-btn">Send Reset Link</button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/login" className="forgot-link">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
