import React from 'react';
import { mount } from 'enzyme'
import { LoginScreen } from "../../../components/login/LoginScreen";
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('pruebas en LoginScreen.js', () => {

    const valueContext = {
        dispatch: jest.fn(),
        user: { logged: false }
    }

    const historyMock = {
        replace: jest.fn()
    }
    const wrapper = mount(
        <AuthContext.Provider value={ valueContext}>
            <MemoryRouter>
                <LoginScreen history={historyMock}/>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    test('debe  mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('debe de realizar el disparch  y la navegacion', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');
        
        handleClick();

        expect(valueContext.dispatch).toHaveBeenCalledWith({type: types.login, payload: {name: 'Rafael'}})
        expect(historyMock.replace).toHaveBeenCalledWith('/')

        //simulando el localStorage
        localStorage.setItem('lastPath', '/dc');
        handleClick();

        expect(historyMock.replace).toHaveBeenCalledWith('/dc')




        
    });
});