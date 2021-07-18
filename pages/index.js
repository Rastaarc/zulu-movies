import Head from 'next/head'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'

const Home = ({sec}) => {
    return (
        <>
            <Head>
                <title>Zulu Movies | Rastaarc
                </title>
                <link rel="icon" href="favicon.png"/>
                <meta name="description" contents="A WebApp for trending movies from TMDb API by Rastaarc(08141161177)"/>
            </Head>


            <MoviesList/> {/* Main */}

            <Footer/> {/* Footer */} </>
    )
}

export const getServerSideProps = async (context) => {
    const {query} = context
    return {
        props: {
            sec: query.sec ? query.sec : 'home'
        }
    }
}
// export const getStaticProps = async (context) => {

// console.log(context)
// return {
//     props: {
//       sec: 'home'
//     }
// }
// }

export default Home;
