import { useEffect, useState } from 'react'
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
import { useWindowResize } from '@/utils/useWindowResize'
import AnimeCard from '@/components/AnimeCard'
import AnimeCardSkeleton from '@/components/skeletons/AnimeCardSkeleton'


const AllAnime: React.FC = () => {

    const sorted = useSelector(sortedItemsSelector);
    const dispatch = useAppDispatch();
    const page = useSelector(pageNumberSelector);
    const sortedItemsStatus = useSelector(sortedItemsStatusSelector);

    const width = useWindowResize();

    const breakpoint = 768;


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
                    <HeadingBlock title='All Anime' icon={<ListIcon />} filter />
                    <div className={styles.all__content}>
                        <div className={styles.all__content__items}>
                            {sortedItemsStatus === 'loading' ?
                                [...Array(4)].map((_, index) => (
                                    width >= breakpoint ?
                                        < AnimeBlockSkeleton key={index} />
                                        :
                                        <AnimeCardSkeleton key={index} />
                                )) :
                                sorted.map((item, index) => (
                                    width >= breakpoint ?
                                        <AnimeBlock key={index} {...item} />
                                        :
                                        <AnimeCard key={index} {...item} />
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