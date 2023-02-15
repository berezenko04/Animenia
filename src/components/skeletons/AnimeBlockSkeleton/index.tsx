//styles
import styles from './AnimeBlockSkeleton.module.scss'

const AnimeBlockSkeleton: React.FC = () => {
    return (
        <article className={styles.block}>
            <div className={styles.block__card} />
            <div className={styles.block__content}>
                <div className={styles.block__content__title}>
                    <div className={styles.block__content__head} />
                    <div className={styles.block__content__genre} />
                    <div className={styles.block__content__rating} />
                </div>
                <div className={styles.block__content__main} />
                <div className={styles.block__content__watch} />
            </div>
        </article>
    )
}

export default AnimeBlockSkeleton