import styles from './NotificationsItem.module.scss'

type NotificationsItemProps = {
    title: string
}

const NotificationsItem: React.FC<NotificationsItemProps> = ({ title }) => {
    return (
        <div className={styles.item}>
            <p>{title}</p>
            <label className={styles.item__switch}>
                <input type="checkbox" />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </div >
    )
}

export default NotificationsItem