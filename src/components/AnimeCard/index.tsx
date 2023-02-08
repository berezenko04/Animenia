import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './AnimeCard.module.scss'

import RatingBlock from '../RatingBlock'

//icons
import { ReactComponent as HeartIcon } from '@/assets/icons/heart.svg'
import { ReactComponent as FilledHeartIcon } from '@/assets/icons/heart-filled.svg'


type AnimeCardProps = {
    imageUrl: string,
    title?: string,
    rating?: number,
    genre?: string,
    status?: string
    favorite?: boolean
}


const AnimeCard: React.FC<AnimeCardProps> = ({ imageUrl, title, rating, genre, status, favorite }) => {

    const getStatus = (status: string) => {
        switch (status) {
            case 'Viewed': {
                return styles.card__info__status__viewed;
            }
            case "I'm watching": {
                return styles.card__info__status__watching;
            }
            case 'Thrown': {
                return styles.card__info__status__thrown;
            }
            case 'I will watch': {
                return styles.card__info__status__willWatch;
            }
        }
    }
    const [isFavorite, setIsFavorite] = useState(false);


    return (
        <Link to=''>
            <article className={styles.card}>
                <img src={imageUrl} alt={title} />
                {favorite &&
                    <button className={styles.card__favorite} onClick={() => setIsFavorite(!isFavorite)}>
                        {isFavorite ? <FilledHeartIcon /> : <HeartIcon />}
                    </button>
                }
                {rating &&
                    <div className={styles.card__rating}>
                        <RatingBlock rating={rating} />
                    </div>
                }
                {(title && genre) &&
                    <div className={styles.card__info}>
                        {status &&
                            <div className={`${styles.card__info__status} ${getStatus(status)}`}>
                                <p>{status}</p>
                            </div>}
                        <div className={styles.card__info__content}>
                            <h3>{title}</h3>
                            <p>{genre}</p>
                        </div>
                    </div>
                }
            </article>
        </Link>
    )
}

export default AnimeCard