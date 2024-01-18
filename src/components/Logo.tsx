import React from 'react';
import "./logo.css";
import { motion } from 'framer-motion';
const AppLogo = require("../assets/AppLogo.png") as string;
interface LogoProps {
  className: string;
}

const Logo: React.FC<LogoProps> = ({ className })=> {
    const fadeDuration = 2; 
    const scaleDuration = 0.5; 
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    const scaleVariants = {
        hidden: { translateY: 0, scale: 1 },
        visible: { translateY: 50, scale: 0.6 },
    };

    return(
        <motion.div
        className="logoContainer"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ opacity: { duration: fadeDuration } }}
      >
        <motion.img
          src={AppLogo}
          alt='logo'
          className="logo"
          initial="hidden"
          animate="visible"
          variants={scaleVariants}
          transition={{ duration: scaleDuration, delay: 2 }}
        />
      </motion.div>
    )
}

export default Logo;


