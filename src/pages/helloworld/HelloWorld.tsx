import React from "react"
import MovieList from "../../components/movies/components/MovieList"

export const HelloWorld = (): JSX.Element => {
    return (
        <div>
            <h1 className="tw-bg-yellow-200">Hello!!</h1>
            <h2>Hello World!</h2>
            <MovieList />
        </div>
    )
}

export default HelloWorld
