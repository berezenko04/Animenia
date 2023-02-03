import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'

import Header from '../Header'

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main><Outlet /></main>
        </>
    )
}

export default Layout