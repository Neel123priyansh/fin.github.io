import React from 'react'
import styles from './LoginScreen.module.scss'

function LoginScreen() {
    const [userDetails, setUserDetails] = React.useState({
        username: '',
        password: ''
    })
  return (
    <div>
        <form className={styles.FormContainer}>
            <label>
                Username:
                <input value={userDetails.username} type="text" name="name" onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} />
            </label>
            <label>
                Password:
                <input value={userDetails.password} type="password" name="password" onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} />
            </label>
            <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default LoginScreen