import '../../App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/index.jsx'
import Footer from '../Footer/index.jsx'
import Header from '../Header/index.jsx'
import Landing from '../Landing/index.jsx'
import Login from '../Login/index.jsx'
import Signup from '../Singup/index.jsx'
import Welcome from '../Welcome/index.jsx'

function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
