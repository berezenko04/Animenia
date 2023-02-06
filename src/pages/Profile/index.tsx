
import styles from './Profile.module.scss'

//components
import SettingsBlock from '@/components/SettingsBlock'
import HeadingBlock from '@/components/HeadingBlock'
import UploadAvatar from '@/components/UploadAvatar'
import ProfileInfo from '@/components/ProfileInfo'

//icons
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile.svg'
import { ReactComponent as FolderIcon } from '@/assets/icons/folder.svg'


const Profile: React.FC = () => {

    return (
        <div className="container">
            <div className={styles.page}>
                <SettingsBlock />
                <div className={styles.page__main}>
                    <section className={styles.profile}>
                        <div className={styles.profile__wrapper}>
                            <HeadingBlock title='Profile' icon={<ProfileIcon />} />
                            <div className={styles.profile__content}>
                                <UploadAvatar />
                                <ProfileInfo />
                            </div>
                        </div>
                    </section>
                    <section className={styles.anime}>
                        <div className={styles.anime__wrapper}>
                            <HeadingBlock title='Anime List' icon={<FolderIcon />} />
                            <div className={styles.anime__content}>
                                <p>You don't have anything on your lists.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Profile