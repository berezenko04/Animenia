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
import { animeItemsSelector } from '@/redux/anime/selectors'
import { fetchAnime } from '@/redux/anime/slice'
import { useAppDispatch } from '@/redux/store'


const AllAnime: React.FC = () => {

    const items = useSelector(animeItemsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAnime());
    }, [])


    return (
        <div className="container">
            <div className={styles.page}>
                <section className={styles.all}>
                    <HeadingBlock title='All Anime' icon={<PlugIcon />} />
                    <div className={styles.all__content}>
                        <div className={styles.all__content__items}>
                            {items.map((item, index) => (
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