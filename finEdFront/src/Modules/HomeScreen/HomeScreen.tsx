import React from 'react'
import Header from '../../Components/Header/Header'
import styles from './HomeScreen.module.scss'

function HomeScreen() {
    return (
        <div>
            <Header />
            <div className={styles.LandingPageBanner}>
                <img src={'https://picsum.photos/1000/1000'} alt="React Logo" />
            </div>
        </div>
    )
}

export default HomeScreen