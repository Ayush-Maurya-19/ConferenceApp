import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Registration from './components/Registration'
import ConferenceList from './components/ConferenceList'
import AdminLogin from './components/AdminLogin'
import AdminSignup from './components/AdminSignup'
import ManageConferenceDetails from './components/ManageConferenceDetails'
import EditConference from './components/EditConference'
function App() {

 
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/conferencelist" element={<ConferenceList />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/ManageConferenceDetails" element={<ManageConferenceDetails />} />
          <Route path="/editconference" element={<EditConference />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
