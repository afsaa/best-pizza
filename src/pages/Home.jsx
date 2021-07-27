import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RestaurantCard from "../components/RestaurantCard";
import '../App.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

function useSearchStores(stores) {
    const [query, setQuery] = useState("");
    const [filteredStores, setFilteredStores] = useState(stores);

    useMemo(() => {
      const result = stores.filter((store) => {
        return `${store.name}`.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredStores(result);
    }, [stores, query]);

    return { query, setQuery, filteredStores };
  }

const Home = () => {
  const [pizzerias, setPizzerias] = useState([])
  const { query, setQuery, filteredStores } = useSearchStores(pizzerias);

  const fetchStores = async () => {
    const { data } = await axios.get('https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json')
    setPizzerias(data.response.stores);
  }
  
  useEffect(() => {
    fetchStores();
  }, [])

    return (
    <>
        <div className="app">
            <Header />
            <div className="main">
                <nav className="nav">
                  <ul className="nav__menu">
                      <li className="menu__item"><Link to="/home" className="link">Pizzerías</Link></li>
                  </ul>
                  <div>
                      <p><Link to="/" className="link">Salir</Link></p>
                  </div>
                </nav>
                <div className="main__description">
                  <h1>Tiendas</h1>
                  <p>Escoge tu pizzería favorita</p>
                </div>
                <div className="search-bar">
                  <input
                    type="text"
                    value={query}
                    placeholder="Busca tu pizzería"
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                </div>
                <div className="main__container">
                  <div className="pizzerias__container">
                      {filteredStores.map((restaurant, index) => {
                      return (<RestaurantCard key={index} name={restaurant.name} address={restaurant.address} imgSrc={restaurant.imgSrc} imgAlt={restaurant.imgAlt} />)})}
                  </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
    )
}

export default Home;
