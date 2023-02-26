import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//styles
import styles from './Header.module.scss'

//components
import Logo from '../Logo'

//Icons
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile.svg'
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down.svg'
import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg'
import { ReactComponent as MenuIcon } from '@/assets/icons/menu.svg'
import ProfileImage from '@/assets/img/profile.webp'

//redux
import { isAuthSelector } from '@/redux/auth/selectors'
import { themeSelector } from '@/redux/theme/selectors'
import { setTheme } from '@/redux/theme/slice'

//utils
import { useWindowResize } from '@/utils/useWindowResize'


const Header: React.FC = () => {
    const navigate = useNavigate();

    const links = [
        { name: 'All', path: '/Animenia/all' },
        { name: 'Top 100', path: '' },
        { name: 'Genres', path: '' },
        { name: 'Categories', path: '' },
        { name: 'Anons', path: '' },
        { name: 'Random', path: '' }
    ];

    const auth = useSelector(isAuthSelector);
    const theme = useSelector(themeSelector);
    const isMounted = useRef(false);
    const dispatch = useDispatch();
    const [isMenu, setIsMenu] = useState(false);
    const width = useWindowResize();


    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem('theme', theme);
        }
        isMounted.current = true;
    }, [theme])

    const handleClickRandom = (event: React.MouseEvent<HTMLButtonElement>) => {
        const rand = Math.floor(Math.random() * 20 + 1);
        navigate(`/Animenia/${rand}`)
    }

    const handleTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
    }

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__main}>
                        <Logo />
                        <nav>
                            <ul className={styles.header__main__links}>
                                {links.map((link, index) => (
                                    <li key={index} className={styles.header__main__links__item}>
                                        {link.name === 'Random' ?
                                            <button onClick={(e) => handleClickRandom(e)}>{link.name}</button>
                                            :
                                            <Link to={link.path}>
                                                {link.name}
                                            </Link>
                                        }
                                        {links.slice(1, 4).includes(link) && <ArrowDownIcon />}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={styles.header__main__search}>
                            <label htmlFor="search" className={styles.header__main__search__label}><SearchIcon /></label>
                            <input type="text" placeholder='Search...' id='search' autoComplete='off' />
                        </div>
                        <div className={styles.header__main__userBlock}>
                            <div className={styles.header__main__userBlock__buttons}>
                                <button onClick={handleTheme}>{theme === 'light' ? <MoonIcon /> : <SunIcon />}</button>
                                {auth &&
                                    <button><NotificationIcon /></button>
                                }
                                {!auth && <Link to='/Animenia/login' className={styles.header__main__userBlock__buttons__auth}><ProfileIcon /></Link>}
                            </div>
                            {auth &&
                                <div className={styles.header__main__userBlock__profile}>
                                    <Link to='/Animenia/profile'>
                                        <img src={ProfileImage} alt="profile" />
                                    </Link>
                                </div>
                            }
                            <button className={styles.header__main__userBlock__menu} onClick={() => setIsMenu(!isMenu)}>
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                    {(isMenu && width <= 1250) &&
                        <ul className={styles.header__hamburger}>
                            {links.map((link, index) => (
                                <li key={index} className={styles.header__hamburger__link}>
                                    <Link to={link.path} onClick={() => setIsMenu(false)}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header