import styles from './Profile.module.scss'

//components
import SettingsBlock from '@/components/SettingsBlock'
import HeadingBlock from '@/components/HeadingBlock'
import UploadAvatar from '@/components/UploadAvatar'
import ProfileInfo from '@/components/ProfileInfo'

//icons
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile.svg'
import { ReactComponent as FolderIcon } from '@/assets/icons/folder.svg'
import { ReactComponent as DesktopIcon } from '@/assets/icons/desktop.svg'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg'

//redux
import { useSelector } from 'react-redux'
import { tabSelector } from '@/redux/profile/selectors'
import NotificationsItem from '@/components/NotificationsItem'

//utils
import { getOS } from '@/utils/getOS'
import { getDate } from '@/utils/formatDate'


const Profile: React.FC = () => {

    const tab = useSelector(tabSelector);

    const notifications = [
        'Push notifications',
        'Email notifications',
        'Messages',
        'Newsletter',
        'Reviews',
        'News'
    ];

    getDate();


    return (
        <div className="container">
            <div className={styles.page}>
                <SettingsBlock />
                <div className={styles.page__main}>
                    {tab !== 'Notifications' &&
                        <section className={styles.profile}>
                            <div className={styles.profile__wrapper}>
                                <HeadingBlock title='Profile' icon={<ProfileIcon />} />
                                <div className={styles.profile__content}>
                                    <UploadAvatar />
                                    {tab === 'General' && <ProfileInfo variation='primary' />}
                                    {tab === 'Security and privacy' && <ProfileInfo variation='secondary' />}
                                </div>
                            </div>
                        </section>
                    }
                    {tab === 'General' &&
                        <section className={styles.anime}>
                            <div className={styles.anime__wrapper}>
                                <HeadingBlock title='Anime List' icon={<FolderIcon />} />
                                <div className={styles.anime__content}>
                                    <p>You don't have anything on your lists.</p>
                                </div>
                            </div>
                        </section>
                    }
                    {tab === 'Security and privacy' &&
                        <section className={styles.sessions}>
                            <div className={styles.sessions__wrapper}>
                                <HeadingBlock title='Sessions' icon={<FolderIcon />} />
                                <div className={styles.sessions__item}>
                                    <div className={styles.sessions__item__os}>
                                        <DesktopIcon />
                                        <div className={styles.sessions__item__os__info}>
                                            <h3>OS: {getOS()}</h3>
                                            <p>Region: Canada, 82</p>
                                        </div>
                                    </div>
                                    <p className={styles.sessions__item__date}>
                                        Date: {getDate()}
                                    </p>
                                    <p className={styles.sessions__item__current}>
                                        Current Session
                                    </p>
                                    <div className={styles.sessions__item__remove}>
                                        <button>
                                            <TrashIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                    {tab === 'Notifications' &&
                        <section className={styles.notifications}>
                            <div className={styles.notifications__wrapper}>
                                <HeadingBlock title='Notifications' icon={<NotificationIcon />} />
                                <div className={styles.notifications__content}>
                                    {notifications.map((item, index) => (
                                        <NotificationsItem key={index} title={item} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    }
                </div>
            </div>
        </div >
    )
}

export default Profile