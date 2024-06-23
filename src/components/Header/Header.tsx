import css from './Header.module.css'
import {Switcher} from "../Switcher/Switcher";
import {FC} from "react";
import classNames from "classnames";
import {TextField} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/redux.hooks";
import {useNavigate} from "react-router-dom";

interface ISearch {
    query: string
}

interface IProps {
    trigger: () => void
    state: boolean
}

const Header: FC<IProps> = ({trigger, state}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<ISearch>();
    const handler: SubmitHandler<ISearch> = ({query}) => {
        localStorage.setItem('searchString', query )
        navigate('/movies/search',{state:query})
    }
    const classes = classNames(
        css.header,
        state ? css.lightSide : css.darkSide)
    return (
        <div className={classes}>
            <form onSubmit={handleSubmit(handler)}>
                <TextField label="Search.." variant="outlined" {...register('query')} />
            </form>
            <div className={css.headerWrapperBox}>
                <Switcher trigger={trigger}/>
                <div>User</div>
            </div>
        </div>
    );
};

export {Header};