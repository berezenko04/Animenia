import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


import styles from './Sidebar.module.scss'

//icons
import { ReactComponent as DocumentIcon } from '@/assets/icons/document.svg'
import { ReactComponent as VideoIcon } from '@/assets/icons/video-camera.svg'

//components
import Accordion from '@/components/Accordion'
import HeadingBlock from '@/components/HeadingBlock'

//utils
import { newsItemsSelector } from '@/redux/news/selectors'
import { getNews } from '@/API/AnimeService'
import { setItems } from '@/redux/news/slice'
import { useAppDispatch } from '@/redux/store'



const Sidebar: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const news = useSelector(newsItemsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsLoading(true);
        try {
            (async () => {
                const news = await getNews();
                dispatch(setItems(news));
                setIsLoading(false);
            })()
        } catch (error) {
            alert('Sorry, there was an error loading the news');
            console.error(error);
        }
    }, [])

    return (
        <aside className={styles.aside}>
            <div className={styles.aside__news}>
                <HeadingBlock title='News' slider={false} icon={<DocumentIcon />} />
                <div className={styles.aside__news__items}>
                    {news.map((item, index) => (
                        <Accordion
                            key={index}
                            {...item}
                        >
                            <img src={item.imageUrl} alt={item.title} />
                        </Accordion>
                    ))}
                </div>
            </div>
            <div className={styles.aside__reviews}>
                <HeadingBlock title='Reviews' slider={false} icon={<VideoIcon />} />
                <div className={styles.aside__reviews__items}>
                    {[...Array(3)].map((_, index) => (
                        <Link to='' key={index}>
                            <img src={`review${index + 1}.webp`} alt="review" />
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.aside__socials}>
                <Link to='' className={styles.aside__socials__instagram}>Instagram</Link>
                <Link to='' className={styles.aside__socials__telegram}>Telegram</Link>
                <Link to='' className={styles.aside__socials__youtube}>Youtube</Link>
            </div>
        </aside>
    )
}

export default Sidebar