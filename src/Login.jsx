import './login.css'

function Login() {
  return (
    <>
      <div className="login">
      
      <form >
        <br />
        <h1>Login Form</h1>
        <br />
        <input type="text" name="" id="" placeholder='Username' />
        <br />
        <br />
        <input type="password" name="" id="" placeholder='Password' />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <div style={{display:'flex' ,gap:'10px', justifyContent:'center'}}>
          <font>Forget password.?</font>
          <font>Signup now</font>
        </div>
      </form>
      </div>
    </>
  );
}
export default Login;
