import React, { Fragment } from 'react'
// import { useSelector } from 'react-redux';
// import { selectCurrentUser } from '../../features/user/userSlice'
import styles from './Header.module.css'
const Header = () => {

    // const currentUser = useSelector(selectCurrentUser())
    const currentUser = false

    return ( 
        <div className={styles.navWrapper}>
            <div>
                home
            </div>
            <div>
                login
            </div>
            {
                currentUser &&
                    <Fragment>
                    <div>
                        my posts
                    </div>
                    <div>
                        
                    </div>
                    </Fragment>

            }

        </div>
     );
}
 
export default Header;