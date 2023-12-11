import React from "react"
import { useSelector } from "react-redux"

import { useAppDispatch, type RootState } from "../../../store"
import { fetchMovies } from "../slice"

const MovieList = (): JSX.Element => {
    const movies = useSelector((state: RootState) => state.movies.movies)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <div>
            <div>Movies: {movies.length}</div>
            <div className="tw-flex tw-w-full">
                {movies.length > 0 && (
                    <ul>
                        {movies.map(
                            (movie, index): JSX.Element => (
                                <li key={index}>
                                    {movie.title} ({movie.year})
                                </li>
                            ),
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default MovieList
