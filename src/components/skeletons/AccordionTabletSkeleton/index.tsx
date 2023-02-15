//styles
import styles from './AccordionTabletSkeleton.module.scss'

const AccordionTabletSkeleton: React.FC = () => {
    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__title} />
            <div className={styles.accordion__info}>
                <div className={styles.accordion__info__genre} />
                <div className={styles.accordion__info__date} />
            </div>
            <div className={styles.accordion__image} />
        </div>
    )
}

export default AccordionTabletSkeleton