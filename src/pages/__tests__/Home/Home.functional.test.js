import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Home from '../../Home'
import { Router } from 'react-router';
import { createMemoryHistory } from 'history'

// No Auth/JWT Token

test('Render Login Page From Link', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    const { findByTestId } = render(
        <Router history={history}>
            <Home />
        </Router>
    )

    const registerBtn = await findByTestId('registerBtn')
    const token = localStorage.getItem('galli_token')


    expect(token).toBeFalsy()
    expect(history.location.pathname).toBe('/');

    fireEvent.click(registerBtn);

    expect(history.location.pathname).toBe('/register');
});

test('Render Login Page From Link', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    const { findByTestId } = render(
        <Router history={history}>
            <Home />
        </Router>
    )

    const registerBtn = await findByTestId('registerBtn')
    const token = localStorage.getItem('galli_token')

    expect(token).toBeFalsy()
    expect(history.location.pathname).toBe('/');

    fireEvent.click(registerBtn);

    expect(history.location.pathname).toBe('/register');
});