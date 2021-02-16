import React from 'react';
import { Link } from 'react-router-dom';
import FeaturePage from '../FeaturePage/FeaturePage.component';

const Homepage = () => (
  <div className="homepage">
    <section>
      <h1>Product Title</h1>
      <img src="https://via.placeholder.com/400" alt="" />
    </section>

    <section>
      <h2>Product Info</h2>
      <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </section>

    <section>
      <h2>Product Features</h2>
      <Link to="/features/feature-1">
        <h3>Feature 1</h3>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.</p>
      </Link>

      <Link to="/features/feature-2">
        <h3>Feature 2</h3>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.</p>
      </Link>

      <Link to="/features/feature-2">
        <h3>Feature 3</h3>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.</p>
      </Link>
    </section>

    <hr />
    <button>Contact Us</button>
  </div>
);

export default Homepage;