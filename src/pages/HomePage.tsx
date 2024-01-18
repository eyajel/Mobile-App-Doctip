import Logo from "../components/Logo";
import AppTitle from "../components/AppTitle";
import WelcomeForm from "../components/WelcomeForm";
import { motion } from 'framer-motion';
import "./homePage.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const upAnimationVariants = {
    hidden: { transform: 'translateY(0) scale(1)' },
    visible: { transform: 'translateY(-240px) scale(0.6)' },
  };

  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 3400);
  }, []);

  return (
    <div className="container">
      <motion.div
        className="circle"
        initial="hidden"
        animate="visible"
        variants={upAnimationVariants}
        transition={{ duration: 0.5, delay: 3, ease: 'easeInOut' }}
      >
        <Logo className="logo" />
        <AppTitle className="title" />
      </motion.div>
      {showForm && <WelcomeForm />}
      {showForm && <Link to="/forgot-password">Forgot Password</Link>}
    </div>
  );
}
