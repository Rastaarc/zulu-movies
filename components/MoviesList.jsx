import Movie from "./Movie";
import Error from "./Error";

const MoviesList = ({movies}) => {
    return (
        <div className="container mx-auto px-5 py-10 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:flex xl:flex-wrap xl:w-full lg:gap-10">
            {
            movies.length > 0 ? (movies.map((movie) => {
                return <Movie key={
                        movie.id
                    }
                    movie={movie}/>;
            })) : (
                <Error title="No Movies" message="No movies found"/>
            )
        }
            {" "} </div>
    );
};

export default MoviesList;
