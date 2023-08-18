import {
  AiFillGithub,
  AiFillHtml5,
  AiFillLinkedin,
  AiOutlineMail,
  BiLogoCss3,
  PiFileSqlBold,
  TbBrandNextjs,
  TbBrandTypescript,
  pet,
} from "@/constants/assets"
import { StaticImageData } from "next/image"
import { IconType } from "react-icons"

export interface Profileinfo {
  fullname: string
  jobtite: string
  avatar?: StaticImageData
}

export interface SocialInfo {
  title: string
  icon: IconType
  link?: string
  mailto?: string
}

export interface Skill {
  name: string
  icon: IconType
}

export interface Userinfo {
  profile: Profileinfo[]
  social: SocialInfo[]
  skills: Skill[]
}

export const Contactinfo: SocialInfo[] = [
  {
    title: "@esyef",
    icon: AiFillGithub,
    link: "https://github.com/esyef",
  },
  {
    title: "@esyef",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/esyef/",
  },
  {
    title: "Envíame un correo",
    icon: AiOutlineMail,
    mailto: "mailto:yeferson.tech@gmail.com",
  },
]

export const ProfileInfo: Profileinfo[] = [
  {
    fullname: "Yeferson Olarte Roncancio",
    jobtite: "Desarrollador web",
    avatar: pet,
  },
]

export const skills: Skill[] = [
  {
    icon: AiFillHtml5,
    name: "HTML5",
  },
  {
    icon: TbBrandNextjs,
    name: "Nextjs",
  },
  {
    icon: AiFillGithub,
    name: "Git",
  },
  {
    icon: TbBrandTypescript,
    name: "Typescript",
  },
  {
    icon: BiLogoCss3,
    name: "CSS3",
  },
  {
    icon: PiFileSqlBold,
    name: "SQL",
  },
]

export const User: Userinfo[] = [
  {
    profile: ProfileInfo,
    social: Contactinfo,
    skills: skills,
  },
]
