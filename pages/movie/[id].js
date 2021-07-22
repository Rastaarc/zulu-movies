import {useEffect, useState} from 'react'
import Head from 'next/head'
import Error from '../../components/Error'
import MovieDetails from '../../components/MovieDetails'
import {movieDetails} from '../../libs/fetchMovies'

const Movie = ({movie, error}) => {
    const initialStates = {
        title: 'Movie Details ',
        desc: 'The Description of the movie goes here'
    }
    const [title, setTitle] = useState(state => initialStates.title)
    const [desc, setDesc] = useState(state => initialStates.desc)
    useEffect(() => {
        if (movie.title) {
            setTitle(movie.title)
        }
        if (movie.overview) {
            setDesc(movie.overview)
        }
        return() => {
            setTitle(prevState => initialStates.title)
            setDesc(prevState => initialStates.desc)
        }
    }, [movie])
    return (
        <>
            <Head>
                <title>{title}
                    | Zulu  - Rastaarc</title>
                <meta name="description"
                    contents={desc}/>
            </Head>

            <div> {
                error ? <Error title="Oop!!!"
                    message={
                        error.message
                    }/> : <MovieDetails movie={movie}/>
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
    console.log(data);

    return {
        props: {
            error: data.error ? data : null,
            movie: data.error ? {} : data
        }
    }
}

export default Movie
