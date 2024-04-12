import React from 'react'
import styles from './LoginScreen.module.scss'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../../store/User/actions';
import { toast } from 'react-toastify';

function LoginScreen() {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = React.useState({
        username: '',
        password: ''
    })
    const handleClick=()=>{
        dispatch(LoginUser({
            username: userDetails.username,
            password:userDetails.password,
            onSuccess:(res:any)=>{
                toast.success(res.message)
                localStorage.setItem('Token',res.token)
            },
            onError:(res:any)=>{
                toast.error(res.message)
            }
        }))
    }
  return (
    <div>
        <div className={styles.FormContainer}>
            <label>
                Username:
                <input value={userDetails.username} type="text" name="name" onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} />
            </label>
            <label>
                Password:
                <input value={userDetails.password} type="password" name="password" onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} />
            </label>
            <button onClick={()=>handleClick()} >Submit</button>
        </div>
    </div>
  )
}

export default LoginScreen