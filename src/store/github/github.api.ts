import { IUser, ServerResponse, IRepo } from './../../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/',
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({ //первый дженерик то что мы получаем в ответ от сервера, вторым дженериком то что мы хотим принимать для того чтобы сделать запрос
            query: (search: string) => ({
                url: `search/users`,   // ?q=${search} снизу аналог, более правильный 
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),

        getUserRepos: build.query<IRepo[], string>({
            query: (userName: string) => ({
                url:  `users/${userName}/repos`
            })
        }),

        // createUser: build.mutation<any, void>({    пример если бы бек поддерживал создание юзера, используется mutation
        //     query: () => ''
        // })
    })
})


export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;