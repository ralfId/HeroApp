import React, { useMemo } from 'react'
import { useForms } from '../../customhooks/useForm';
import { HeroCard } from '../heroes/HeroCard'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleOnChange] = useForms({ searchText: q })
    const { searchText } = formValues;

    const heroFiltered = useMemo(() => getHeroesByName(q), [q]);


    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`?q=${searchText}`);
    }




    return (
        <div className="row">
            <div className="col-4">
                <h3>Search Form</h3>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="find a hero" className="form-control" name="searchText" onChange={handleOnChange} />
                    <button className="btn btn-primary  mt-2">search</button>
                </form>
            </div>
            <div className="col-8">
                <h3 className="px-auto">Result</h3>
                <hr />

                {
                    (q === '')
                    &&
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                }
                {
                    (q !== '' && heroFiltered.length === 0)
                    &&
                    <div className="alert alert-danger">
                        There is no a hero called: "{ q }"
                    </div>
                }
                {
                    heroFiltered.map(h => (<HeroCard key={h.id} {...h} />))
                }
            </div>
        </div>
    )
}
