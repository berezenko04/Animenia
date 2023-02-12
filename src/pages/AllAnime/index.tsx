import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from './AllAnime.module.scss'

//components
import HeadingBlock from '@/components/HeadingBlock'
import Sidebar from '@/components/Sidebar'
import Pagination from '@/components/Pagination'
import AnimeBlock from '@/components/AnimeBlock'


//icons
import { ReactComponent as ListIcon } from '@/assets/icons/list.svg'

//redux
import { sortedItemsSelector, sortedItemsStatusSelector } from '@/redux/anime/selectors'
import { fetchSortedAnime } from '@/redux/anime/asyncActions'
import { useAppDispatch } from '@/redux/store'
import { pageNumberSelector } from '@/redux/pagination/selectors'
import AnimeBlockSkeleton from '@/components/skeletons/AnimeBlockSkeleton'


const AllAnime: React.FC = () => {

    const sorted = useSelector(sortedItemsSelector);
    const dispatch = useAppDispatch();
    const page = useSelector(pageNumberSelector);
    const sortedItemsStatus = useSelector(sortedItemsStatusSelector);

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
                    <HeadingBlock title='All Anime' icon={<ListIcon />} />
                    <div className={styles.all__content}>
                        <div className={styles.all__content__items}>
                            {sortedItemsStatus === 'loading' ?
                                [...Array(4)].map((_, index) => (
                                    <AnimeBlockSkeleton key={index} />
                                )) :
                                sorted.map((item, index) => (
                                    <AnimeBlock key={index} {...item} />
                                ))
                            }
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