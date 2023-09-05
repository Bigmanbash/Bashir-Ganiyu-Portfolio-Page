import React from 'react'
import './PricingCard.css'
import { Link } from 'react-router-dom'

function PricingCard() {
    return (
        <div className = "pricing__card">
            <div className = 'pricing__card__container'>

                <div className = 'card'>
                    <h3>- Basic -</h3>
                    <span className = 'bar'></span>
                    <p className = 'currency'>$ 100</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to = '/contact' className = 'btn'>PURCHASE NOW</Link>
                </div>
                <div className = 'card'>
                    <h3>- Premium -</h3>
                    <span className = 'bar'></span>
                    <p className = 'currency'>$ 200</p>
                    <p>- 2 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to = '/contact' className = 'btn'>PURCHASE NOW</Link>
                </div>
                <div className = 'card'>
                    <h3>- Business -</h3>
                    <span className = 'bar'></span>
                    <p className = 'currency'>$ 300</p>
                    <p>- 5 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to = '/contact' className = 'btn'>PURCHASE NOW</Link>
                </div>

            </div>
        </div>
    )
}

export default PricingCard;