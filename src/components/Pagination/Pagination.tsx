import {useSearchParams} from "react-router-dom";
import css from './Pagination.module.css'
import {FC} from "react";
import {IPaginatedMoviesList} from "../../types/IPaginatedMoviesList";

interface IProps {
    movies: IPaginatedMoviesList
}

const Pagination: FC<IProps> = ({movies}) => {
    const {page, total_pages} = movies;
    const [, SetParams] = useSearchParams();
    const currentPage = page ? page : 1;
    const maxPage = 500; //Api send only first 500 pages of results

    const paginator = (action: string) => {
        switch (action) {
            case 'prev':
                SetParams({page: `${currentPage - 1}`})
                break;
            case 'next':
                SetParams({page: `${currentPage + 1}`})
                break;
        }
    }
    return (
        <div className={css.buttonsWrapper}>
            <button disabled={currentPage <= 1} onClick={() => paginator('prev')}>prev</button>
            <button disabled={currentPage === total_pages || currentPage === maxPage} onClick={() => paginator('next')}>next</button>
        </div>
    );
}

export {Pagination};
