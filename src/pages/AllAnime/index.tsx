import styles from './AllAnime.module.scss'

//components
import HeadingBlock from '@/components/HeadingBlock'
import Sidebar from '@/components/Sidebar'

import { ReactComponent as PlugIcon } from '@/assets/icons/plug.svg'

const AllAnime: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.page}>
                <div>
                    <HeadingBlock title='All Anime' icon={<PlugIcon />} />
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

export default AllAnime