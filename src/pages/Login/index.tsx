import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'

import styles from './Login.module.scss'

//icons
import { ReactComponent as UserIcon } from '@/assets/icons/profile.svg'
import { ReactComponent as UnlockIcon } from '@/assets/icons/unlock.svg'

//components
import AuthField from '@/components/AuthField'
import AuthButton from '@/components/AuthButton'
import Header from '@/components/Header'

//redux
import { setIsAuth } from '@/redux/auth/slice'

const Login: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setIsAuth(true));
        localStorage.setItem('auth', 'true');
        navigate('/Animenia/');
    }


    return (
        <div className={styles.page}>
            <Header />
            <div className="container">
                <div className={styles.page__wrapper}>
                    <div className={styles.page__form}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className={styles.page__form__main}>
                                <h1>Login</h1>
                                <div className={styles.page__form__main__fields}>
                                    <AuthField type='text' placeholder='Login' icon={<UserIcon />} />
                                    <div className={styles.page__form__main__fields__forgot}>
                                        <AuthField type='password' placeholder='Password' icon={<UnlockIcon />} />
                                        <Link to=''>Forgot password</Link>
                                    </div>
                                </div>
                                <input type="submit" value={'Login'} />
                                <div className={styles.page__form__main__account}>
                                    <p>Don't have an account?</p>
                                    <Link to='/Animenia/register'>Register</Link>
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

export default Login