import React from 'react'

const Navbar = () => {
  return (
    <div className='nav' style={{fontSize:"20px", textDecoration:"None"}} >
        <a style={{textDecoration:"None"}}  href="/">Home</a>
        <a style={{textDecoration:"None"}}  href="/conferencelist">ConferenceList</a>
        <a style={{textDecoration:"None"}} href="/ManageConferenceDetails">ManageConferenceDetails</a>
        <a style={{textDecoration:"None"}} href="/registration">Registration</a>
        <a style={{textDecoration:"None"}} href="/signup">UserSignup</a>
        <a style={{textDecoration:"None"}} href="/login">UserLogin</a>
        <a style={{textDecoration:"None"}} href="/adminlogin">AdminLogin</a>
        <a style={{textDecoration:"None"}}  href="/adminsignup">AdminSignup</a>
    </div>
  )
}

export default Navbar