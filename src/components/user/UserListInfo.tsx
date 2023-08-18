import { Skill, SocialInfo } from "@/constants/user"
import Link from "next/link"

interface UserInfo<T> {
  title: "Contáctame" | "Habilidades"
  skills?: Skill[]
  social?: SocialInfo[]
}
export default function UserListInfo<T extends object>({
  skills,
  social,
  title,
}: UserInfo<T>) {
  if (title === "Contáctame") {
    return (
      <section className='flex flex-col gap-4'>
        <h1 className='opacity-75'>{title}</h1>
        <ul>
          {social?.map((social) => {
            const { title, link, mailto } = social
            return (
              <li key={social.title + social.link}>
                <Link
                  href={`${mailto ? mailto : link}`}
                  target={`${mailto ? "" : "_blank"}`}
                >
                  <span className='flex gap-2 items-center'>
                    {<social.icon className='text-2xl' />}
                    {title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  return (
    <section className='flex flex-col gap-4'>
      <h1 className='opacity-75'>{title}</h1>
      <ul className='flex flex-wrap gap-8  justify-center'>
        {skills?.map((skill) => {
          const { name } = skill
          return (
            <li key={name} className='flex justify-center gap-2'>
              <h3>{name}</h3>
              <span>
                <skill.icon className='text-2xl' />
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
