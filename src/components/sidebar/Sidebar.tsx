import Image from "next/image"
import { pet } from "@/constants/assets"

export default function Sidebar() {
  return (
    <nav className=''>
      <Image
        src={pet}
        alt='Pet'
        width={100}
        height={100}
        className='object-cover rounded-full w-[100px] h-[100px]'
      />
    </nav>
  )
}
