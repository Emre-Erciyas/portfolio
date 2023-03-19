import './globals.css'
import Header from './header'

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
      <body> 
        <Header />
        {children}
      </body>
    </html>
  )
}
