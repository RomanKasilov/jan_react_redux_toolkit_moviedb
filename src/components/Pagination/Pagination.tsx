import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../pages/hooks/redux.hooks";
import {useState} from "react";

interface IBlockState {
    prev: boolean,
    next: boolean
}

const Pagination = () => {
    const [block, setBlock] = useState<IBlockState>({prev: true, next: false})
    const {movies} = useAppSelector(state => state.movies);
    const [params, SetParams] = useSearchParams();

    const currentPage = movies?.page ? movies.page : 1;
    const maxPage = 500; //Api send only first 500 pages of results

    const paginator = (action: string) => {
        switch (action) {
            case 'prev':
                if (currentPage > 1) {
                    SetParams({page: `${currentPage - 1}`})
                    setBlock({...block, prev: false})
                } else {
                    setBlock({...block, prev: true})
                }
                break;
            case 'next':
                if (currentPage <= maxPage) {
                    SetParams({page: `${currentPage + 1}`})
                    setBlock({...block, next: false})
                } else {
                    setBlock({...block, next: true})
                }
                break;
        }
    }

    return (
        <div>
            <button disabled={block.prev} onClick={() => paginator('prev')}>prev</button>
            <button disabled={block.next} onClick={() => paginator('next')}>next</button>
        </div>
    );
}

export {Pagination};
