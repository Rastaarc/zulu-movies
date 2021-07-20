const HOST = 'https://api.themoviedb.org/3'

export const tmdbLink = (path) => `${HOST}/${path}?api_key=${
    process.env.TMDB_API_KEY
}`


export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'


export const sections = {
    POPULAR: 'home',
    TRENDING: 'trending',
    ACTORS: 'actors'
}
