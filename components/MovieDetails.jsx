import Image from 'next/image'
import {IMAGE_PATH} from '../libs/constants'
import Details from './Details'
import Movie from './Movie'
import ProductionCompany from './ProductionCompany'

// const DATA = {
//     adult: false,
//     backdrop_path: '/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
//     belongs_to_collection: null,
//     budget: 63000000,
//     genres: [
//         {
//             id: 18,
//             name: 'Drama'
//         }, {
//             id: 18,
//             name: 'Action'
//         }, {
//             id: 18,
//             name: 'Adventure'
//         },
//     ],
//     homepage: 'http://www.foxmovies.com/movies/fight-club',
//     id: 550,
//     imdb_id: 'tt0137523',
//     original_language: 'en',
//     original_title: 'Fight Club',
//     overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
//     popularity: 45.032,
//     poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
//     production_companies: [
//         {
//             id: 508,
//             logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
//             name: 'Regency Enterprises',
//             origin_country: 'US'
//         },
//         {
//             id: 711,
//             logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
//             name: 'Fox 2000 Pictures',
//             origin_country: 'US'
//         },
//         {
//             id: 20555,
//             logo_path: '/hD8yEGUBlHOcfHYbujp71vD8gZp.png',
//             name: 'Taurus Film',
//             origin_country: 'DE'
//         },
//         {
//             id: 54051,
//             logo_path: null,
//             name: 'Atman Entertainment',
//             origin_country: ''
//         }, {
//             id: 54052,
//             logo_path: null,
//             name: 'Knickerbocker Films',
//             origin_country: 'US'
//         }, {
//             id: 25,
//             logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
//             name: '20th Century Fox',
//             origin_country: 'US'
//         }, {
//             id: 4700,
//             logo_path: '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
//             name: 'The Linson Company',
//             origin_country: 'US'
//         }
//     ],
//     production_countries: [
//         {
//             iso_3166_1: 'DE',
//             name: 'Germany'
//         }, {
//             iso_3166_1: 'US',
//             name: 'United States of America'
//         }
//     ],
//     release_date: '1999-10-15',
//     revenue: 100853753,
//     runtime: 139,
//     spoken_languages: [
//         {
//             english_name: 'English',
//             iso_639_1: 'en',
//             name: 'English'
//         }
//     ],
//     status: 'Released',
//     tagline: 'Mischief. Mayhem. Soap.',
//     title: 'Fight Club',
//     video: false,
//     vote_average: 8.4,
//     vote_count: 22047
// }
const MovieDetails = ({movie, similar}) => { // const DATA = movie
    const DATA = movie
    return (
        <div className="container mx-auto my-5 grid gap-y-8 sm:gap-y-0 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-3 p-5 md:gap-x-10">
            <div className="flex flex-col sm:flex-row sm:col-span-full">
                <div className="">
                    {
                    DATA.poster_path && (
                        <Image className="object-fill transition-all hover:scale-105 duration-700 h-20"
                            src={
                                `${IMAGE_PATH}${
                                    DATA.poster_path
                                }`
                            }
                            width="400"
                            height="360"/>
                    )
                } </div>
                <div className="mt-5 space-y-5 sm:mt-0 sm:px-5 w-full overflow-hidden overflow-ellipsis">
                    <section>
                        <h1 className="text-lg md:text-2xl font-bold">
                            {
                            DATA.title
                        }</h1>
                        <p className="flex flex-wrap text-xs">
                            {
                            DATA.genres && DATA.genres.length > 0 && DATA.genres.map((genre, i) => {
                                const lastItem = i == DATA.genres.length - 1
                                return lastItem ? genre.name : genre.name + ' | '
                            })
                        } </p>
                    </section>
                    <section className="w-full">
                        <Details title="Release Date"
                            text={
                                DATA.release_date && DATA.release_date
                            }/>
                        <Details title="Status"
                            text={
                                DATA.status && DATA.status
                            }/>
                        <Details title="Runtime"
                            text={
                                DATA.runtime && DATA.runtime + 'mins'
                            }/>
                        <Details title="Rating"
                            text={
                                DATA.vote_average && DATA.vote_average
                            }/>
                        <Details title="Budget"
                            text={
                                DATA.budget && '$' + DATA.budget
                            }/>
                        <Details title="Revenue"
                            text={
                                DATA.revenue && '$' + DATA.revenue
                            }/> {/* <Details title="Homepage" link
                            text={
                                DATA.homepage && DATA.homepage
                            }/> */} </section>
                </div>
            </div>
            <div className="flex flex-col space-y-8 sm:col-span-full sm:mt-8">
                <section className="mt-5 w-full">
                    <h5 className="font-bold text-lg sm:text-xl lg:text-2xl text-center">Overview</h5>
                    <p className="text-justify pt-1 lg:text-xl">
                        {
                        DATA.overview ? DATA.overview : 'Uknown Movie'
                    } </p>
                </section>
                {
                (DATA.production_companies && DATA.production_companies.length > 0) && (
                    <section>
                        <h5 className="mt-5 font-bold text-lg sm:text-xl lg:text-2xl text-center">Production Companies</h5>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-evenly">
                            {
                            DATA.production_companies.map(company => {
                                return (
                                    <ProductionCompany key={
                                            company.id
                                        }
                                        name={
                                            company.name
                                        }
                                        country={
                                            company.origin_country
                                        }
                                        img={
                                            company.logo_path
                                        }/>
                                )
                            })
                        } </div>
                    </section>
                )
            }
                <section className="">
                    <h5 className="mt-5 font-bold text-lg sm:text-xl lg:text-2xl mb-5 text-center">Similar Movies</h5>
                    <div className="container grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {
                        similar && similar.length > 0 && (similar.map(movie => {
                            return (
                                <Movie key={
                                        movie.id
                                    }
                                    movie={movie}/>
                            )
                        }))
                    } </div>
                </section>

            </div>
        </div>
    )
}

export default MovieDetails
