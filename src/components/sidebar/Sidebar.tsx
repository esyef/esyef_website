import { User } from "@/constants/user"
import UserListInfo from "../user/UserListInfo"
import Profile from "../user/Profile"

export default function Sidebar() {
  const { profile, social, skills } = User[0]
  return (
    <nav className='lg:w-11/12 lg:ml-auto py-8 flex flex-col gap-8'>
      <Profile data={profile} />
      <UserListInfo skills={skills} title='Habilidades' />
      <UserListInfo social={social} title='Contáctame' />
      <footer className='text-center'>
        <p>Bogotá 🇨🇴 </p>
      </footer>
    </nav>
  )
}
