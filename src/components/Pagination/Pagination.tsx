import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../pages/hooks/redux.hooks";

const Pagination = () => {
    const {movies} = useAppSelector(state => state.movies);
    const [, SetParams] = useSearchParams();

    const currentPage = movies?.page ? movies.page : 1;
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
        <div>
            <button disabled={currentPage <= 1} onClick={() => paginator('prev')}>prev</button>
            <button disabled={currentPage === maxPage} onClick={() => paginator('next')}>next</button>
        </div>
    );
}

export {Pagination};
