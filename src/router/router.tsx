import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage";
import {SingleMoviePage} from "../pages/SingleMoviePage/SingleMoviePage";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";
import {MoviesSearchPage} from "../pages/MoviesSearchPage/MoviesSearchPage";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movie/:movieId', element: <SingleMoviePage/>},
            {path:'movies/search', element:<MoviesSearchPage/>},
            {index: true, element: <Navigate to={'movies'}/>}
        ], errorElement: <ErrorPage/>
    },
]

export const router = createBrowserRouter(routes)