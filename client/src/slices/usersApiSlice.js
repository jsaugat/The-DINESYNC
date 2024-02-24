import { apiSlice } from "./apiSlice"; // import parent
import { USERS_URL } from "@/constants";

export const usersApiSlice = apiSlice.injectEndpoints({ // inject endpoints to the apiSlice parent
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({ // data is going to be email, pw etc.
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }) 
    }),
  }),
})

export const {
  useLoginMutation
} = usersApiSlice;