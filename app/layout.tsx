import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import About from '../components/about'
import Projects from '../components/projects'
export const metadata = {
  title: 'Emre Erciyas',
  description: 'Personal Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='scrollbar'> 
        <Header />
        {children}
        <Projects />
        <About />
        <Footer />
      </body>
    </html>
  )
}
