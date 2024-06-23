import css from './NavBar.module.css'
import {Collapse, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {useAppSelector} from "../../hooks/redux.hooks";

const NavBar = () => {
    const {genres} = useAppSelector(state => state.genres);
    const [open, setOpen] = useState<boolean>(false)
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className={css.navBarBox}>
            <List>
                    <ListItemButton>
                        <ListItemText primary='All movies'/>
                    </ListItemButton>

                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary='All genres'/>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                <Collapse sx={{boxSizing:'border-box', overflow:'auto'}} in={open} timeout="auto" unmountOnExit>
                    <List>
                        {genres.map(genre =>
                            <ListItemButton>
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