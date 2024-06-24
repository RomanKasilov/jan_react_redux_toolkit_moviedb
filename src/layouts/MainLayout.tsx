import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {createTheme, Paper, ThemeProvider} from "@mui/material";

import {Header, NavBar} from "../components";
import {useAppDispatch} from "../hooks";
import {genreActions} from "../redux/slices";
import css from './MainLayout.module.css'

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
            <Paper sx={{height: '100vh'}} square>
                <Header trigger={trigger} state={state}/>
                <div className={css.mainBar}>
                    <NavBar/>
                    <div className={css.outlet}><Outlet/></div>
                </div>
            </Paper>
        </ThemeProvider>
    );
};

export {MainLayout};