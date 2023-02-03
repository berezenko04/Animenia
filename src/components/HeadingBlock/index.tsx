import styles from './HeadingBlock.module.scss'

type HeadingBlockProps = {
    icon: React.ReactElement,
    title: string,
    slider: boolean
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ icon, title, slider }) => {
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

                    </div>
                }
            </div>
        </div>
    )
}

export default HeadingBlock