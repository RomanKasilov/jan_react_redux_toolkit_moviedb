import {Switcher} from "../Switcher/Switcher";
import {FC} from "react";
import classNames from "classnames";
import {TextField} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import css from './Header.module.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface ISearch {
    query: string
}
interface IProps {
    trigger: () => void
    state: boolean
}

const Header: FC<IProps> = ({trigger, state}) => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<ISearch>();
    const handler: SubmitHandler<ISearch> = ({query}) => {
        localStorage.setItem('searchString', query )
        navigate('/movies/search',{state:query})
    }
    const headerClasses = classNames(
        css.header,
        state ? css.lightMode : css.darkMode)
    return (
        <div className={headerClasses}>
            <form className={state? css.light:css.dark} onSubmit={handleSubmit(handler)}>
                <TextField label="Search.." variant="outlined" {...register('query')}/>
            </form>
            <div className={css.headerWrapperBox}>
                <Switcher trigger={trigger}/>
                <div className={css.userBox} >
                    <AccountCircleOutlinedIcon/>
                    <span>Hello, User!</span>
                </div>
            </div>
        </div>
    );
};

export {Header};