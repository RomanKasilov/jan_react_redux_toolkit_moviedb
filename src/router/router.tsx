import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";

import {MainLayout} from "../layouts";
import {
    ErrorPage, MoviesPage, SingleMoviePage, MoviesSearchPage, MoviesByGenrePage
} from "../pages";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movie/:movieId', element: <SingleMoviePage/>},
            {path: 'movies/search', element: <MoviesSearchPage/>},
            {path: 'movies/:genre', element: <MoviesByGenrePage/>},
            {path: 'errorPage', element: <ErrorPage/>},
            {index: true, element: <Navigate to={'movies'}/>}
        ], errorElement: <ErrorPage/>
    },
]

export const router = createBrowserRouter(routes)