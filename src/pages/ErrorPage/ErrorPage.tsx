import {useAppLocation} from "../../hooks";
import {ErrorType} from "../../types";
import css from './ErrorPage.module.css'

const ErrorPage = () => {
    const {state} = useAppLocation<ErrorType>();
    return (
        <div className={css.errorPageBox}>
            <div className={css.header}>
                <h1>ErrorPage!</h1>
                <h3>Something went wrong...</h3>
            </div>
            {state && <div className={css.error}>
                <div>Status_code: {state.status_code}</div>
                <div>Status_message: {state.status_message}</div>
            </div>
            }
        </div>
    );
};

export {ErrorPage};