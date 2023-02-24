import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//styles
import styles from './Sidebar.module.scss'

//icons
import { ReactComponent as DocumentIcon } from '@/assets/icons/document.svg'
import { ReactComponent as VideoIcon } from '@/assets/icons/video-camera.svg'

//components
import Accordion from '@/components/Accordion'
import HeadingBlock from '@/components/HeadingBlock'
import AccordionTablet from '../AccordionTablet'
import AccordionSkeleton from '../skeletons/AccordionSkeleton'
import AccordionTabletSkeleton from '../skeletons/AccordionTabletSkeleton'

//redux
import { newsItemsSelector, statusSelector } from '@/redux/news/selectors'
import { useAppDispatch } from '@/redux/store'
import { fetchNews } from '@/redux/news/asyncActions'

//utils
import { useWindowResize } from '@/utils/useWindowResize'




const Sidebar: React.FC = () => {

    const width = useWindowResize();
    const news = useSelector(newsItemsSelector);
    const dispatch = useAppDispatch();
    const status = useSelector(statusSelector);

    const breakpoint = 1350;


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
                            width >= breakpoint ?
                                < AccordionSkeleton key={index} />
                                :
                                <AccordionTabletSkeleton key={index} />
                        )) :
                        news.map((item, index) => (
                            width >= breakpoint ?
                                <Accordion
                                    key={index}
                                    title={item.title}
                                    genre={item.genre}
                                    date={item.date}
                                >
                                    <img src={`posters/${item.imageUrl}`} alt={item.title} />
                                </Accordion>
                                :
                                <AccordionTablet
                                    key={index}
                                    title={item.title}
                                    genre={item.genre}
                                    date={item.date}
                                    imageUrl={`posters/${item.imageUrl}`}
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
                            <img src={`reviews/${index + 1}.webp`} alt="review" />
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