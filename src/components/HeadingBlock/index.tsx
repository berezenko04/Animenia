import styles from './HeadingBlock.module.scss'

import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-left.svg'

type HeadingBlockProps = {
    icon: React.ReactElement,
    title: string,
    slider?: boolean,
    children?: React.ReactNode
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ icon, title, slider, children }) => {
    return (
        <div className={styles.block}>
            <div className={styles.block__content}>
                <div className={styles.block__content__left}>
                    <div className={styles.block__content__left__icon}>
                        {icon}
                    </div>
                    <h2>{title}</h2>
                </div>
                {slider &&
                    <div className={styles.block__content__right}>
                        <button className={styles.button__prev}><ArrowIcon /></button>
                        <button className={styles.button__next}><ArrowIcon /></button>
                    </div>
                }
            </div>
            <div className={styles.block__main}>
                {children}
            </div>
        </div >
    )
}

export default HeadingBlock