//styles
import styles from './UploadAvatar.module.scss'

//icons
import { ReactComponent as CameraIcon } from '@/assets/icons/camera.svg'
import ProfileImage from '@/assets/img/profile.webp'

const UploadAvatar: React.FC = () => {
    return (
        <div className={styles.upload}>
            <input type="file" id='upload' accept='image/*' />
            <label htmlFor="upload"><CameraIcon /></label>
            <img src={ProfileImage} alt="upload" />
        </div>
    )
}

export default UploadAvatar