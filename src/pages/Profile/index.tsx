
import styles from './Profile.module.scss'

//components
import SettingsBlock from '@/components/SettingsBlock'
import HeadingBlock from '@/components/HeadingBlock'

//icons
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile.svg'
import UploadAvatar from '@/components/UploadAvatar'



const Profile: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.page}>
                <SettingsBlock />
                <div className={styles.page__main}>
                    <section className={styles.page__main__profile}>
                        <div className={styles.page__main__profile__wrapper}>
                            <HeadingBlock title='Profile' icon={<ProfileIcon />} />
                            <div className={styles.page__main__profile__content}>
                                <UploadAvatar />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Profile