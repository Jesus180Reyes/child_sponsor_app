import "./index.css"
export const LoginPage = () => {
  return (
    <>
    <div className="loginAuth-container">
      <div className="auth-box">
        <div className="form-container">
        <form >
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button>LogIn</button>
        </form>
        </div>
      </div>
    </div>
    </>
  )
}
