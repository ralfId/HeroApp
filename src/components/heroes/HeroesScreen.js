import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroesScreen = ({history}) => {
    const {heroeId}  = useParams();
    
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    if (!hero) {
        return <Redirect to="/"/>
    }

    const {id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters} = hero;
    
    const handleGoBack = () => {
        
        if (history.length <= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
    }
    

    return (
        <div className="row">
            <div className="col-4 ">
                <img className="img-thumbnail animate__slideInLeft " src={`../assets/heroes/${id}.jpg`} alt=""/>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {alter_ego} </li>
                    <li className="list-group-item"><b>Publisher: </b> {publisher} </li>
                    <li className="list-group-item"><b>Firs appearance </b> {first_appearance} </li>
                </ul>
                
                <br/>
                <br/>

                <h5>Characters</h5>
                <p> {characters} </p>
                <br/>
                <button className="btn btn-outline-info" onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    )
}
