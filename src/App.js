import Header from "./components/Header";
import Footer from "./components/Footer";
import PanosPizza from './assets/Panos_pizza.png'
import SbarroPizza from './assets/Sbarro.png'
import RestaurantCard from "./components/RestaurantCard";
import './App.scss'

const pizzerias = [{
  name: "Pano's Pizza",
  address: "Av. Siempre Viva 123",
  imgSrc: PanosPizza,
  imgAlt: "Pano's pizza",
}, {
  name: "Sbarro Pizza",
  address: "Av. Siempre Viva 123",
  imgSrc: SbarroPizza,
  imgAlt: "Sbarro pizza",
}, {
  name: "Sbarro Pizza",
  address: "Av. Siempre Viva 123",
  imgSrc: SbarroPizza,
  imgAlt: "Sbarro pizza",
}, {
  name: "Sbarro Pizza",
  address: "Av. Siempre Viva 123",
  imgSrc: SbarroPizza,
  imgAlt: "Sbarro pizza",
}, {
  name: "Sbarro Pizza",
  address: "Av. Siempre Viva 123",
  imgSrc: SbarroPizza,
  imgAlt: "Sbarro pizza",
}]

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <nav className="nav">
          <ul className="nav__menu">
            <li className="menu__item">Pizzerías</li>
          </ul>
          <div>
            <p>Salir</p>
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
  );
}

export default App;
