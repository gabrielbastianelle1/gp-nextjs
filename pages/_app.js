import '../styles/globals.css'
import { Baloo_Bhaijaan_2 } from '@next/font/google'

const baloo = Baloo_Bhaijaan_2({
    weight: '800'
})

function MyApp({ Component, pageProps }) {
    return (
        <main className={baloo.className}>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
