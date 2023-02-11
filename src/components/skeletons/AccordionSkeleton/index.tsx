import styles from './AccordionSkeleton.module.scss'

const AccordionSkeleton: React.FC = () => {
    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__main}>
                <div className={styles.accordion__main__title} />
                <div className={styles.accordion__main__genre} />
            </div>
            <div className={styles.accordion__main__date} />
        </div>
    )
}

export default AccordionSkeleton