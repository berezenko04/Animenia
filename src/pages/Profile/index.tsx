import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

//styles
import styles from './Profile.module.scss'

//components
import SettingsBlock from '@/components/SettingsBlock'
import HeadingBlock from '@/components/HeadingBlock'
import UploadAvatar from '@/components/UploadAvatar'
import ProfileInfo from '@/components/ProfileInfo'
import NotificationsItem from '@/components/NotificationsItem'

//icons
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile.svg'
import { ReactComponent as FolderIcon } from '@/assets/icons/folder.svg'
import { ReactComponent as DesktopIcon } from '@/assets/icons/desktop.svg'
import { ReactComponent as MobileIcon } from '@/assets/icons/mobile.svg'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg'

//redux
import { tabSelector } from '@/redux/profile/selectors'
import { countrySelector } from '@/redux/geo/selectors'
import { setIsAuth } from "@/redux/auth/slice";
import { setCountry } from "@/redux/geo/slice";
import { themeSelector } from "@/redux/theme/selectors";

//utils
import { getOS } from '@/utils/getOS'
import { getDate } from '@/utils/formatDate'
import { isAuthSelector } from "@/redux/auth/selectors";


const Profile: React.FC = () => {

    const tab = useSelector(tabSelector);
    const country = useSelector(countrySelector);
    const theme = useSelector(themeSelector);
    const isAuth = useSelector(isAuthSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const API_KEY = 'AIzaSyCYYb9ZtSS19QpJ7fvsU-Tm-x_o9rKIkzc';
    const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

    const notifications: string[] = [
        'Push notifications',
        'Email notifications',
        'Messages',
        'Newsletter',
        'Reviews',
        'News'
    ];

    const handleLogout = () => {
        if (confirm('Are you sure you want to exit?')) {
            dispatch(setIsAuth(false));
            localStorage.setItem('auth', 'false');
            navigate('/Animenia/');
        }
    }

    const getGeo = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const url = API_URL + lat + "," + lng + "&key=" + API_KEY + "&language=en";
                fetchGeo(url);
            });
            return `${country}`;
        } else {
            alert("Geolocation is not supported by this browser.");
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const fetchGeo = async (url: string) => {
        try {
            const { data } = await axios.get(url);
            dispatch(setCountry(data.results[0].formatted_address.split(', ')[4]));
        } catch (error) {
            alert('An error occurred while getting the location');
            console.error(error);
        }
    }


    return (
        <div className="container">
            {isAuth ?
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
                                    <HeadingBlock title='Anime List' icon={<FolderIcon />} filter />
                                    <div className={styles.anime__content}>
                                        <p>You don't have anything on your lists.</p>
                                    </div>
                                </div>
                            </section>
                        }
                        {tab === 'Security and privacy' &&
                            <section className={styles.sessions}>
                                <div className={styles.sessions__wrapper}>
                                    <HeadingBlock title='Sessions' icon={<FolderIcon />} filter />
                                    <div className={styles.sessions__item}>
                                        <div className={styles.sessions__item__os}>
                                            <div className={styles.sessions__item__os__icon}>
                                                {getOS()?.includes('iOS') || getOS()?.includes('Android') ? <MobileIcon /> : <DesktopIcon />}
                                            </div>
                                            <div className={styles.sessions__item__os__info}>
                                                <h3>OS: {getOS()}</h3>
                                                <p>Geo: {getGeo()}</p>
                                            </div>
                                        </div>
                                        <p className={styles.sessions__item__date}>
                                            Date: {getDate()}
                                        </p>
                                        <p className={styles.sessions__item__current}>
                                            Current Session
                                        </p>
                                        <div className={`${styles.sessions__item__remove}
                             ${theme === 'light' ? styles.sessions__item__remove__light : styles.sessions__item__remove__dark}`}>
                                            <button onClick={handleLogout}>
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
                :
                <div className={styles.notAuth}>
                    <h1>To access the page, please login</h1>
                    <Link to={'/Animenia/login'}>Login</Link>
                </div>
            }
        </div >
    )
}

export default Profile