import { useSession } from 'next-auth/client';
import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { SignInButton } from '.';

jest.mock('next-auth/client');

describe('SignInButton component', () => {
  it('renders correctly when user is not signed in', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);
    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument();
  });
  it('renders correctly when user is signed in', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: 'John Doe', email: 'joe@example.com' },
        expires: 'fake-expires',
      },
      false,
    ]);

    render(<SignInButton />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
