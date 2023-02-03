import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import Logo from '../Logo'

//Icons
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg'


const Header: React.FC = () => {
    const links = ['All', 'Top 100', 'Genres', 'Categories', 'Anons', 'Random'];
    const auth = false;

    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <Link to='/Animenia'>
                    <Logo />
                </Link>
                <nav>
                    <ul className={styles.nav__links}>
                        {links.map((link, index) => (
                            <li key={index} className={styles.nav__links__item}>
                                <Link to=''>{link}</Link>
                                {links.slice(1, 4).includes(link) && <ArrowDownIcon />}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.header__search}>
                    <div className={styles.header__search__content}>
                        <SearchIcon />
                        <input type="text" placeholder='Search...' />
                    </div>
                </div>
                <div className={styles.header__userBlock}>
                    <div className={styles.header__userBlock__buttons}>
                        <button className={styles.header__userBlock__buttons__theme}><MoonIcon /></button>
                        {auth ? '' : <Link to='/Animenia/login' className={styles.header__userBlock__buttons__auth}><ProfileIcon /></Link>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header