import styles from './AuthButton.module.scss'

import { ReactComponent as FacebookIcon } from '@/assets/icons/socials/facebook.svg'
import { ReactComponent as GoogleIcon } from '@/assets/icons/socials/google.svg'

type AuthButtonsProps = {
    variation: string
}

const AuthButton: React.FC<AuthButtonsProps> = ({ variation }) => {

    return (
        <>
            {variation === 'facebook' ?
                <button className={`${styles.button} ${styles.button__facebook}`}>
                    <FacebookIcon />
                    <p>Sign in with Facebook</p>
                </button>
                :
                <button className={`${styles.button} ${styles.button__google}`}>
                    <GoogleIcon />
                    <p>Sign in with Google</p>
                </button>
            }
        </>
    )
}

export default AuthButton