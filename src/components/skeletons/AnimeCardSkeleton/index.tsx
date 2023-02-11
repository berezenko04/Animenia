import styles from './AnimeCardSkeleton.module.scss'


const AnimeCardSkeleton: React.FC = () => {
    return (
        <article className={styles.card}>
            <div className={styles.card__rating}/>
            <div className={styles.card__info}>
                <div className={styles.card__info__content}>
                    <div className={styles.card__info__content__header}></div>
                    <div className={styles.card__info__content__paragraph}></div>
                </div>
            </div>
        </article>
    )
}

export default AnimeCardSkeleton