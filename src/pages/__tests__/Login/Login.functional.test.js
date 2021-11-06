import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Login from '../../Login'
import { Router } from 'react-router';
import { createMemoryHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query';


test('First Name Text Field Works Correctly', async () => {
    const history = createMemoryHistory({ initialEntries: ['/register'] });
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <Router history={history}>
                <Login />
            </Router>
        </QueryClientProvider>
    )

    const usernameField = await findByTestId('usernameField')

    fireEvent.change(usernameField, {
        target: {
            value: 'John'
        }
    })

    expect(usernameField.value).toBe('John')
});