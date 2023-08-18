import Sidebar from "@/components/sidebar/Sidebar"
import "@/app/globals.css"
import Link from "next/link"

export const metadata = {
  title: "esyef Desarrollador web",
  description: "Portafolio profesional esyef",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body>
        <div className='grid lg:grid-cols-4 bg-slate-950 gap-8 text-white '>
          <header className='lg:h-screen  bg-slate-900 shadow-sm shadow-slate-100'>
            <Sidebar />
          </header>
          <main className=' col-span-3 bg-slate-900 shadow-sm shadow-slate-100'>
            <nav>
              <Link href='/projects'>Proyectos </Link>
            </nav>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
