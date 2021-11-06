import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import EditProfile from '../../EditProfile'
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';


test('Render EditProfile Username', async () => {
    const queryClient = new QueryClient();

    localStorage.setItem('galli_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzZDg0ZjJhLWU4YjctNDY3MC1iZjAxLWE0MDk4ZThhYjFhYSIsInVzZXJuYW1lIjoiVGVzdFVzZXIiLCJpYXQiOjE2MzYyMTQ2MTQsImV4cCI6MTYzNjIyNTQxNH0.1W1rHunRbEY3bmtz_rdx5BS0uO5JPJiE8M2ezOH7ZnU')

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <EditProfile />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const username = await findByTestId('username')
    expect(username).toBeInTheDocument()
    expect(username.textContent).toBe('TestUser')
});

test('Render EditProfile Email Field', async () => {
    const queryClient = new QueryClient();

    localStorage.setItem('galli_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzZDg0ZjJhLWU4YjctNDY3MC1iZjAxLWE0MDk4ZThhYjFhYSIsInVzZXJuYW1lIjoiVGVzdFVzZXIiLCJpYXQiOjE2MzYyMTQ2MTQsImV4cCI6MTYzNjIyNTQxNH0.1W1rHunRbEY3bmtz_rdx5BS0uO5JPJiE8M2ezOH7ZnU')

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <EditProfile />
            </MemoryRouter>
        </QueryClientProvider>
    )


    const emailField = await findByTestId('emailField')
    emailField.textContent = 'test@test.com'

    expect(emailField).toBeInTheDocument()
    expect(emailField.textContent).toBe('test@test.com')
});

test('Render EditProfile Update Button', async () => {
    const queryClient = new QueryClient();

    localStorage.setItem('galli_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzZDg0ZjJhLWU4YjctNDY3MC1iZjAxLWE0MDk4ZThhYjFhYSIsInVzZXJuYW1lIjoiVGVzdFVzZXIiLCJpYXQiOjE2MzYyMTQ2MTQsImV4cCI6MTYzNjIyNTQxNH0.1W1rHunRbEY3bmtz_rdx5BS0uO5JPJiE8M2ezOH7ZnU')

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <EditProfile />
            </MemoryRouter>
        </QueryClientProvider>
    )


    const updateBtn = await findByTestId('updateBtn')

    expect(updateBtn).toBeInTheDocument()
    expect(updateBtn.textContent).toBe('Update')
});