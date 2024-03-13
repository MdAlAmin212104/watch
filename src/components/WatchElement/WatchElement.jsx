import React from 'react';
import './WatchElement.css';

const WatchElement = ({watch}) => {
      console.log(watch);
      const {brand, price_usd, model, image_url} = watch;
      return (
            <div className="card">
                  <img src={image_url} alt="Watch img" style={{width: '200px'}} />
                  <h1>Brand : {brand}</h1>
                  <h4>Model : {model}</h4>
                  <p>Price : {price_usd}</p>
            </div>
      );
};

export default WatchElement;