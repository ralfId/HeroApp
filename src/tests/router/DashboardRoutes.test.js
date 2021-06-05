import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';

describe('pruebas en DashboardRoutes.js', () => {

    const valueContext = {
        dispatch: jest.fn(),
        user: { logged: true, name: 'rafael' }
    }
    test('debe de mostrarse correctamente', () => {

        const wrapper = mount(
            <AuthContext.Provider value={valueContext} >
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>

        )

        expect(wrapper).toMatchSnapshot();
    });
});