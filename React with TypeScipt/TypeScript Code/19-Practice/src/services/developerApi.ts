import type { Developer, DeveloperResponse } from "../types/developers";
import { baseApi } from "./baseApi";




export const developerApi=baseApi.injectEndpoints({
  endpoints:(builder)=> ({
    getDevelopers:builder.query<DeveloperResponse, void>({
      query:(()=> ({
        url:"/users",
        method:"GET"
      })),
      providesTags:(result)=> 
      result 
      ?[
        ...result.users.map((developer)=> ({
          type:"Developer" as const,
          id:developer.id
        })),{
          type:"Developer",
          id:"List",

        }
      ]
      :[
        {
          type:"Developer",
          id:"List"
        }
      ]

      }),
      getDeveloper:builder.query<Developer, number>({
        query:((id)=>({
           url:`/users/${id}`,
           method:"GET"
       
        })),
        providesTags:(_, __, id)=> [
          {
            type:"Developer",
            id,
          }

        ]
      })
    })
  })

  export const {useGetDeveloperQuery,useLazyGetDevelopersQuery, useGetDevelopersQuery} =developerApi;