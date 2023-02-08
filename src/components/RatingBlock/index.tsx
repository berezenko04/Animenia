import styles from './RatingBlock.module.scss'

import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'

type RatingBlockProps = {
    rating: number,
    variation?: 'primary' | 'secondary'
}

const RatingBlock: React.FC<RatingBlockProps> = ({ rating, variation = 'primary' }) => {
    return (
        <div className={`${styles.rating} ${variation === 'primary' ? styles.rating__primary : styles.rating__secondary}`}>
            <div className={styles.rating__wrapper}>
                <StarIcon />
                <span>{rating}</span>
            </div>
        </div>
    )
}

export default RatingBlock