import { useCallback, useState, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import FirebaseApp from "../FirebaseApp"
import { RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import FullLogo from "../../assets/FullLogo"
import Button from "../Buttons/Button"

export type Props = {
  history: RouteComponentProps['history'];
  location: RouteComponentProps['location'];
  match: RouteComponentProps['match'];
};

function SignUp(props: Props) {
  const [signupFormElementErr, setSignupFormElementErr] = useState<null | string>(null)
  const [loginFormElementErr, setLoginFormElementErr] = useState<null | string>(null)

  const { history } = props;

  const handleSignup = useCallback(
    async (e) => {
      e.preventDefault()
      const { email, password, confirmPassword } = e.target.elements
      console.log(confirmPassword)

      try {
        if (password.value === confirmPassword.value) {
          await FirebaseApp.auth().createUserWithEmailAndPassword(
            email.value,
            password.value
          )
          history.push("/")
        } else {
          setSignupFormElementErr("Your passwords do not match")
        }
      } catch (err) {
        setSignupFormElementErr(err.message)
      }
    },
    [history]
  )

  const LoginFormErrorMessages: {[key:string]:string} = {
    ['auth/invalid-email']: 'Email is invalid',
    ['auth/user-disabled']: 'Email is disabled',
    ['auth/user-not-found']: "Email doesn't exist",
    ['auth/wrong-password']: 'Wrong Password',
  };

  const handleLogin = useCallback(
    async e => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      try {
        await FirebaseApp
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        setTimeout(() => {
          history.push('/');
        }, 400);
      } catch (err) {
        setLoginFormElementErr(LoginFormErrorMessages[err.code] || err.message);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  if (currentUser) {
    <Redirect to='/home' />;
  }

  return (
    <div className="account">
      <FullLogo className="account_logo" />
      <section className="account_creation">
        <article className="account_creation_signup">
          <h1>signup</h1>
          
          <form onSubmit={handleSignup}>
          {signupFormElementErr && (
            <div className='account_creation_signup_error'> {signupFormElementErr}</div>
          )}
              <input type="text" name="username" required placeholder="username" />

              <input type="email" name="email" required placeholder="email" />

              <input type="password" name="password" minLength={6} required placeholder="password" />

              <input
                type="password"
                name="confirmPassword"
                minLength={6} required
                placeholder="confirm password"
              />
              <Button buttonText='Signup'/>
          </form>
        </article>
        <span>-or-</span>
        <article className="account_creation_login">
          <h1>login</h1>
          
          <form onSubmit={handleLogin}>
          {loginFormElementErr && (
            <div className='account_creation_login_error'> {loginFormElementErr}</div>
          )}
              <input type="email" name="email" required placeholder="email" />

              <input type="password" name="password"  minLength={6} required  placeholder="password" />
            <Button buttonText='Login'/>
          </form>
        </article>
      </section>
    </div>
  )
}

export default withRouter(SignUp)
