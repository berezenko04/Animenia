import { Link } from 'react-router-dom'

import styles from './ProfileInfo.module.scss'

//icons
import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg'
import { ReactComponent as TwitterIcon } from '@/assets/icons/socials/twitter-negative.svg'
import { ReactComponent as InstagramIcon } from '@/assets/icons/socials/instagram-negative.svg'
import { ReactComponent as TelegramIcon } from '@/assets/icons/socials/telegram-negative.svg'
import { ReactComponent as MessageIcon } from '@/assets/icons/message.svg'
import { ReactComponent as LockIcon } from '@/assets/icons/lock.svg'
import { ReactComponent as ShieldIcon } from '@/assets/icons/shield-done.svg'

//redux
import { useSelector } from 'react-redux'
import { themeSelector } from '@/redux/theme/selectors'

type ProfileInfoProps = {
    variation: 'primary' | 'secondary'
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ variation }) => {

    const privacy = [
        { option: '[Change Email]', icon: <MessageIcon /> },
        { option: 'Change password', icon: <LockIcon /> },
        { option: 'Enable two-factor authentication', icon: <ShieldIcon /> }
    ];

    const theme = useSelector(themeSelector);

    return (
        <div className={styles.profile}>
            <div className={styles.profile__head}>
                <div className={styles.profile__head__title}>
                    <h2>Roman Berezenko</h2>
                    <div className={theme === 'light' ? styles.profile__head__title__edit : styles.profile__head__title__edit__dark}>
                        <EditIcon />
                    </div>
                </div>
                <div className={styles.profile__head__status}>
                    <p>Status:</p>
                    <p>Everything is great!</p>
                </div>
            </div>
            <ul className={styles.profile__socials}>
                {variation === 'primary' ?
                    <>
                        <li className={styles.profile__socials__twitter}>
                            <TwitterIcon />
                            <Link to=''>@luxurypluxury28</Link>
                        </li>
                        <li className={styles.profile__socials__instagram}>
                            <InstagramIcon />
                            <Link to=''>@luxurypluxury_</Link>
                        </li>
                        <li className={styles.profile__socials__twitter}>
                            <TelegramIcon />
                            <Link to=''>@dissxlutixn</Link>
                        </li>
                    </>
                    :
                    privacy.map((item, index) => (
                        <li key={index} className={styles.profile__socials__option}>
                            {item.icon}
                            {index === 0 && <p>berezenkoroman4@gmail.com</p>}
                            <Link to=''>{item.option}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProfileInfo