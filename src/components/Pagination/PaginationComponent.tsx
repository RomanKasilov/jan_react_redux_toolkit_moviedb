import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import {Button, Stack} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {IPaginatedMoviesList} from "../../types";
import css from './Pagination.module.css'

interface IProps {
    movies: IPaginatedMoviesList
}

const PaginationComponent: FC<IProps> = ({movies}) => {
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
        <Stack className={css.buttonsWrapper}
               direction="row"
               spacing={10}>
            <Button disabled={currentPage <= 1} onClick={() => paginator('prev')}
                    variant="outlined" startIcon={<ArrowBackIosIcon/>}>
                prev Page
            </Button>
            <Button disabled={currentPage === total_pages || currentPage === maxPage} onClick={() => paginator('next')}
                    variant="outlined" endIcon={<ArrowForwardIosIcon/>}>
                next Page
            </Button>
        </Stack>
    );
}

export {PaginationComponent};
