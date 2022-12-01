import { User } from "@/models/User"

export const useUserRepository = () => {
   const { get } = useHttp()

   function getUser(userName: string) {
      return get<User>("/users/" + userName)
   }

   return {
      getUser,
   }
}
