import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {createTheme, Paper, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
import {NavBar} from "../components/NavBar/NavBar";
import css from './MainLayout.module.css'
import {useAppDispatch} from "../hooks/redux.hooks";
import {genreActions} from "../redux/slices/genreSlice";

const MainLayout = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);
    const [state, setState] = useState(false)
    const trigger = () => {
        setState(prevState => !prevState)
    }
    const appTheme = createTheme({
        palette: {
            mode: state ? 'light' : 'dark'
        }
    })
    return (
        <ThemeProvider theme={appTheme}>
            <Paper square>
                <Header trigger={trigger} state={state}/>
                <div className={css.mainBar} >
                    <NavBar/>
                    <div className={css.outlet}><Outlet/></div>
                </div>
            </Paper>
        </ThemeProvider>
    );
};

export {MainLayout};