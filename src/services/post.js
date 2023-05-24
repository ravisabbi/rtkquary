import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
      
    }),
    getPostById: builder.query({
        query:(id) =>({
            url:`posts/${id}`,
            method:"GET"
        })
      }),
    deletePost: builder.mutation({
        query:(id)=>({
            url:`posts/${id}`,
            method:'DELETE'
        })
    }),
    createPost:builder.mutation({
        query:() =>({
            url:`posts`,
            method:"POST",
            body:{
                title:"Ravi",
                body:"Sabbi",
                userId:101,
            },
            headers:{
                "Content-type":'application/json; charset=UTF-8',
            }
        })
    })
  })
});

export const { useGetAllPostQuery,useGetPostByIdQuery,useDeletePostMutation,useCreatePostMutation } = postApi;
