import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('pruebas en SearchScreen.js', () => {

    test('debe de mostrarse correctamente con los valores por defectp', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-info').exists()).toBe(true)
    });

    test('debe mostrar a batman y el input con el valor del  queryString', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        );

        // expect(wrapper.find('input').prop('value')).toBe('batman')
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('input').exists()).toBe(true)
        expect(wrapper.find('HeroCard').exists()).toBe(true)
    });

    test('debe de mostrar un error si no encuentra el hero', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batmanrrrrr']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-danger').exists()).toBe(true)
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`There is no a hero called: "batmanrrrrr"`)
    });

    test('debe de llamar el push del history', () => {

        const historyMock = {
            push: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={() => <SearchScreen history={historyMock} />} />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        })

        wrapper.find('form').prop('onSubmit')({ preventDefault(){} })
        
        expect(historyMock.push).toHaveBeenCalledTimes(1)
        expect(historyMock.push).toHaveBeenCalledWith('?q=batman')

    });
});