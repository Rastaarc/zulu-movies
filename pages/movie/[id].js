import Head from 'next/head'


const MovieDetails = ({movieId}) => {
    return (
        <>
            <Head>
                <title>Movie Detail | Zulu  - Rastaarc</title>
                <meta name="description" contents="the movie description"/>
            </Head>

            <div>
                Movie Details for {movieId}
                <br/>
                <p>io</p>
            </div>
        </>
    )
}


export const getServerSideProps = async (context) => {
    return {
        props: {
            movieId: context.params.id
        }
    }
}

export default MovieDetails
