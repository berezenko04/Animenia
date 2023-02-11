import { useRef } from 'react';
import { Navigation, Swiper as SwiperType } from 'swiper';
import { Swiper } from 'swiper/react';

import styles from './HeadingBlock.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';

import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-left.svg'

type HeadingBlockProps = {
    icon: React.ReactElement,
    title: string,
    slider?: boolean,
    children?: React.ReactNode,
    items?: [],
    addToList?: boolean
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ icon, title, slider, children, addToList = false }) => {


    const swiperRef = useRef<SwiperType>();

    return (
        <div className={styles.block}>
            <div className={styles.block__content}>
                <div className={styles.block__content__left}>
                    <div className={styles.block__content__left__icon}>
                        {icon}
                    </div>
                    <h2>{title}</h2>
                </div>
                {slider &&
                    <div className={styles.block__content__right}>
                        <button
                            className={styles.button__prev}
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <ArrowIcon />
                        </button>
                        <button
                            className={styles.button__next}
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <ArrowIcon />
                        </button>
                    </div>
                }
                {addToList && <button className={styles.block__add}>Add to the list</button>}
            </div>
            {!slider &&
                <div className={styles.block__main}>
                    {children}
                </div>
            }
            {slider &&
                <div className={styles.block__swiper}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {children}
                    </Swiper>
                </div>
            }
        </div >
    )
}

export default HeadingBlock