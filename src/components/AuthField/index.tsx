import { useState } from 'react'

//styles
import styles from './AuthField.module.scss'


//icons
import { ReactComponent as HideIcon } from '@/assets/icons/hide.svg'
import { ReactComponent as VisibleIcon } from '@/assets/icons/visible.svg'

type AuthFieldProps = {
    type: string,
    placeholder: string,
    icon: React.ReactElement
}

const AuthField: React.FC<AuthFieldProps> = ({ type, placeholder, icon }) => {

    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.input}>
            <div className={styles.input__icon}>
                {icon}
            </div>
            <input type={type === 'password' ? (visible ? 'text' : 'password') : type} placeholder={placeholder} required />
            {type === 'password' && <button type='button' onClick={() => setVisible(!visible)}>{visible ? <VisibleIcon /> : <HideIcon />}</button>}
        </div>
    )
}

export default AuthField