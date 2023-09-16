import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../models/IUser'

export const dataAPI = createApi({
    reducerPath: 'dataAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://new-backend.unistory.app/api/'}),
    endpoints: (build) => ({
        fetchUsers: build.query({
            query: () => ({
                url: '/data'
            })
        })
    })
})
