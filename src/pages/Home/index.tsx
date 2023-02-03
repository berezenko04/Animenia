import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from './Home.module.scss'

import HeadingBlock from '../../components/HeadingBlock'
import { ReactComponent as ArrowTopIcon } from '../../assets/icons/arrow-top.svg'
import { animeItemsSelector } from '../../redux/anime/selectors'
import { fetchAnime } from '../../redux/anime/slice'
import { useAppDispatch } from '../../redux/store'

const Home: React.FC = () => {
    const items = useSelector(animeItemsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAnime());
    }, [])

    return (
        <div className="container">
            <div className={styles.page}>
                <HeadingBlock title='Spring Season' icon={<ArrowTopIcon />} slider={false} />
                {items.map((item, index) => (
                    <p key={index}>{item.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home