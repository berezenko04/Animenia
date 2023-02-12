import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { SwiperSlide } from 'swiper/react'
import { useNavigate, useParams } from 'react-router-dom'

import styles from './AnimeId.module.scss'

//components
import Sidebar from '@/components/Sidebar'
import AnimeBlock from '@/components/AnimeBlock'
import HeadingBlock from '@/components/HeadingBlock'
import AnimeCard from '@/components/AnimeCard'
import AnimeCardSkeleton from '@/components/skeletons/AnimeCardSkeleton'

//icons
import { ReactComponent as DesktopIcon } from '@/assets/icons/desktop.svg'
import { ReactComponent as SwapIcon } from '@/assets/icons/swap.svg'
import { ReactComponent as MessageIcon } from '@/assets/icons/message.svg'

//redux
import { useAppDispatch } from '@/redux/store'
import { fetchAnime } from '@/redux/anime/asyncActions'
import { animeItemsSelector, itemsStatusSelector } from '@/redux/anime/selectors'

//utils
import { useWindowResize } from '@/utils/useWindowResize'




const AnimeId: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const itemsStatus = useSelector(itemsStatusSelector);
    const width = useWindowResize();
    const items = useSelector(animeItemsSelector);
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(3);
    const [anime, setAnime] = useState<{
        id: string,
        title: string,
        imageUrl: string,
        rating: number,
        genre: string,
        description: string,
        screenshots: string[],
        videoUrl: string
    }>();
    const { id } = useParams();
    const breakpoint = 768;

    useEffect(() => {
        if (width > breakpoint) {
            setLimit(3);
        } else if (width <= breakpoint) {
            setLimit(2);
        }
    }, [width])

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const { data } = await axios.get('https://63dd5ffb367aa5a7a40ed9d2.mockapi.io/api/v1/anime/' + id);
                setAnime(data);
            } catch (error) {
                alert('Ошибка при получении анимэ!');
                navigate('/Animenia/');
            }
        })();
        dispatch(fetchAnime());
        setIsLoading(false);
    }, [])

    return (
        <>
            {anime &&
                <div className="container">
                    <div className={styles.page}>
                        <div className={styles.page__main}>
                            <section className={styles.anime}>
                                <div className={styles.anime__head}>
                                    <HeadingBlock title={'Anime'} icon={<DesktopIcon />} addToList />
                                    <AnimeBlock {...anime} isWatch={false} />
                                </div>
                                <div className={styles.anime__screenshots}>
                                    <p>Screenshots</p>
                                    <div className={styles.anime__screenshots__content}>
                                        {anime.screenshots.slice(0, limit).map((item, index) => (
                                            <img key={index} src={`screenshots/${id}/${item}`} alt="#" />
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.anime__video}>
                                    <video controls preload='auto'>
                                        <source src={anime.videoUrl} />
                                    </video>
                                </div>
                            </section>
                            <section className={styles.similar}>
                                <HeadingBlock title='Similar Anime' icon={<SwapIcon />} slider>
                                    {itemsStatus === 'loading' ?
                                        [...Array(3)].map((_, index) => (
                                            <SwiperSlide key={index}>
                                                <AnimeCardSkeleton />
                                            </SwiperSlide>
                                        ))
                                        :
                                        items.slice(5, 20).map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <AnimeCard {...item} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </HeadingBlock>
                            </section>
                            <section className={styles.comments}>
                                <HeadingBlock title='Comments' icon={<MessageIcon />} />
                                <div className={styles.comments__main}>
                                    <div className={styles.comments__main__field}>
                                        <input type={'text'} placeholder={'Write a comment'} />
                                    </div>
                                    <button>Submit</button>
                                </div>
                            </section>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            }
        </>
    )
}

export default AnimeId