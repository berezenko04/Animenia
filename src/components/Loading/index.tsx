import styles from './Loading.module.scss'

import { ReactComponent as LoadingIcon } from '@/assets/icons/loading.svg'

const Loading: React.FC = () => {
    return (
        <div className={styles.loading}>
            <LoadingIcon />
        </div>
    )
}

export default Loading