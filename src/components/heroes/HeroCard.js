import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    
    console.log('public/assets/heroes/dc-arrow.jpg')
    console.log('https://github.com/ralfId/HeroApp/blob/40da456e6a283f2b7e94c7ab99f6a5a54e9bb8ac/public/assets/heroes/dc-arrow.jpg')
    return (
        <div className="col animate__fadeIn">
            <div className="card h-100" style={{ maxWidth: 540 }}>
                <div className="row">
                    <div className="col-md-4">
                        <img className="card-img img-fluid" src={`assets/heroes/${id}.jpg`} alt={superhero} />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) 
                                    && <p className="text-card">{characters}</p>
                            }
                            <p className="card-text">{first_appearance}</p>
                            <Link to={`./hero/${id}`} className="btn btn-outline-primary">Mas...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
