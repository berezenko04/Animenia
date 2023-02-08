import { Link } from 'react-router-dom'

import styles from './AnimeBlock.module.scss'

import AnimeCard from '../AnimeCard'

type AnimeBlockProps = {
    imageUrl: string,
    title: string,
    genre: string,
    rating: number
}

const AnimeBlock: React.FC<AnimeBlockProps> = ({ imageUrl, title, genre, rating }) => {
    return (
        <article className={styles.block}>
            <AnimeCard imageUrl={imageUrl} favorite />
            <div className={styles.block__content}>
                <div className={styles.block__content__title}>
                    <h2>{title}</h2>
                    <p>{genre}</p>
                </div>
                <p className={styles.block__content__main}>

                </p>
                <Link to='' className={styles.block__content__button}>Watch</Link>
            </div>
        </article>
    )
}

export default AnimeBlock