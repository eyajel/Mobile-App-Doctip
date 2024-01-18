import React from 'react';
import "./appTitle.css";
import { motion } from 'framer-motion';
interface AppTitleProps {
    className: string;
}

const AppTitle: React.FC<AppTitleProps> = ({ className })=> {

    const fadeDuration = 2;
    const upDuration = 1;

    const containerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: -20 },
    };

    return(
        <motion.div
            className="titleContainer"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{
            opacity: { duration: fadeDuration },
            y: { type: 'spring', stiffness: 100, damping: 15, duration: upDuration },
            }}
        >
            <p className="title">DOCTIP</p>
        </motion.div>
    )
}

export default AppTitle;
