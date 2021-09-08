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

    const heroImage = './assets/heroes/' + id + '.jpg';
    return (
        <div className="col animate__fadeIn">
            <div className="card h-100" style={{ maxWidth: 540 }}>
                <div className="row">
                    <div className="col-md-4">
                        <img className="card-img img-fluid" src={heroImage} alt={superhero} />
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
