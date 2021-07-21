import {useEffect} from 'react';
import '../globalStyles.css'
import Header from '../components/Header'
import Head from 'next/head'
import NProgress from 'nprogress';
import {useRouter} from 'next/router';
import Footer from '../components/Footer';

function MyApp({Component, pageProps}) {
    const router = useRouter()
    useEffect(() => {
        const startProgress = () => NProgress.start()
        const stopProgress = () => NProgress.done()

        router.events.on('routeChangeStart', startProgress)
        router.events.on('routeChangeComplete', stopProgress)
        router.events.on('routeChangeError', stopProgress)

        return() => {
            router.events.off('routeChangeStart', startProgress)
            router.events.off('routeChangeComplete', stopProgress)
            router.events.off('routeChangeError', stopProgress)
        }
    }, [router])
    const sec = pageProps.sec ? pageProps.sec : '';
    return (
        <>
            <Head>
                <link rel="icon" href="favicon.png"/>
            </Head>
            <Header sec={sec}/>
            <Component {...pageProps}/>

            <Footer/> {/* Footer */} </>
    )
}

export default MyApp
