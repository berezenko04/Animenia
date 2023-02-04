import { Link } from 'react-router-dom'

import styles from './Register.module.scss'

import AuthField from '@/components/AuthField'
import { ReactComponent as UserIcon } from '@/assets/icons/profile.svg'
import { ReactComponent as UnlockIcon } from '@/assets/icons/unlock.svg'
import AuthButton from '@/components/AuthButton'
import Header from '@/components/Header'

const Register: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <div className="container">
                <div className={styles.page__wrapper}>
                    <div className={styles.page__form}>
                        <form action="">
                            <div className={styles.page__form__main}>
                                <h1>Register</h1>
                                <div className={styles.page__form__main__fields}>
                                    <AuthField type='text' placeholder='Login' icon={<UserIcon />} />
                                    <AuthField type='password' placeholder='Password' icon={<UnlockIcon />} />
                                    <AuthField type='password' placeholder='Repeat Password' icon={<UnlockIcon />} />
                                </div>
                                <input type="submit" value={'Register'} />
                                <div className={styles.page__form__main__account}>
                                    <p>Already have an account?</p>
                                    <Link to='/Animenia/login'>Login</Link>
                                </div>
                            </div>
                            <div className={styles.page__form__buttons}>
                                <AuthButton variation='facebook' />
                                <AuthButton variation='google' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register