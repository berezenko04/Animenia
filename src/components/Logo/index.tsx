import { Link } from 'react-router-dom'

//styles
import styles from './Logo.module.scss'

const Logo: React.FC = () => {
    return (
        <Link to='/Animenia/' className={styles.logo}>Animenia</Link>
    )
}

export default Logo