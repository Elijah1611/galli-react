import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Home from '../../Home'
import { MemoryRouter } from 'react-router';

// No Auth/JWT Token

test('Render Home Page Image', async () => {
    const { findByTestId } = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )

    const homeImage = await findByTestId('home-image')

    expect(homeImage).toBeInTheDocument()
    expect(homeImage.getAttribute('src')).toBeTruthy()
});


test('Render Home Title', async () => {
    const { findByTestId } = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )

    const homeTitle = await findByTestId('home-title')

    expect(homeTitle).toBeInTheDocument()
    expect(homeTitle.textContent).toBe('Galli')
});


test('Render Login Button', async () => {
    const { findByTestId } = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )

    const loginBtn = await findByTestId('loginBtn')

    const token = localStorage.getItem('galli_token')

    expect(loginBtn).toBeInTheDocument()
    expect(loginBtn.textContent).toBe('Log In')
    expect(token).toBeFalsy()
});


test('Render Register Button', async () => {
    const { findByTestId } = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )

    const registerBtn = await findByTestId('registerBtn')

    const token = localStorage.getItem('galli_token')

    expect(registerBtn).toBeInTheDocument()
    expect(registerBtn.textContent).toBe('Register')
    expect(token).toBeFalsy()
});

