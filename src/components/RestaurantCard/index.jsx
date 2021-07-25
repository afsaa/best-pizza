import React from 'react'
import './styles.scss';

const RestaurantCard = ({ imgSrc, imgAlt, name, address,  }) => {
    return (
        <div className="card">
            <div className="card__img-container">
                <img src={imgSrc} alt={imgAlt} />
            </div>  
            <div className="card__description">
                <h2>{name}</h2>
                <p>{address}</p>
            </div>
        </div>
    )
}

export default RestaurantCard
