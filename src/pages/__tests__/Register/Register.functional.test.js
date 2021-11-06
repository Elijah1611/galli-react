import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Register from '../../Register'
import { Router } from 'react-router';
import { createMemoryHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query';


test('First Name Text Field Works Correctly', async () => {
    const history = createMemoryHistory({ initialEntries: ['/register'] });
    const queryClient = new QueryClient();

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <Router history={history}>
                <Register />
            </Router>
        </QueryClientProvider>
    )

    const firstNameField = await findByTestId('firstNameField')

    fireEvent.change(firstNameField, {
        target: {
            value: 'John'
        }
    })

    expect(firstNameField.value).toBe('John')
});