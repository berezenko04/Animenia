import { Link } from 'react-router-dom'

import styles from './AnimeBlock.module.scss'

//components
import AnimeCard from '../AnimeCard'
import RatingBlock from '../RatingBlock'

type AnimeBlockProps = {
    imageUrl: string,
    title: string,
    genre: string,
    rating: number,
    description: string
}

const AnimeBlock: React.FC<AnimeBlockProps> = ({ imageUrl, title, genre, rating, description }) => {
    return (
        <article className={styles.block}>
            <AnimeCard imageUrl={imageUrl} favorite />
            <div className={styles.block__content}>
                <div className={styles.block__content__title}>
                    <h2>{title}</h2>
                    <p>{genre}</p>
                    <RatingBlock rating={rating} variation={'secondary'} />
                </div>
                <p className={styles.block__content__main}>
                    {description}
                </p>
                <Link to='' className={styles.block__content__button}>Watch</Link>
            </div>
        </article>
    )
}

export default AnimeBlock