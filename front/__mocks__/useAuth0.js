const mockUser = {
  email: 'apple@example.com',
  picture: 'https://example.com/user.jpg',
  nickname: 'apple'
};

const useAuth0 = () => ({
  isAuthenticated: true,
  user: mockUser,
  loginWithRedirect: jest.fn(),
});

export { useAuth0 };
