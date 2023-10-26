const useAuth0 = () => ({
  isAuthenticated: true,
  user: {
    email: 'apple@example.com',
    picture: 'https://example.com/user.jpg',
    nickname: 'apple'
  },
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
});

export { useAuth0 };
