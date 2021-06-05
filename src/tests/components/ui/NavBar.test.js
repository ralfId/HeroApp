import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { NavBar } from "../../../components/ui/NavBar";
import { types } from "../../../types/types";
import '@testing-library/jest-dom'

describe('puebas en NavBar.js', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn(),
    }

    const valueContext = {
        dispatch: jest.fn(),
        user: { logged: true, name: 'rafa' }
    }
    const wrapper = mount(

        <AuthContext.Provider value={valueContext}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <NavBar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach(()=>{
        jest.clearAllMocks();
    })


    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').text().trim()).toBe('rafa')

    });

    test('debe de llamar el handleLogout y usar el  history', () => {
        //se llama la funcion y con () se ejecuta una vez
        wrapper.find('button').prop('onClick')()

        expect(valueContext.dispatch).toHaveBeenCalledWith({ type: types.logout });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');

    });

});