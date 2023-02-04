import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
import { ReactComponent as VideoIcon } from '../../assets/icons/video-camera.svg'


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
                        <div className={styles.page__aside__reviews}>
                            <HeadingBlock title='Reviews' slider={false} icon={<VideoIcon />} />
                            <div className={styles.page__aside__reviews__items}>
                                {[...Array(3)].map((_, index) => (
                                    <Link to='' key={index}>
                                        <img src={`review${index + 1}.webp`} alt="review" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={styles.page__aside__socials}>
                            <Link to='' className={styles.page__aside__socials__instagram}>Instagram</Link>
                            <Link to='' className={styles.page__aside__socials__telegram}>Telegram</Link>
                            <Link to='' className={styles.page__aside__socials__youtube}>Youtube</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Home