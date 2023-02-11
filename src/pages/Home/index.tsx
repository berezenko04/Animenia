import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SwiperSlide } from 'swiper/react'


import styles from './Home.module.scss'

//Components
import HeadingBlock from '@/components/HeadingBlock'
import AnimeCard from '@/components/AnimeCard'
import Sidebar from '@/components/Sidebar'

//Redux
import { animeItemsSelector, sortedItemsSelector } from '@/redux/anime/selectors'
import { fetchAnime, fetchSortedAnime } from '@/redux/anime/asyncActions'
import { useAppDispatch } from '@/redux/store'


//icons
import { ReactComponent as FireIcon } from '@/assets/icons/fire.svg'
import { ReactComponent as TrendingIcon } from '@/assets/icons/trending.svg'



const Home: React.FC = () => {
    const items = useSelector(animeItemsSelector);
    const sorted = useSelector(sortedItemsSelector);
    const dispatch = useAppDispatch();
    const [limit, setLimit] = useState(9);

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
                                    {items.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            < AnimeCard {...item} />
                                        </SwiperSlide>
                                    ))}
                                </HeadingBlock>
                            </section>
                            <section className={styles.page__main__categories__top}>
                                <HeadingBlock title='Top 100' icon={<TrendingIcon />}>
                                    {sorted.map((item) => (
                                        <AnimeCard key={item.id} {...item} />
                                    ))}
                                </HeadingBlock>
                            </section>
                        </div>
                        {limit < items.length && <button className={styles.page__main__load} onClick={() => setLimit(limit + 9)}>Load More</button>}
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Home