import styles from './AnimeCard.module.scss'

import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'

type AnimeCardProps = {
    imageUrl: string,
    title: string,
    rating: number,
    genre: string,
    status?: string
}


const AnimeCard: React.FC<AnimeCardProps> = ({ imageUrl, title, rating, genre, status }) => {

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
        <article className={styles.card}>
            <img src={imageUrl} alt={title} />
            <div className={styles.card__rating}>
                <div className={styles.card__rating__content}>
                    <StarIcon />
                    <span>{rating}</span>
                </div>
            </div>
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

        </article>
    )
}

export default AnimeCard