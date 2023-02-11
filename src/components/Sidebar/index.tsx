import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


import styles from './Sidebar.module.scss'

//icons
import { ReactComponent as DocumentIcon } from '@/assets/icons/document.svg'
import { ReactComponent as VideoIcon } from '@/assets/icons/video-camera.svg'
import AccordionTablet from '../AccordionTablet'
import AccordionSkeleton from '../skeletons/AccordionSkeleton'

//components
import Accordion from '@/components/Accordion'
import HeadingBlock from '@/components/HeadingBlock'

//utils
import { newsItemsSelector, statusSelector } from '@/redux/news/selectors'
import { useAppDispatch } from '@/redux/store'
import { fetchNews } from '@/redux/news/asyncActions'




const Sidebar: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const news = useSelector(newsItemsSelector);
    const dispatch = useAppDispatch();
    const status = useSelector(statusSelector);

    const breakpoint = 1350;

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
        dispatch(fetchNews());
    }, [])

    return (
        <aside className={styles.aside}>
            <div className={styles.aside__news}>
                <HeadingBlock title='Latest News' icon={<DocumentIcon />} />
                <div className={styles.aside__news__items}>
                    {status === 'loading' ?
                        [...Array(5)].map((_, index) => (
                            <AccordionSkeleton key={index} />
                        )) :
                        news.map((item, index) => (
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
                                    key={index}
                                    title={item.title}
                                    genre={item.genre}
                                    date={item.date}
                                    imageUrl={item.imageUrl}
                                />
                        ))
                    }
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
        </aside >
    )
}

export default Sidebar