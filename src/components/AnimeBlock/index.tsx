import { Link } from 'react-router-dom'

//styles
import styles from './AnimeBlock.module.scss'

//components
import AnimeCard from '../AnimeCard'
import RatingBlock from '../RatingBlock'

type AnimeBlockProps = {
    imageUrl: string,
    title: string,
    genre: string,
    rating: number,
    description: string,
    id: string,
    isWatch?: boolean,
}

export const handleClickLink = () => {
    window.scrollTo(0, 0);
}

const AnimeBlock: React.FC<AnimeBlockProps> = ({
    imageUrl,
    title,
    genre,
    rating,
    description,
    id,
    isWatch = true,
}) => {

    return (
        <article className={styles.block}>
            <div className={styles.block__card}>
                <AnimeCard imageUrl={imageUrl} favorite id={id} />
            </div>
            <div className={styles.block__content}>
                <div className={styles.block__content__title}>
                    <Link to={`/Animenia/${id}`} onClick={handleClickLink}>{title}</Link>
                    <p>{genre}</p>
                    <RatingBlock rating={rating} variation={'secondary'} />
                </div>
                <p className={`${styles.block__content__main}`}>
                    {description}
                </p>
                {isWatch && <Link to={`/Animenia/${id}`} onClick={handleClickLink} className={styles.block__content__button}>Watch</Link>}
            </div>
        </article>
    )
}

export default AnimeBlock