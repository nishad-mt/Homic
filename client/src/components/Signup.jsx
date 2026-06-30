import React, { useState, useEffect } from 'react';
import '../styles/Signup.css';
import logo from '../assets/logo.png';

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

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [role, setRole] = useState('customer'); // 'customer' or 'worker'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms & Conditions");
      return;
    }
    console.log('Signup form submitted:', { ...formData, role });
  };

  return (
    <div className={`signup-wrapper ${isLoaded ? 'loaded' : ''}`}>
      {/* Background Animated Blobs */}
      <div className="bg-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="signup-container">
        
        {/* Left Side: Illustration & Value Prop (Desktop) */}
        <div className="signup-left">
          <div className="left-content">
            <div className="brand">
              <img src={logo} alt="Homiq" className="logo-img" />
              <h1>Homiq</h1>
            </div>
            <h2>Premium Service, <br/> Delivered to You.</h2>
            <p className="description">
              Join the most trusted platform connecting skilled professionals with households across the nation. 
              Experience seamless booking, transparent pricing, and world-class support.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Verified Professionals</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Secure Payments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="signup-right">
          <div className="glass-card">
            
            <div className="card-header">
              <div className="mobile-brand">
                <img src={logo} alt="Homiq" className="logo-img-small" />
                <h2>Homiq</h2>
              </div>
              <h2 className="title">Create an Account</h2>
              <p className="subtitle">Start your journey with us today.</p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              
              {/* Role Selection */}
              <div className="role-selector">
                <div 
                  className={`role-card ${role === 'customer' ? 'active' : ''}`}
                  onClick={() => setRole('customer')}
                >
                  <div className="role-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <span>Customer</span>
                </div>
                
                <div 
                  className={`role-card ${role === 'worker' ? 'active' : ''}`}
                  onClick={() => setRole('worker')}
                >
                  <div className="role-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <span>Worker</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="form-row">
                <div className="input-group">
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder=" " />
                  <label htmlFor="firstName">First Name</label>
                  <div className="border-highlight"></div>
                </div>
                <div className="input-group">
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder=" " />
                  <label htmlFor="lastName">Last Name</label>
                  <div className="border-highlight"></div>
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
                  <label htmlFor="email">Email</label>
                  <div className="border-highlight"></div>
                </div>
                <div className="input-group">
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" " />
                  <label htmlFor="phone">Phone</label>
                  <div className="border-highlight"></div>
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange} required placeholder=" " />
                  <label htmlFor="password">Password</label>
                  <div className="border-highlight"></div>
                  <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                    <EyeIcon visible={showPassword} />
                  </button>
                </div>
                
                <div className="input-group">
                  <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder=" " />
                  <label htmlFor="confirmPassword">Confirm</label>
                  <div className="border-highlight"></div>
                  <button type="button" className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <EyeIcon visible={showConfirmPassword} />
                  </button>
                </div>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-container">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                  <span className="checkmark">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="checkbox-label">I agree to <a href="#">Terms</a> & <a href="#">Privacy</a>.</span>
                </label>
              </div>

              <button type="submit" className="btn-submit">
                <span>Create Account</span>
                <div className="btn-hover-effect"></div>
              </button>

            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <button className="btn-google">
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <div className="login-prompt">
              Already have an account? <a href="#">Sign In</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
