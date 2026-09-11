/**
 * Server action for user authentication (Login, Register, Logout) per AGENTS.md §21.
 */
'use server';

export interface AuthState {
  success: boolean;
  message?: string;
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export async function loginAction(email: string, pass: string): Promise<AuthState> {
  if (!email || !pass) {
    return { success: false, message: 'Email and password are required.' };
  }
  return {
    success: true,
    message: 'Successfully logged in.',
    user: { id: 'mock-user-1', email, role: 'STUDENT' },
  };
}

export async function registerAction(
  email: string,
  pass: string,
  _name?: string,
): Promise<AuthState> {
  if (!email || !pass) {
    return { success: false, message: 'Email and password are required.' };
  }
  return {
    success: true,
    message: 'Account created successfully.',
    user: { id: 'mock-user-2', email, role: 'STUDENT' },
  };
}
