import { useCallback, useState, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import firebaseApp, {auth, createUserDocument} from "../FirebaseApp"
import { RouteComponentProps } from "react-router-dom"
import { AuthContext } from "../../Auth"
import Button from "../Buttons/Button"

export type formErrorTypes = {
  [key: string]: string;
};

export type Props = {
  history: RouteComponentProps["history"]
  location: RouteComponentProps["location"]
  match: RouteComponentProps["match"]
}

function SignUp(props: Props) {
  const [signupFormElementErr, setSignupFormElementErr] = useState<
    null | string
  >(null)

  const { history } = props

  const FormErrorMessages: formErrorTypes = {
    ['auth/invalid-email']: 'Email is invalid',
    ['auth/weak-password']: 'Password must be at least 6 characters long',
    ['auth/email-already-in-use']: 'Email already exists',
  };

  async function handleSignup(e:any) {
    e.preventDefault();
    const { email, password, confirmPassword, username } = e.target.elements;
    try {
      if (password.value === confirmPassword.value) {
        const { user } = await firebaseApp
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        await createUserDocument(user, { username: username.value});
        history.push('/');
      } else {
        setSignupFormElementErr('Passwords do not match');
      }
    } catch (err) {
      setSignupFormElementErr(FormErrorMessages[err.code] || err.message);
    }
  }

  const { currentUser } = useContext(AuthContext)
  if (currentUser) {
    <Redirect to="/" />
  }

  return (
    <article className="account_creation_signup">
      <h1>signup</h1>

      <form onSubmit={handleSignup}>
        {signupFormElementErr && (
          <div className="account_creation_signup_error">
            {" "}
            {signupFormElementErr}
          </div>
        )}
        <input type="text" name="username" required placeholder="username" />

        <input type="email" name="email" required placeholder="email" />

        <input
          type="password"
          name="password"
          minLength={6}
          required
          placeholder="password"
        />

        <input
          type="password"
          name="confirmPassword"
          minLength={6}
          required
          placeholder="confirm password"
        />
        <Button buttonText="Signup" />
      </form>
    </article>
  )
}

export default withRouter(SignUp)
