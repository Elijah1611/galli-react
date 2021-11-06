import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Home from '../../Home'
import { Router, MemoryRouter } from 'react-router';
import { createMemoryHistory } from 'history'

// Auth/JWT Token Present

const jwtToken = {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "username": "testuser"
}

beforeAll(() => {
    localStorage.setItem('galli_token', jwtToken)
})

afterAll(() => {
    localStorage.removeItem('galli_token')
})

test('Render Discover Button', async () => {
    const { findByTestId } = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )

    const discoverBtn = await findByTestId('discoverBtn')

    const token = localStorage.getItem('galli_token')

    expect(discoverBtn).toBeInTheDocument()
    expect(discoverBtn.textContent).toBe('Discover')
    expect(token).toBeTruthy()
});

test('Render Discover Page From Link', async () => {
    const history = createMemoryHistory();

    const { findByTestId } = render(
        <Router history={history}>
            <Home />
        </Router>
    )

    const discoverBtn = await findByTestId('discoverBtn')
    const token = localStorage.getItem('galli_token')

    expect(token).toBeTruthy()
    expect(history.location.pathname).toBe('/');

    fireEvent.click(discoverBtn);

    expect(history.location.pathname).toBe('/discover');
});