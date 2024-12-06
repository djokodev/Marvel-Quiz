import React, {useState, useEffect} from 'react'
import { Link, replace, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [btn, setBtn] = useState(false)
  const navigate = useNavigate()
  const [error, SetError] = useState("")

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true)
    }
  }, [email, password])

  const btnDisplay = btn ? <button>Connexion</button>:<button disabled>Connexion</button>

  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(user => {
        setEmail("")
        setPassword("")
        navigate("/welcome", {replace: true})
    })
    .catch(error => {
        SetError(error)
        setEmail("")
        setPassword("")
    })
  }

  return (
    <div className='signUpLoginBox'>
        <div className="slContainer">
        <div className='formBoxLeftLogin'></div>
            <div className='formBoxRight'>
              <div className='formContent'>

                {error !== '' && <span>{error.message}</span>}

                <h2>Connexion</h2>

                  <form onSubmit={handleSubmit}>
                      <div className='inputBox'>
                        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" id="email" autoComplete='off' required />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className='inputBox'>
                        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" id="password" autoComplete='off' required />
                        <label htmlFor="password">Mot de passe</label>
                      </div>

                      {btnDisplay}
                  </form>

                  <div className='linkContainer'>
                      <Link className='simpleLink' to='/signup'>Nouveau ? Inscrivez-vous</Link>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login