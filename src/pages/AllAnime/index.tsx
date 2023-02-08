import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from './AllAnime.module.scss'

//components
import HeadingBlock from '@/components/HeadingBlock'
import Sidebar from '@/components/Sidebar'
import Pagination from '@/components/Pagination'
import AnimeBlock from '@/components/AnimeBlock'


//icons
import { ReactComponent as PlugIcon } from '@/assets/icons/plug.svg'

//redux
import { sortedItemsSelector } from '@/redux/anime/selectors'
import { fetchSortedAnime } from '@/redux/anime/slice'
import { useAppDispatch } from '@/redux/store'
import { pageNumberSelector } from '@/redux/pagination/selectors'


const AllAnime: React.FC = () => {

    const sorted = useSelector(sortedItemsSelector);
    const dispatch = useAppDispatch();
    const page = useSelector(pageNumberSelector);

    useEffect(() => {
        dispatch(fetchSortedAnime({
            sort: 'description',
            order: 'desc',
            page,
            limit: 4
        }));
    }, [page])


    return (
        <div className="container">
            <div className={styles.page}>
                <section className={styles.all}>
                    <HeadingBlock title='All Anime' icon={<PlugIcon />} />
                    <div className={styles.all__content}>
                        <div className={styles.all__content__items}>
                            {sorted.map((item, index) => (
                                <AnimeBlock key={index} {...item} />
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </section>
                <Sidebar />
            </div>
        </div>
    )
}

export default AllAnime