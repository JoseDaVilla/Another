import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Another Sizes',
    description: 'Moda única para cada ocasión',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
