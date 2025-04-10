import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'

export default function Home() {
    useEffect(() => {
        // Redirect to the static HTML file
        window.location.href = '/index.html'
    }, [])

    return (
        <>
            <Head>
                <title>Another Sizes</title>
                <meta name="description" content="Moda única para cada ocasión" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <p>Redirigiendo...</p>
            </div>
        </>
    )
}
