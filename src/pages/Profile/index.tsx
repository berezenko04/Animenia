import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

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
import { countrySelector } from '@/redux/geo/selectors'
import NotificationsItem from '@/components/NotificationsItem'
import { setIsAuth } from "@/redux/auth/slice";
import { isAuthSelector } from "@/redux/auth/selectors";


//utils
import { getOS } from '@/utils/getOS'
import { getDate } from '@/utils/formatDate'
import { getGeo } from "@/utils/getGeo";



const Profile: React.FC = () => {

    const tab = useSelector(tabSelector);
    const country = useSelector(countrySelector);
    const dispatch = useDispatch();
    const isMounted = useRef(false);
    const isAuth = useSelector(isAuthSelector);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(isAuth);
            localStorage.setItem('auth', json);
        }
        isMounted.current = true;
    }, [isAuth]);

    const notifications = [
        'Push notifications',
        'Email notifications',
        'Messages',
        'Newsletter',
        'Reviews',
        'News'
    ];

    const handleLogout = () => {
        dispatch(setIsAuth(false));
        window.location.href = '/Animenia/';
    }

    // getGeo();


    // const fetchGeo = async () => {
    //     try {
    //         const { data } = await axios.get('');
    //         dispatch(setCountry(data.results[9].formatted_address));
    //         dispatch(setCity(data.results[6].formatted_address.split(',')[0]));
    //     } catch (error) {
    //         alert('An error occurred while getting the location');
    //         console.error(error);
    //     }
    // }

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
                                            <p>Geolocation: { }</p>
                                        </div>
                                    </div>
                                    <p className={styles.sessions__item__date}>
                                        Date: {getDate()}
                                    </p>
                                    <p className={styles.sessions__item__current}>
                                        Current Session
                                    </p>
                                    <button
                                        className={styles.sessions__item__remove}
                                        onClick={handleLogout}
                                    >
                                        <TrashIcon />
                                    </button>
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