import "./welcomeForm.css";
import { GoogleLogin } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '../constant';
import { motion } from 'framer-motion';

const WelcomeForm: React.FC = () => {
    const handleGoogleSuccess = (googleUser: any) => {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    };

    const handleGoogleFailure = (error: any) => {
        console.log(error);
    };

    const formAnimationVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            className="formContainer"
            initial="hidden"
            animate="visible"
            variants={formAnimationVariants}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <p className="welcomeTitle">Hello there !</p>
            <div className="buttonsContainer">
                <button className="loginButton">Log In</button>
                <button className="signupButton">Sign Up</button>
            </div>
            <p className="orText">OR</p>
            <div className="googleContainer">
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="sign in with google"
                    onSuccess={handleGoogleSuccess}
                    onFailure={handleGoogleFailure}
                />
            </div>
        </motion.div>
    );
};

export default WelcomeForm;
