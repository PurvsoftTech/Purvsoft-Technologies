import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, AlertCircle, Compass,} from 'lucide-react';
import '../css/NotFound.css';

const NotFound = () => {
  const suggestions = [
    { name: "Home", path: "/", icon: <Home size={16} /> },
    { name: "Portfolio", path: "/portfolio", icon: <Compass size={16} /> },
    { name: "Contact Us", path: "/contact", icon: <Search size={16} /> }
  ];

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        {/* Animated Background Elements */}
        <div className="notfound-bg-elements">
          <div className="notfound-circle-1"></div>
          <div className="notfound-circle-2"></div>
          <div className="notfound-circle-3"></div>
        </div>

        {/* Main Content */}
        <div className="notfound-card">
          <div className="notfound-code-wrapper">
            <div className="notfound-code">4</div>
            <div className="notfound-code-animation">
              <AlertCircle size={60} />
            </div>
            <div className="notfound-code">4</div>
          </div>
          
          <h1 className="notfound-title">Page Not Found</h1>
          <p className="notfound-message">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="notfound-suggestions">
            <h3>You might want to try:</h3>
            <div className="notfound-links">
              {suggestions.map((item, index) => (
                <Link key={index} to={item.path} className="notfound-link">
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="notfound-buttons">
            <Link to="/" className="notfound-btn-primary">
              <Home size={18} />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="notfound-footer">
          Purvsoft Technologies — Ahmedabad, India
        </p>
      </div>
    </div>
  );
};

export default NotFound;