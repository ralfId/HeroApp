// const { shallow } = require("enzyme");
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en AppRouter.js', () => {

    test('debe de mostrar el login si no esta autenticado', () => {

        const valueContext = {
            dispatch: jest.fn(),
            user: { logged: false }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ valueContext }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el componente <MarvelScreen/> si esta autenticado', () => {
        const valueContext = {
            dispatch: jest.fn(),
            user: { logged: true, name: 'rafael' }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ valueContext }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);
        
    });
});