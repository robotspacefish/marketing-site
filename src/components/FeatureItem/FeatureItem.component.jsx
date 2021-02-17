import React from 'react';
import { Link } from 'react-router-dom';

const FeatureItem = ({ title, info, url }) => (
  <div className="feature-item">
    <Link to={`/features/${url}`}>
      <h3>{title}</h3>
      <p>{info}</p>
    </Link>
  </div>
);

export default FeatureItem;