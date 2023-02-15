import { Outlet } from 'react-router-dom'

//styles
import styles from './Layout.module.scss'

//components
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