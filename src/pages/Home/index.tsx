import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


import styles from './Home.module.scss'

//Components
import HeadingBlock from '@/components/HeadingBlock'
import AnimeCard from '@/components/AnimeCard'
import Sidebar from '@/components/Sidebar'

//Redux
import { animeItemsSelector } from '@/redux/anime/selectors'
import { fetchAnime } from '@/redux/anime/slice'
import { useAppDispatch } from '@/redux/store'

//icons
import { ReactComponent as PlugIcon } from '@/assets/icons/plug.svg'



const Home: React.FC = () => {
    const items = useSelector(animeItemsSelector);
    const dispatch = useAppDispatch();
    const [limit, setLimit] = useState(9);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchAnime());
        setIsLoading(false);
    }, [])

    return (
        <div className="container">
            <div className={styles.page}>
                <div className={styles.page__wrapper}>
                    <div className={styles.page__main}>
                        <div className={styles.page__main__categories}>
                            <section className={styles.page__main__categories__spring}>
                                <HeadingBlock title='Spring Season' icon={<PlugIcon />}>
                                    {items.slice(0, 3).map((item) => (
                                        <AnimeCard
                                            {...item}
                                            key={item.id}
                                        />
                                    ))}
                                </HeadingBlock>
                            </section>
                            <section className={styles.page__main__categories__top}>
                                <HeadingBlock title='Top 100' icon={<PlugIcon />}>
                                    {items.slice(0, limit).map((item) => (
                                        <AnimeCard
                                            key={item.id}
                                            {...item}
                                        />
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