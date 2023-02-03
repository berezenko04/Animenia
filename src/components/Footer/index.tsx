import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

import Logo from '../Logo'

//icons
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook-negative.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter-negative.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram-negative.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube-negative.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegram-negative.svg'
import { ReactComponent as ArrowTopIcon } from '../../assets/icons/arrow-top.svg'

const Footer: React.FC = () => {

    const socials: React.ReactElement[] = [<FacebookIcon />, <TwitterIcon />, <InstagramIcon />, <YoutubeIcon />, <TelegramIcon />];
    const seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
    const genres: string[] = ['School Life', 'Magic', 'Romantic', 'Action'];
    const about: string[] = [
        'All videos on the site are provided for information only and do not involve downloading.',
        'Technical support and assistance to users: all.site.anime@gmail.com',
        'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.'
    ];

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__left}>
                        <div className={styles.footer__left__copyright}>
                            <Logo />
                            <p>Copyright © Animenia All rights reserved</p>
                        </div>
                        <ul className={styles.footer__left__socials}>
                            {socials.map((social, index) => (
                                <li key={index}><a href="">{social}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footer__categories}>
                        <div className={styles.footer__categories__item}>
                            <h3>Seasons</h3>
                            <ul>
                                {seasons.map((season, index) => (
                                    <li key={index}><Link to=''>{season}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.footer__categories__item}>
                            <h3>Genres</h3>
                            <ul>
                                {genres.map((genre, index) => (
                                    <li key={index}><Link to=''>{genre}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footer__about}>
                        <h3>About Us</h3>
                        <div className={styles.footer__about__text}>
                            {about.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>
                    <button className={styles.footer__up}>
                        <ArrowTopIcon />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer