export interface User {
  id: number;
  name: string;
  email: string;
  role: 'customer' | 'worker' | 'employer' | 'admin';
}

export interface LoginResponse {
  user: User;
  token: string;
}

// Mock login – replace with real API later
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const mockUsers: Record<string, User & { password: string }> = {
    'customer@test.com': {
      id: 1,
      name: 'John Doe',
      email: 'customer@test.com',
      password: '123456',
      role: 'customer',
    },
    'worker@test.com': {
      id: 2,
      name: 'Jane Smith',
      email: 'worker@test.com',
      password: '123456',
      role: 'worker',
    },
    'employer@test.com': {
      id: 3,
      name: 'Acme Corp',
      email: 'employer@test.com',
      password: '123456',
      role: 'employer',
    },
    'admin@test.com': {
      id: 4,
      name: 'Admin User',
      email: 'admin@test.com',
      password: '123456',
      role: 'admin',
    },
  };

  const user = mockUsers[email];
  if (!user || user.password !== password) {
    throw new Error('Invalid email or password');
  }

  const { password: _, ...safeUser } = user;
  return { user: safeUser, token: 'mock-jwt-token' };
};

export const logout = () => {
  // Clear stored data (handled in store, but keep for consistency)
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth-storage');
  }
};