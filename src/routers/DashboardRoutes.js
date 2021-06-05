import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (

        <>
            <NavBar />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroesScreen} />
                    <Route exact path="/search" component={SearchScreen}/>

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
