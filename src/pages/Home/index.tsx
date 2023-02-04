import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from './Home.module.scss'

import HeadingBlock from '../../components/HeadingBlock'
import { animeItemsSelector } from '../../redux/anime/selectors'
import { fetchAnime } from '../../redux/anime/slice'
import { useAppDispatch } from '../../redux/store'
import AnimeCard from '../../components/AnimeCard'

const Home: React.FC = () => {
    const items = useSelector(animeItemsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAnime());
    }, [])

    return (
        <div className="container">
            <div className={styles.page}>
                <div className={styles.page__wrapper}>
                    <div className={styles.test}>
                        <HeadingBlock title='Spring Season' slider={false} />
                        <div className={styles.items}>
                            {items.map((item) => (
                                <AnimeCard
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>
                    <aside>

                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Home