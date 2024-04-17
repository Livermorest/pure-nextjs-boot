'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  preState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid username or password.';
        default:
          return 'Something wrong.';
      }
    }
    throw error;
  }
}