import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import styles from './AnimeId.module.scss'

//components
import Sidebar from '@/components/Sidebar'
import AnimeBlock from '@/components/AnimeBlock'
import HeadingBlock from '@/components/HeadingBlock'
import AnimeCard from '@/components/AnimeCard'

//icons
import { ReactComponent as DesktopIcon } from '@/assets/icons/desktop.svg'
import { ReactComponent as SwapIcon } from '@/assets/icons/swap.svg'
import { ReactComponent as MessageIcon } from '@/assets/icons/message.svg'

//redux
import { useAppDispatch } from '@/redux/store'
import { fetchAnime } from '@/redux/anime/asyncActions'
import { animeItemsSelector } from '@/redux/anime/selectors'
import { SwiperSlide } from 'swiper/react'




const AnimeId: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const items = useSelector(animeItemsSelector);
    const [isLoading, setIsLoading] = useState(true);
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
                                        {anime.screenshots.map((item, index) => (
                                            <img key={index} src={`screenshots/${id}/${item}`} alt="#" />
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.anime__video}>
                                    <video src={anime.videoUrl} controls />
                                </div>
                            </section>
                            <section className={styles.similar}>
                                <HeadingBlock title='Similar Anime' icon={<SwapIcon />} slider>
                                    {items.slice(5, 20).map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <AnimeCard {...item} />
                                        </SwiperSlide>
                                    ))}
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