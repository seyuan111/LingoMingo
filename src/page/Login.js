import React from 'react'

export const Login = () => {
  return (
    <div className="LoginPage">
    <div className="loginForm">
    <form>
      <h2>Login to LingoMingo</h2>
      <div>
        <label>UserName:</label>
        <input type="text" placeholder="Enter Username"></input>
      </div>
      <div>Password:</div>
      <input type="password" placeholder="Enter Password"></input>
      <button>Sign in</button>
      <p><input className="mr-2 relative" type="checkbox"></input>Remember this account</p>
      <p><span className="text-blue-500 relative cursor-pointer">Sign Up</span> to become a member</p>  
    </form>
  </div>
    </div>
  )
}

export default Login