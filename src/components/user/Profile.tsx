import { Profileinfo } from "@/constants/user"
import Image from "next/image"

interface ProfileProps {
  data: Profileinfo[]
}

export default function Profile({ data }: ProfileProps) {
  return (
    <>
      {data.map((user) => {
        const { fullname, jobtite, avatar } = user
        return (
          <article key={fullname} className='flex flex-col gap-4 '>
            <figure className='w-full flex justify-center'>
              <Image
                src={avatar!}
                alt={fullname}
                width={100}
                height={100}
                className='object-cover rounded-full w-[100px] h-[100px] text-center'
                priority
              />
            </figure>

            <aside>
              <h1 className='text-base lg:text-xl font-bold'>{fullname}</h1>
              <h2 className='font-semibold tracking-wide'>{jobtite}</h2>
            </aside>
          </article>
        )
      })}
    </>
  )
}
