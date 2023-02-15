import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//styles
import styles from './SettingsBlock.module.scss'

//components
import HeadingBlock from '@/components/HeadingBlock'

//icons
import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg'

//utils
import { tabSelector } from '@/redux/profile/selectors'
import { setTab } from '@/redux/profile/slice'


export const links = ["General", "Security and privacy", "Notifications"];

const SettingsBlock: React.FC = () => {

    const tab = useSelector(tabSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [tab])


    return (
        <div className={styles.block}>
            <HeadingBlock title='Settings' icon={<SettingsIcon />} />
            <div className={styles.block__content}>
                {links.map((link, index) => (
                    <div className={styles.block__content__link} key={index}>
                        {links[index] === tab && <div className={styles.circle}></div>}
                        <button
                            key={index}
                            className={links[index] === tab ? styles.block__content__link__active : styles.block__content__link__default}
                            onClick={() => dispatch(setTab(links[index]))}
                        >
                            {link}
                        </button>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default SettingsBlock