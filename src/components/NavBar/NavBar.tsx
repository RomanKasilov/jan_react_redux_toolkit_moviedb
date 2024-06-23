import css from './NavBar.module.css'
import {Collapse, List, ListItemButton, ListItemText} from "@mui/material";
import {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {useAppSelector} from "../../hooks/redux.hooks";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const {genres} = useAppSelector(state => state.genres);
    const [open, setOpen] = useState<boolean>(false)
    const navigate = useNavigate();
    const handleClick = () => {
        setOpen(!open);
    };
    const clickHandler=()=>{

    }
    return (
        <div className={css.navBarBox}>
            <List>
                    <ListItemButton onClick={()=>navigate('/movies')}>
                        <ListItemText primary='All movies'/>
                    </ListItemButton>

                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary='All genres'/>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                <Collapse sx={{boxSizing:'border-box'}} in={open} timeout="auto" unmountOnExit>
                    <List>
                        {genres.map(genre =>
                            <ListItemButton key={genre.id} onClick={()=> {
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