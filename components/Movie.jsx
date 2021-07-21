import Image from 'next/image'
import {IMAGE_PATH} from '../libs/constants'
import {useRouter} from 'next/router'
const Movie = ({movie}) => {
    const router = useRouter()


    const pushToDetails = (id) => {
        router.push(`/movie/${id}`)
    }


    return (
        <div className="group cursor-pointer"
            onClick={
                () => pushToDetails(movie.id)
        }>
            <Image className="object-cover object-center transform group-hover:scale-110 transition-all duration-500 ease-in-out" layout="responsive"
                src={
                    `${IMAGE_PATH}${
                        movie.poster_path
                    }`
                }
                width="1920"
                height="1280"/>
            <div className="p-2 truncate w-full max-w-sm">
                <p className="text-xl tracking-wide group-hover:font-bold">
                    {
                    movie.title
                }</p>
                <p className="text-sm w-full">
                    {
                    movie.overview
                }</p>
                <div className="py-3 text-xs">
                    <p>Rating: {
                        movie.vote_average
                    }</p>
                </div>
            </div>
        </div>
    )
}

export default Movie
