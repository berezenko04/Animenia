import { Link } from 'react-router-dom'

import styles from './AccordionTablet.module.scss'

type AccordionTabletProps = {
    title: string,
    genre: string,
    date: string,
    imageUrl: string
}


const AccordionTablet: React.FC<AccordionTabletProps> = ({ title, genre, date, imageUrl }) => {
    return (
        <div className={styles.accordion}>
            <Link to=''>
                <h3>{title}</h3>
            </Link>
            <div className={styles.accordion__info}>
                <p>{genre}</p>
                <span>{date}</span>
            </div>
            <div className={styles.accordion__image}>
                <img src={imageUrl} alt={title} />
            </div>
        </div>
    )
}

export default AccordionTablet