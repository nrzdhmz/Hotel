import React from 'react';
import cityData from '../data/cityData';

const Cityoptions = () => {


  return (
    <section className="city">
      <div className="container">
        <div className="city-info">Popular Cities</div>
        <div className="cities">
          {cityData.map((city) => (
            <div key={city.id} className={`sehir ${city.widthClass}`}>
              <img src={city.image} alt={city.name} className={city.size}/>
              <div className="avg-info">
                <div className="name">{city.name}</div>
                <div className="wrap">
                <div className="price-tag">Average price: </div>
                <div
                  className="avg-price">{city.avgPrice}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cityoptions;
