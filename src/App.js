import './App.css';
import React, { useState, useEffect } from 'react'
// import HeaderComponent from './components/Header/header.component';
import Logo from './components/Logo';
import SearchBar from './components/search-bar/searchBar.component';
import CardList from './components/CardList/cardlist.component'
import data from './stays.json'
// import CardComponent from './components/Card/card.component';

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
        <div className="header">
          <Logo
                showAll ={() => getAllProperties()} />
          <SearchBar 
            place={location}
            changeCity={(val) => changeCity(val)}
            getFilteredData={(children, adults, city) => 
                getFilteredData(children, adults, city)}  
            />
        </div>

        <div className="top-texts">
            <h2>Stays in Finland</h2>
            <p>{items.length}+ Stays</p>
        </div>

        <div className="card-row">
            {
              items.map((item) => {
                return <CardList
                    key={item.title}
                    image={item.photo}
                    superHost={item.superHost}
                    type={item.type}
                    beds={item.beds}
                    rating={item.rating}
                    title={item.title}/>
              })
            }
        </div>
        <div className="footer_link">
          <p>created by <a href="https://silas-abiodun.vercel.app/" target="_blank" rel="noreferrer">Nerdyxils</a>  - devChallenges.io</p>
        </div>
      </div>
  )
}

export default App;
