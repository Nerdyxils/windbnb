import './App.css';
import React, { useState, useEffect } from 'react'
import HeaderComponent from './components/Header/header.component';
import CardComponent from './components/Card/card.component';
import data from './stays.json'

const App = () => {
  const [location, setLocation] = useState(null);
  const [items, setItems] = useState([]);

  const changeCity = (city) => {
      setLocation(city);
  }

  const getAllProperties = () => {
      setLocation(null);
      setItems(data);
  };

  useEffect(() => {
      getAllProperties();
  }, []);

  const getFilteredData = (children, adults, city) => {
      const totalGuests = children + adults;

      if (totalGuests === 0) {
          setItems(data.filter((property) => property.city === city));
      }

      if (totalGuests !== 0) {
          if (!city)
          setItems(
              data.filter((property) => property.maxGuests === totalGuests)
          );
          else {
              setItems(
                  data.filter(
                      (property) => 
                          property.maxGuests === totalGuests && property.city === city
                  )
              )
          }
      }
      if (totalGuests === 0 && city === null) getAllProperties()
  };

  return (
      <div className="container">
          <HeaderComponent 
              place={location}
              changeCity={(val) => changeCity(val)}
              getFilteredData={(children, adults, city) => 
                  getFilteredData(children, adults, city)}
              showAll ={() => getAllProperties()}
          />
          <div className="top-texts">
              <h2>Stays in Finland</h2>
              <p>{items.length}+ Stays</p>
          </div>
          <CardComponent />
      </div>
  )
}

export default App;
