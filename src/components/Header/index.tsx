import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import Logo from '../Logo'

//Icons
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile.svg'
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down.svg'
import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg'
import ProfileImage from '@/assets/img/profile.webp'


//redux
import { useSelector } from 'react-redux'
import { isAuthSelector } from '@/redux/auth/selectors'


const Header: React.FC = () => {
    const links = [
        { name: 'All', path: '/Animenia/all' },
        { name: 'Top 100', path: '/Animenia/all' },
        { name: 'Genres', path: '/Animenia/all' },
        { name: 'Categories', path: '/Animenia/all' },
        { name: 'Anons', path: '/Animenia/all' },
        { name: 'Random', path: '/Animenia/all' }
    ];

    const auth = useSelector(isAuthSelector);

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__wrapper}>
                    <Logo />
                    <nav>
                        <ul className={styles.nav__links}>
                            {links.map((link, index) => (
                                <li key={index} className={styles.nav__links__item}>
                                    <Link to={link.path}>{link.name}</Link>
                                    {links.slice(1, 4).includes(link) && <ArrowDownIcon />}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.header__search}>
                        <label htmlFor="search"><SearchIcon /></label>
                        <input type="text" placeholder='Search...' id='search' autoComplete='off' />
                    </div>
                    <div className={styles.header__userBlock}>
                        <div className={styles.header__userBlock__buttons}>
                            <button><MoonIcon /></button>
                            {auth &&
                                <div className={styles.header__userBlock__buttons__notification}>
                                    <button><NotificationIcon /></button>
                                    <div className={styles.header__userBlock__buttons__notification__overlay}>
                                        <h3>Notifications</h3>
                                    </div>
                                </div>
                            }
                            {!auth && <Link to='/Animenia/login' className={styles.header__userBlock__buttons__auth}><ProfileIcon /></Link>}
                        </div>
                        {auth &&
                            <div className={styles.header__userBlock__profile}>
                                <Link to='/Animenia/profile'>
                                    <img src={ProfileImage} alt="profile" />
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header