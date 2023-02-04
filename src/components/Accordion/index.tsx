import { useState } from 'react'

import styles from './Accordion.module.scss'

import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg'


type AccordionProps = {
    title: string,
    genre: string,
    children: React.ReactNode
}


const Accordion: React.FC<AccordionProps> = ({ title, genre, children }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__main} onClick={() => setIsActive(!isActive)}>
                <div className={styles.accordion__main__head}>
                    <div className={styles.accordion__main__head__title}>
                        <h3
                            className={isActive ? styles.accordion__main__head__title__active : styles.accordion__main__head__title__default}
                        >
                            {title}
                        </h3>
                        <ArrowDownIcon className={isActive ? styles.icon__active : ''} />
                    </div>
                    <p>{genre}</p>
                </div>
                <p>04/02/2023</p>
            </div>
            {isActive &&
                <div className={styles.accordion__content}>
                    {children}
                </div>
            }
        </div>
    )
}

export default Accordion