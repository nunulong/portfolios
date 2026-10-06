import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './Page404.css';

const Page404 = () => {
  return (
    <div className="container">
      <div className="page-404-container">
        <div className="code-404 gradient-text">404</div>
        <h1 className="title-404">Page Not Found</h1>
        <p className="desc-404">
          The page you are looking for doesn't exist or has been moved to another URL.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={18} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
