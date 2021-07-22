import {tmdbLink} from './constants'

const fetcher = async (path) => fetch(tmdbLink(path)).then(payload).catch(errorMessage)

const errorMessage = (_ = '', msg = "Sorry, we couldn't complete your request. Please Try again in a moment") => {
    console.log('fetchError:' + _.message ? _.message : _)
    return {error: true, message: msg}
}
const payload = async (data) => {
    const receivedData = await data.json()
    // console.log(receivedData)
    const results = receivedData.results ? receivedData.results : receivedData.title ? receivedData : errorMessage('', "Sorry, we couldn't complete your request. Please Try again in a moment")
    return results
}


export const movieDetails = async (movieId) => {
    const path = `movie/${movieId}`
    return fetcher(path)
}

export const similarMovies = async (movieId) => {
    const path = `movie/${movieId}/similar`
    return fetcher(path)
}

export const trendingMovies = async () => {
    const path = 'trending/all/week'
    return fetcher(path)
}

export const popularMovies = async () => {
    const path = 'movie/popular'
    return fetcher(path)
}
