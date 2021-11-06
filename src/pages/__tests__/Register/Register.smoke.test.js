import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Register from '../../Register'
import { MemoryRouter, Router } from 'react-router';
import { createMemoryHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query';


test('Render Sign Up Image', async () => {
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const banner = await findByTestId('banner')

    expect(banner).toBeInTheDocument()
});


test('Render Sign Up Title', async () => {
    const history = createMemoryHistory({ initialEntries: ['/register'] });
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <Router history={history}>
                <Register />
            </Router>
        </QueryClientProvider>
    )

    const registerPageTitle = await findByTestId('title')


    expect(history.location.pathname).toBe('/register');
    expect(registerPageTitle).toBeInTheDocument()
    expect(registerPageTitle.textContent).toBe('Sign Up')
});


test('Render First Name Text Field', async () => {
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const firstNameField = await findByTestId('firstNameField')

    expect(firstNameField).toBeInTheDocument()
    expect(firstNameField.value).toBe('')
});


test('Render Create Button', async () => {
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const createBtn = await findByTestId('createBtn')

    expect(createBtn).toBeInTheDocument()
    expect(createBtn.textContent).toBe('Create')
});