import { Link } from 'react-router-dom'

import styles from './ProfileInfo.module.scss'

//icons
import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg'
import { ReactComponent as TwitterIcon } from '@/assets/icons/socials/twitter-negative.svg'
import { ReactComponent as InstagramIcon } from '@/assets/icons/socials/instagram-negative.svg'
import { ReactComponent as TelegramIcon } from '@/assets/icons/socials/telegram-negative.svg'

const ProfileInfo: React.FC = () => {

    const socials = [
        { username: '@luxurypluxury28', icon: <TwitterIcon /> },
        { username: '@luxurypluxury_', icon: <InstagramIcon /> },
        { username: '@dissxlutixn', icon: <TelegramIcon /> }
    ];

    return (
        <div className={styles.profile}>
            <div className={styles.profile__head}>
                <div className={styles.profile__head__title}>
                    <h2>Roman Berezenko</h2>
                    <div className={styles.profile__head__title__edit}>
                        <EditIcon />
                    </div>
                </div>
                <div className={styles.profile__head__status}>
                    <p>Status:</p>
                    <p>Everything is great!</p>
                </div>
            </div>
            <ul className={styles.profile__socials}>
                {socials.map((social, index) => (
                    <li key={index}>
                        {social.icon}
                        <Link to=''>{social.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfileInfo