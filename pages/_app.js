// import 'tailwindcss/tailwind.css'
import '../globalStyles.css'
import Header from '../components/Header'

function MyApp({Component, pageProps}) {
    const sec = pageProps.sec ? pageProps.sec : '';
    return (
        <>
            <Header sec={sec}/>
            <Component {...pageProps}/>

        </>
    )
}

export default MyApp
