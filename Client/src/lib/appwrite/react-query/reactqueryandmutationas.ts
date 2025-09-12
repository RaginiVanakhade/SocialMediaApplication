import {
  useQuery,
  useMutation,
  useQueryClient,
  useInFiniteQuery
} from '@tanstack/react-query'
import type { INewuser } from '../../../types'
import { createUserAccount } from '../api'

export const userCreateUserMutationAccount = () => {
  return useMutation({
    mutationFn: (user: INewuser) => createUserAccount(user)
  })
}