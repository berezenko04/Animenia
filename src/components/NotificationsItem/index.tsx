import { useSelector } from 'react-redux'

import styles from './NotificationsItem.module.scss'

import { themeSelector } from '@/redux/theme/selectors'

type NotificationsItemProps = {
    title: string
}

const NotificationsItem: React.FC<NotificationsItemProps> = ({ title }) => {

    const theme = useSelector(themeSelector);

    return (
        <div className={styles.item}>
            <p>{title}</p>
            <label className={styles.item__switch}>
                <input type="checkbox" />
                <span className={`${`${styles.slider} ${theme === 'light' ? styles.slider__light : styles.slider__dark}`} ${styles.round}`}></span>
            </label>
        </div >
    )
}

export default NotificationsItem