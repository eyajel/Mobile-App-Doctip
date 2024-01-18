import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import "./ForgotPasswordForm.css";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      try {
        await sendPasswordResetEmail(email);
        setSuccess('Password reset email sent successfully!');
      } catch (error) {
        setError('Error sending password reset email. Please try again later.');
      }
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendPasswordResetEmail = async (email: string) => {
    try {
      const response = await axios.post('/api/reset-password', { email });
      if (response.status === 200) {
        setSuccess('Password reset email sent successfully! Please check your inbox.');
      } else {
        setError('Error sending password reset email. Please try again later.');
      }
    } catch (error) {
      setError('Error sending password reset email. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p className="forgotPasswordTitle">Forgot <br/>Password ? </p>
        <label htmlFor="email" className='emailLabel'>Email:</label>
        <br/>
        <input
          type="email"
          id="emailInput"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder='Please enter your email'
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <button type="submit" className='resetButton'>Reset Password</button>
    </form>
  );
}

