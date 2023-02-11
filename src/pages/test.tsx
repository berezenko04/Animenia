import AnimeCardSkeleton from "@/components/skeletons/AnimeCardSkeleton"
import AccordionSkeleton from "@/components/skeletons/AccordionSkeleton"

import styles from './test.module.scss'


const test: React.FC = () => {


    return (
        <div className="container">
            <div className={styles.main}>
                <div className={styles.items}>
                    {[...Array(3)].map((_, index) => (
                        <AnimeCardSkeleton key={index} />
                    ))}
                </div>
                <div className={styles.news}>
                    {[...Array(5)].map((_, index) => (
                        <AccordionSkeleton key={index} />
                    ))}

                </div>
            </div>
        </div >
    )
}

export default test