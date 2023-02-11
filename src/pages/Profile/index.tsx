import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
import { ReactComponent as MobileIcon } from '@/assets/icons/mobile.svg'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg'

//redux
import { useSelector } from 'react-redux'
import { tabSelector } from '@/redux/profile/selectors'
import { citySelector, countrySelector } from '@/redux/geo/selectors'
import NotificationsItem from '@/components/NotificationsItem'
import { setIsAuth } from "@/redux/auth/slice";
import { isAuthSelector } from "@/redux/auth/selectors";
import { setCity, setCountry } from "@/redux/geo/slice";
import { themeSelector } from "@/redux/theme/selectors";


//utils
import { getOS } from '@/utils/getOS'
import { getDate } from '@/utils/formatDate'

const Profile: React.FC = () => {

    const tab = useSelector(tabSelector);
    const country = useSelector(countrySelector);
    const city = useSelector(citySelector);
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();
    const isMounted = useRef(false);
    const isAuth = useSelector(isAuthSelector);
    const navigate = useNavigate();
    const API_KEY = 'AIzaSyCYYb9ZtSS19QpJ7fvsU-Tm-x_o9rKIkzc';
    const API_URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";


    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(isAuth);
            localStorage.setItem('auth', json);
        }
        isMounted.current = true;
    }, [isAuth]);

    const notifications: string[] = [
        'Push notifications',
        'Email notifications',
        'Messages',
        'Newsletter',
        'Reviews',
        'News'
    ];

    const handleLogout = () => {
        if (confirm('Are you sure you want to logout?')) {
            dispatch(setIsAuth(false));
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
            return `${country}, ${city}`;
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const fetchGeo = async (url: string) => {
        try {
            const { data } = await axios.get(url);
            const dataArray = data.results[0].formatted_address.split(', ');
            dispatch(setCountry(dataArray[4]));
            dispatch(setCity(dataArray[2]));
        } catch (error) {
            alert('An error occurred while getting the location');
            console.error(error);
        }
    }


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
                                        {!getOS()?.includes('iOS') || !getOS()?.includes('Android') ? <DesktopIcon /> : <MobileIcon />}
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
                                    <button
                                        className={theme === 'light' ? styles.sessions__item__remove : styles.sessions__item__remove__dark}
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