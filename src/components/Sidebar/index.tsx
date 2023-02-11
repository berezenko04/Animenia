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
import AccordionTablet from '../AccordionTablet'



const Sidebar: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const news = useSelector(newsItemsSelector);
    const dispatch = useAppDispatch();

    const breakpoint: number = 1350;

    const getWidth = () => {
        if (typeof (window) !== 'undefined') {
            setWidth(window.innerWidth);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', getWidth);

        return () => window.removeEventListener('resize', getWidth);
    }, [])


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
                <HeadingBlock title='Latest News' icon={<DocumentIcon />} />
                <div className={styles.aside__news__items}>
                    {news.map((item, index) => (
                        width >= breakpoint ?
                            <Accordion
                                key={index}
                                title={item.title}
                                genre={item.genre}
                                date={item.date}
                            >
                                <img src={item.imageUrl} alt={item.title} />
                            </Accordion>
                            :
                            <AccordionTablet
                                title={item.title}
                                genre={item.genre}
                                date={item.date}
                                imageUrl={item.imageUrl}
                            />
                    ))}
                </div>
            </div>
            <div className={styles.aside__reviews}>
                <HeadingBlock title='Reviews' icon={<VideoIcon />} />
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
                <Link to='https://t.me/dissxlutxn' target='_blank' className={styles.aside__socials__telegram}>Telegram</Link>
                <Link to='' className={styles.aside__socials__youtube}>Youtube</Link>
            </div>
        </aside>
    )
}

export default Sidebar