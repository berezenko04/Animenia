import ReactPaginate from "react-paginate"
import { useSelector } from "react-redux"

import styles from './Pagination.module.scss'

import { animeItemsSelector } from "@/redux/anime/selectors"


const Pagination: React.FC = () => {
    const items = useSelector(animeItemsSelector);
    return (
        <>
            <ReactPaginate
                className={styles.paginate}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => ('')}
                pageRangeDisplayed={4}
                pageCount={items.length / 4}
                previousLabel=""
            />
        </>
    )
}


export default Pagination