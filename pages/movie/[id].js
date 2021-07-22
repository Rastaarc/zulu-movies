import {useEffect, useState} from 'react'
import Head from 'next/head'
import Error from '../../components/Error'
import MovieDetails from '../../components/MovieDetails'
import {movieDetails, similarMovies} from '../../libs/fetchMovies'

const Movie = ({movie, similar, error}) => {
    const title = movie.title ? movie.title : 'Movie Details'
    const desc = movie.overview ? movie.overview : 'The Description of the movie goes here'

    return (
        <>
            <Head>
                <title>{
                    title + ' '
                }
                    | Zulu  - Rastaarc</title>
                <meta name="description"
                    contents={desc}/>
            </Head>

            <div> {
                error ? <Error title="Oop!!!"
                    message={
                        error.message
                    }/> : <MovieDetails movie={movie}
                    similar={similar}/>
            } </div>
        </>
    )
}


export const getServerSideProps = async (context) => {

    const movieId = context.params.id ? context.params.id : null

    // if (!movieId) {
    //     return {
    //         redirect to home
    //     }
    // }

    const data = await movieDetails(movieId)
    const similar = await similarMovies(movieId)
    // console.log(similar);

    return {
        props: {
            error: data.error ? data : null,
            movie: data.error ? {} : data,
            similar
        }
    }
}

export default Movie
