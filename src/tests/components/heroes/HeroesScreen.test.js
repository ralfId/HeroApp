import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroesScreen } from '../../../components/heroes/HeroesScreen';

describe('pruebas en HeroesScreen.js', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }



    test('debe mostrar el componente <Redirect/> si no hay arguentos en el URL', () => {

        const wrapper = mount(

            <MemoryRouter initialEntries={['/hero']}>
                <HeroesScreen history={historyMock} />
            </MemoryRouter>

        )

        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('debe de mostrar un hero si el parametro existe y  se encuentra', () => {

        const wrapper = mount(

            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroeId' component={HeroesScreen} />
            </MemoryRouter>
        )

        expect(wrapper.find('div').exists()).toBe(true)

    });

    test('debe de regresar a la pantalla anterior con push', () => {

        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(

            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroeId' component={() => <HeroesScreen history={historyMock} />} />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect(historyMock.push ).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).toHaveBeenCalledTimes(0)

    });

    test('debe de regresar  a la pantalla anterior con goBack()', () => {

        const wrapper = mount(

            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroeId' component={() => <HeroesScreen history={historyMock} />} />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledTimes(0);
        expect(historyMock.goBack).toHaveBeenCalledTimes(1)
    });

    test('debe de llamar el redirect si el heroe no existe', () => {

        const wrapper = mount(

            <MemoryRouter initialEntries={['/hero/marvel-spiderhhhhhhhhhhhhhh']}>
                <Route path='/hero/:heroeId' component={() => <HeroesScreen history={historyMock} />} />
            </MemoryRouter>
        )


        expect(wrapper.text()).toBe("")
    });
});