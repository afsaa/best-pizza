import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RestaurantCard from "../components/RestaurantCard";
import '../App.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [pizzerias, setPizzerias] = useState([])

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
                <div className="main__container">
                  <div className="pizzerias__container">
                      {pizzerias.map((restaurant, index) => {
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
