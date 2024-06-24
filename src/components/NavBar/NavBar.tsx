import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Collapse, List, ListItemButton, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

import {useAppSelector} from "../../hooks";
import css from './NavBar.module.css'

const NavBar = () => {
    const {genres} = useAppSelector(state => state.genres);
    const [open, setOpen] = useState<boolean>(false)
    const navigate = useNavigate();
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className={css.navBarBox}>
            <List>
                <ListItemButton onClick={() => navigate('/movies')}>
                    <ListItemText primary='All movies'/>
                </ListItemButton>

                <ListItemButton onClick={handleClick}>
                    <ListItemText primary='All genres'/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse sx={{boxSizing: 'border-box'}} in={open} timeout="auto" unmountOnExit>
                    <List>
                        {genres.map(genre =>
                            <ListItemButton key={genre.id} onClick={() => {
                                navigate(`movies/${genre.name}`)
                                localStorage.setItem('genre', `${genre.id}`)
                            }}>
                                <ListItemText primary={genre.name}/>
                            </ListItemButton>
                        )
                        }
                    </List>
                </Collapse>
            </List>
        </div>
    );
};

export {NavBar};