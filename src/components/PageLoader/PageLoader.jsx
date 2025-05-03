import React from 'react';
import './PageLoader.css'

function PageLoader() {
  return (
    <div className="page-loader">
      <img src={`/Images/logo.png`} alt="Loading..." className="loader-logo" />
    </div>
  );
}

export default PageLoader;