import {
  // useQuery,
  useMutation,
  // useQueryClient,
  // useInFiniteQuery
} from '@tanstack/react-query'
import type { INewUser } from '../../../types'
import { createUserAccount, signInAccount } from '../api'



// Hook to create user
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  })
}

// Hook to sign in user
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string, password: string }) => signInAccount(user),
  })
}
