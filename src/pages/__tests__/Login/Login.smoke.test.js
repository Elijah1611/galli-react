import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Login from '../../Login'
import { MemoryRouter, Router } from 'react-router';
import { createMemoryHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query';


test('Render Log In Image', async () => {
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const banner = await findByTestId('banner')

    expect(banner).toBeInTheDocument()
});


test('Render Log In Title', async () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] });
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <Router history={history}>
                <Login />
            </Router>
        </QueryClientProvider>
    )

    const loginPageTitle = await findByTestId('title')


    expect(history.location.pathname).toBe('/login');
    expect(loginPageTitle).toBeInTheDocument()
    expect(loginPageTitle.textContent).toBe('Log In')
});


test('Render Username Text Field', async () => {
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const usernameField = await findByTestId('usernameField')

    expect(usernameField).toBeInTheDocument()
    expect(usernameField.value).toBe('')
});


test('Render Log In Button', async () => {
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const loginBtn = await findByTestId('loginBtn')

    expect(loginBtn).toBeInTheDocument()
    expect(loginBtn.textContent).toBe('Log In')
});