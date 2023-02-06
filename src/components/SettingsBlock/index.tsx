import { useState } from 'react'

import styles from './SettingsBlock.module.scss'

import HeadingBlock from '@/components/HeadingBlock'
import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg'


const SettingsBlock: React.FC = () => {

    const links = ["General", "Security and privacy", "Notifications"];

    const [isCategory, setIsCategory] = useState(links[0]);

    return (
        <div className={styles.block}>
            <HeadingBlock title='Settings' icon={<SettingsIcon />} />
            <div className={styles.block__content}>
                {links.map((link, index) => (
                    <div className={styles.block__content__link} key={index}>
                        {links[index] === isCategory && <div className={styles.circle}></div>}
                        <button
                            key={index}
                            className={links[index] === isCategory ? styles.block__content__link__active : styles.block__content__link__default}
                            onClick={() => (setIsCategory(links[index]))}
                        >
                            {link}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SettingsBlock