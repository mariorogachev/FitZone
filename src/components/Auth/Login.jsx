export default function LogIn (){
    return(
        <>
        
  <meta charSet="UTF-8" />
  <link
    rel="icon"
    href="public/assets/images/tabs-first-icon.png"
    type="image/x-icon"
  />
  <title>Sign up</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,48Pw4HEUGAuiaJUkba6BNTUwdGVAfUe1FXhkn4UxfmGb6EQhmA1XWc3DUZMbQKZWrs9QuM7oDmFKL28TNF4NNxi7RhnZwur=swap"
  />
  <link rel="stylesheet" href="/assets/css/login.css" />
  {/* partial:index.partial.html */}
  <div className="screen-1">
    <div>
      <a href="index.html">
        <img src="assets/images/features-first-icon.png" className="logo" />
      </a>
    </div>
    <div className="email">
      <label htmlFor="email">Email Address</label>
      <div className="sec-2">
        <ion-icon name="mail-outline" />
        <input type="email" name="email" placeholder="E-mail" />
      </div>
    </div>
    <div className="password">
      <label htmlFor="password">Password</label>
      <div className="sec-2">
        <ion-icon name="lock-closed-outline" />
        <input
          className="pas"
          type="password"
          name="password"
          placeholder="············"
        />
        <ion-icon className="show-hide" name="eye-outline" />
      </div>
    </div>
    <button className="login">Login </button>
    <div className="footer">
      <span>Signup</span>
      <span>Forgot Password?</span>
    </div>
  </div>
  {/* partial */}


        </>
    )
}