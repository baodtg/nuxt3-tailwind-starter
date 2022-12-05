import { User } from "~~/src/models/User"

export const useHome = () => {
   const user = useState<User>("user")
   const toast = useToast()
   const { getUser: fetchUser } = useUserRepository()

   function showToast() {
      // Use it!
      toast("I'm a toast!")
   }

   async function getUser(userName: string) {
      const { data } = await fetchUser(userName)
      if (data) user.value = data
   }

   return {
      showToast,
      user,
      getUser,
   }
}
