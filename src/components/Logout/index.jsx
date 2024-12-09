import React, {useEffect, useState} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebaseConfig'
import { Navigate, useNavigate } from 'react-router-dom'

const Logout = () => {

  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()

  console.log(checked)

  useEffect(() => {
    if (checked) {
        signOut(auth).then(() => {
            console.log('Signed out')
            setTimeout(() => {
            navigate('/') 
            }, 1000)
        }).catch((error) => {
            console.error('Sign out failed', error)
        })    }
  }, [checked])

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <div className='logoutContainer'>
        <label className='switch'>
            <input
                onChange={handleChange}
                type='checkbox'
                checked={checked}
            />
            <span className='slider round'></span>
        </label>
    </div>
  )
}

export default Logout