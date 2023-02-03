import styles from './Register.module.scss'

import AuthField from '../../components/AuthField'
import { ReactComponent as UserIcon } from '../../assets/icons/profile.svg'

const Register: React.FC = () => {
    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.page__wrapper}>
                    <div className={styles.page__form}>
                        <form action="">
                            <h1>Login</h1>
                            <AuthField type='text' placeholder='Login' icon={<UserIcon />} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register