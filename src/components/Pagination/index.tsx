import ReactPaginate from "react-paginate"
import { useDispatch } from "react-redux"

import styles from './Pagination.module.scss'

//redux
import { setPage } from "@/redux/pagination/slice"


const Pagination: React.FC = () => {
    const dispatch = useDispatch();

    const handleChange = (page: number) => {
        dispatch(setPage(page + 1));
        window.scrollTo(0, 0);
    }

    return (
        <>
            <ReactPaginate
                className={styles.paginate}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => handleChange(e.selected)}
                pageRangeDisplayed={4}
                pageCount={5}
                previousLabel="<"
            />
        </>
    )
}


export default Pagination