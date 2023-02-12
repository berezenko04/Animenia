import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SwiperSlide } from 'swiper/react'


import styles from './Home.module.scss'

//Components
import HeadingBlock from '@/components/HeadingBlock'
import AnimeCard from '@/components/AnimeCard'
import Sidebar from '@/components/Sidebar'

//Redux
import { animeItemsSelector, itemsStatusSelector, sortedItemsSelector, sortedItemsStatusSelector } from '@/redux/anime/selectors'
import { fetchAnime, fetchSortedAnime } from '@/redux/anime/asyncActions'
import { useAppDispatch } from '@/redux/store'


//icons
import { ReactComponent as FireIcon } from '@/assets/icons/fire.svg'
import { ReactComponent as TrendingIcon } from '@/assets/icons/trending.svg'
import AnimeCardSkeleton from '@/components/skeletons/AnimeCardSkeleton'


//utils
import { useWindowResize } from '@/utils/useWindowResize'


const Home: React.FC = () => {
    const items = useSelector(animeItemsSelector);
    const sorted = useSelector(sortedItemsSelector);
    const itemsStatus = useSelector(itemsStatusSelector);
    const sortedItemsStatus = useSelector(sortedItemsStatusSelector);
    const dispatch = useAppDispatch();

    const width = useWindowResize();

    const breakpoints = {
        tablet: 1024,
        sm: 600
    }

    useEffect(() => {
        const { tablet, sm } = breakpoints;
        if (width > tablet) {
            setLimit(9);
        } else if (width < tablet && width > sm) {
            setLimit(6);
        } else if (width < sm) {
            setLimit(2);
        }
    }, [width])


    const [limit, setLimit] = useState(0);
    const [step, setStep] = useState(limit);

    useEffect(() => {
        dispatch(fetchAnime());
    }, [limit])

    useEffect(() => {
        dispatch(fetchSortedAnime({
            sort: 'rating',
            order: 'desc',
            page: 1,
            limit
        }));
    }, [limit])

    return (
        <div className="container">
            <div className={styles.page}>
                <div className={styles.page__wrapper}>
                    <div className={styles.page__main}>
                        <div className={styles.page__main__categories}>
                            <section className={styles.page__main__categories__spring}>
                                <HeadingBlock title='Spring Season' icon={<FireIcon />} slider>
                                    {itemsStatus === 'loading' ?

                                        [...Array(3)].map((_, index) => (
                                            <SwiperSlide key={index}>
                                                <AnimeCardSkeleton />
                                            </SwiperSlide>
                                        )) :

                                        items.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                < AnimeCard {...item} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </HeadingBlock>
                            </section>
                            <section className={styles.page__main__categories__top}>
                                <HeadingBlock title='Top 100' icon={<TrendingIcon />}>
                                    {sortedItemsStatus === 'loading' ?
                                        [...Array(9)].map((_, index) => (
                                            <AnimeCardSkeleton key={index} />
                                        )) :
                                        sorted.map((item) => (
                                            <AnimeCard key={item.id} {...item} />
                                        ))
                                    }
                                </HeadingBlock>
                            </section>
                        </div>
                        {limit < items.length && <button className={styles.page__main__load} onClick={() => setLimit(limit + step)}>Load More</button>}
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div >
    )
}

export default Home