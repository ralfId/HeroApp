import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe('pruebas en PrivateRoute.js', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar a el componente  si esta autenticado  y guardar ocalStorage', () => {

        const wrapper = mount(

            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span> Hello world </span>}
                    {...props} />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('debe de bloquear el componente si no esta autenticado', () => {
       
        const wrapper = mount(

            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span> Hello world </span>}
                    {...props} />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel'); 
    });
});