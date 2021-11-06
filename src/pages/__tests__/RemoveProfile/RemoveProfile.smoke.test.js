import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import RemoveProfile from '../../RemoveProfile'
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';


test('Render RemoveProfile Username', async () => {
    const queryClient = new QueryClient();

    localStorage.setItem('galli_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzZDg0ZjJhLWU4YjctNDY3MC1iZjAxLWE0MDk4ZThhYjFhYSIsInVzZXJuYW1lIjoiVGVzdFVzZXIiLCJpYXQiOjE2MzYyMTQ2MTQsImV4cCI6MTYzNjIyNTQxNH0.1W1rHunRbEY3bmtz_rdx5BS0uO5JPJiE8M2ezOH7ZnU')

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <RemoveProfile />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const username = await findByTestId('username')
    expect(username).toBeInTheDocument()
    expect(username.textContent).toBe('TestUser')
});

test('Render RemoveProfile Remove Button', async () => {
    const queryClient = new QueryClient();

    localStorage.setItem('galli_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzZDg0ZjJhLWU4YjctNDY3MC1iZjAxLWE0MDk4ZThhYjFhYSIsInVzZXJuYW1lIjoiVGVzdFVzZXIiLCJpYXQiOjE2MzYyMTQ2MTQsImV4cCI6MTYzNjIyNTQxNH0.1W1rHunRbEY3bmtz_rdx5BS0uO5JPJiE8M2ezOH7ZnU')

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <RemoveProfile />
            </MemoryRouter>
        </QueryClientProvider>
    )


    const removeBtn = await findByTestId('removeBtn')

    expect(removeBtn).toBeInTheDocument()
    expect(removeBtn.textContent).toBe('Yes, Remove My Account')
});