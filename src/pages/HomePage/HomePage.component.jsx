import React from 'react';
import FeatureItem from '../../components/FeatureItem/FeatureItem.component';

const Homepage = (props) => (
  <div className="homepage">
    <section>
      <h1>{props.product.title}</h1>
      <img src={props.product.homepageImg} alt="" />
    </section>

    <section>
      <p>{props.product.homepageInfo}</p>
    </section>

    <section>
      <h2>Product Features</h2>

      {
        props.product.features.map((f, i) => (
          <FeatureItem key={i} title={f.title} info={f.homepageInfo} url={f.url} />
        ))
      }

    </section>

    <hr />
    <button>Contact Us</button>
  </div>
);

export default Homepage;