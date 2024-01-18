import './fonts.css';
import AppRoutes from './components/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './constant' ;


function App() {
  return (
    <Router>
      <GoogleOAuthProvider clientId={ GOOGLE_CLIENT_ID }>
        <div className="App">
            <AppRoutes />
        </div>
        </GoogleOAuthProvider>
    </Router>
  );
}

export default App;

