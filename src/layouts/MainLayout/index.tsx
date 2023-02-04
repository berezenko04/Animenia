import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main className={styles.main}><Outlet /></main>
            <Footer />
        </>
    )
}

export default Layout