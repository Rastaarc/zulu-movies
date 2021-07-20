// import 'tailwindcss/tailwind.css'
import '../globalStyles.css'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    const sec = pageProps.sec ? pageProps.sec : '';
    return (
        <>
            <Head>
                <link rel="icon" href="favicon.png"/>
            </Head>
            <Header sec={sec}/>
            <Component {...pageProps}/>

        </>
    )
}

export default MyApp
