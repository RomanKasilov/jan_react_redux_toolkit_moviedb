import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage";
import {MoviePage} from "../pages/MoviePage/MoviePage";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movie/:movieId', element: <MoviePage/>},
            {index: true, element: <Navigate to={'movies'}/>}
        ], errorElement: <ErrorPage/>
    },
]

export const router = createBrowserRouter(routes)