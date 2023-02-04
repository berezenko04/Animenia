import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './Home.module.scss'

//Components
import HeadingBlock from '../../components/HeadingBlock'
import AnimeCard from '../../components/AnimeCard'
import Accordion from '../../components/Accordion'

//Redux
import { animeItemsSelector } from '../../redux/anime/selectors'
import { fetchAnime } from '../../redux/anime/slice'
import { useAppDispatch } from '../../redux/store'

//icons
import { ReactComponent as PlugIcon } from '../../assets/icons/plug.svg'
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg'


const Home: React.FC = () => {
    const items = useSelector(animeItemsSelector);
    const dispatch = useAppDispatch();
    const [limit, setLimit] = useState(9);

    useEffect(() => {
        dispatch(fetchAnime());
    }, [])

    return (
        <div className="container">
            <div className={styles.page}>
                <div className={styles.page__wrapper}>
                    <div className={styles.page__main}>
                        <div className={styles.page__main__categories}>
                            <section className={styles.page__main__categories__spring}>
                                <HeadingBlock title='Spring Season' slider={false} icon={<PlugIcon />}>
                                    {items.slice(0, 3).map((item) => (
                                        <AnimeCard
                                            {...item}
                                            key={item.id}
                                        />
                                    ))}
                                </HeadingBlock>
                            </section>
                            <section className={styles.page__main__categories__top}>
                                <HeadingBlock title='Top 100' slider={false} icon={<PlugIcon />}>
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
                    <aside className={styles.page__aside}>
                        <div className={styles.page__aside__news}>
                            <HeadingBlock title='News' slider={false} icon={<DocumentIcon />} />
                            <div className={styles.page__aside__news__items}>
                                {items.slice(0, 5).map((item, index) => (
                                    <Accordion key={index} {...item}>
                                        <img src={item.imageUrl} alt={item.title} />
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Home