import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password submitted');
    // Placeholder logic for routing
    navigate('/login');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column' }}>
        <div className="login-right" style={{ padding: '60px' }}>
          <div className="form-header">
            <h2>Reset Password</h2>
            <p>Enter your new password below.</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" className="input-field" placeholder="Enter new password" style={{ paddingLeft: '14px' }} required />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="input-field" placeholder="Confirm new password" style={{ paddingLeft: '14px' }} required />
            </div>
            
            <button type="submit" className="login-btn">Update Password</button>
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

export default ResetPassword;
