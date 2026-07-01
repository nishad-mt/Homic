import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/logo.png';

// SVG Icons

const ShieldCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const LightningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ThumbsUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
  </svg>
);

const MailIcon = () => (
  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LockIcon = () => (
  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const EyeIcon = ({ visible }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {visible ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      </>
    )}
  </svg>
);

const GoogleIcon = () => (
  <svg className="google-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Placeholder navigation
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        
        {/* Left Side */}
        <div className="login-left">
          <div className="left-content">
            
            <div className="brand">
              <img src={logo} alt="Homiq Logo" className="logo-icon" />
              <h1>HOMIQ</h1>
            </div>
            
            <h2 className="welcome-title">
              Welcome back<br />to <span className="highlight">Homiq</span>
            </h2>
            
            <p className="subtitle">
              Your trusted platform to book skilled workers at your fingertips.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="icon-wrapper blue">
                  <ShieldCheckIcon />
                </div>
                <div className="feature-text">
                  <h3>Verified Professionals</h3>
                  <p>Only trusted and verified workers</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="icon-wrapper yellow">
                  <LightningIcon />
                </div>
                <div className="feature-text">
                  <h3>Fast & Reliable</h3>
                  <p>Book in minutes, get it done</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="icon-wrapper blue">
                  <ThumbsUpIcon />
                </div>
                <div className="feature-text">
                  <h3>Quality You Can Trust</h3>
                  <p>Work done right, every time</p>
                </div>
              </div>
            </div>

            <div className="house-image-container">
              {/* Unsplash image of a beautiful modern house */}
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern House" 
                className="house-image" 
              />
            </div>
            
          </div>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <div className="mobile-brand-visible">
            <img src={logo} alt="Homiq Logo" className="logo-icon" />
            <h1>HOMIQ</h1>
          </div>
          
          <div className="top-right-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>

          <div className="form-header">
            <h2>Welcome back</h2>
            <p>Login to your account to continue</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-container">
                <MailIcon />
                <input 
                  type="email" 
                  name="email"
                  className="input-field" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                Password
                <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
              </label>
              <div className="input-container">
                <LockIcon />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  className="input-field" 
                  placeholder="Enter your password" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>
            </div>

            <div className="remember-me">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                Remember me
              </label>
              <span className="keep-signed">Keep me signed in</span>
            </div>

            <button type="submit" className="login-btn">
              Log In <ArrowRightIcon />
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <button type="button" className="google-btn">
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="security-badge">
            <ShieldCheckIcon />
            <span>Your data is safe and secure with us.</span>
          </div>

          <div className="footer">
            <span>&copy; 2024 Homiq. All rights reserved.</span>
            <a href="#">Privacy Policy</a> &bull; <a href="#">Terms of Service</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
