import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.HeaderWrapper}>
            <div className={styles.LinkContainer}>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to='/login'>
                    Profile
                    {/* @todo: Add image instead of text */}
                </Link>
            </div>
        </div>
    )
}

export default Header