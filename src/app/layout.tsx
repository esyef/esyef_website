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
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 text-white h-screen container mr-auto'>
          <header className='lg:h-screen  bg-[rgba(14,20,41,0.43)] shadow-2xl'>
            <Sidebar />
          </header>
          <main className='lg:col-span-3 bg-[rgba(14,20,41,0.43)]'>
            <nav>
              <Link href='/projects'>Proyectos</Link>
            </nav>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
