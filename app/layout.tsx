import './globals.css'

export const metadata = {
  title: 'Emre Erciyas',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='scrollbar'> 
        {children}
      </body>
    </html>
  )
}
