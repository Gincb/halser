import { useCallback, useState, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import FirebaseApp from "../FirebaseApp"
import { RouteComponentProps } from "react-router-dom"
import { AuthContext } from "../../Auth"
import Button from "../Buttons/Button"

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
