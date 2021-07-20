import Head from 'next/head'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'
import {trendingMovies, popularMovies} from '../libs/fetchMovies'
import Error from '../components/Error'
import {sections} from '../libs/constants'


const Home = ({sec, error, movies}) => {
    return (
        <>
            <Head>
                <title>Zulu Movies | Rastaarc
                </title>
                <meta name="description" contents="A WebApp for trending movies from TMDb API by Rastaarc(08141161177)"/>
            </Head>

            {
            error ? <Error title="Oops, Something seem went wrong"
                message={
                    error.message
                }/> : <MoviesList movies={movies}/>
        }

            <Footer/> {/* Footer */} </>
    )
}

export const getServerSideProps = async (context) => {
    const {query} = context
    const sec = query.sec ? query.sec : 'home'
    let data;
    switch (sec) {
        case sections.POPULAR: data = await popularMovies()
            break

        case sections.TRENDING: data = await trendingMovies()
            break

        default: data = await popularMovies()

    }

    // console.log(data)


    return {
        props: {
            sec,
            error: data.error ? data : null,
            movies: data.error ? [] : data
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
