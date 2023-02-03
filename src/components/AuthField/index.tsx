import styles from './AuthField.module.scss'

import { ReactComponent as HideIcon } from '../../assets/icons/hide.svg'

type AuthFieldProps = {
    type: string,
    placeholder: string,
    icon: React.ReactElement

}

const AuthField: React.FC<AuthFieldProps> = ({ type, placeholder, icon }) => {
    return (
        <div className={styles.input}>
            <div className={styles.input__content}>
                {icon}
                <input type={type} placeholder={placeholder} />
                {type === 'password' && <HideIcon />}
            </div>
        </div>
    )
}

export default AuthField