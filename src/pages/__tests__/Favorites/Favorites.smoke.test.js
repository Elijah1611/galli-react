import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Favorites from '../../Favorites'
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

test('Render Favorites Title', async () => {
    const queryClient = new QueryClient();

    localStorage.setItem('galli_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzZDg0ZjJhLWU4YjctNDY3MC1iZjAxLWE0MDk4ZThhYjFhYSIsInVzZXJuYW1lIjoiVGVzdFVzZXIiLCJpYXQiOjE2MzYyMTQ2MTQsImV4cCI6MTYzNjIyNTQxNH0.1W1rHunRbEY3bmtz_rdx5BS0uO5JPJiE8M2ezOH7ZnU')

    const { findByTestId } = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Favorites />
            </MemoryRouter>
        </QueryClientProvider>
    )

    const title = await findByTestId('title')
    expect(title).toBeInTheDocument()
    expect(title.textContent).toBe('Favorites')
});