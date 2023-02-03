
import styles from './Home.module.scss'

import HeadingBlock from '../../components/HeadingBlock'

import { ReactComponent as ArrowTopIcon } from '../../assets/icons/arrow-top.svg'

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.page}>
                <HeadingBlock title='Spring Season' icon={<ArrowTopIcon />} slider={false} />
            </div>
        </div>
    )
}

export default Home