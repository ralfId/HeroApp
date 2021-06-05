import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4 animate__fadeIn">
                    {
                        heroes.map(h => (
                            <HeroCard key={h.id} {...h} />
                        ))
                    }
                </div>
        </>
    )
}
