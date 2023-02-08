import { Link } from 'react-router-dom'

import styles from './AnimeCard.module.scss'

//icons
import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { ReactComponent as HeartIcon } from '@/assets/icons/heart.svg'

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


    return (
        <Link to=''>
            <article className={styles.card}>
                <img src={imageUrl} alt={title} />
                {(favorite && !rating) ?
                    <button className={styles.card__favorite}>
                        <HeartIcon />
                    </button>
                    :
                    <div className={styles.card__rating}>
                        <StarIcon />
                        <span>{rating}</span>
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