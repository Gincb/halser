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

function Login(props: Props) {
  const [loginFormElementErr, setLoginFormElementErr] = useState<null | string>(
    null
  )

  const { history } = props

  const LoginFormErrorMessages: { [key: string]: string } = {
    ["auth/invalid-email"]: "Email is invalid",
    ["auth/user-disabled"]: "Email is disabled",
    ["auth/user-not-found"]: "Email doesn't exist",
    ["auth/wrong-password"]: "Wrong Password",
  }

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault()
      const { email, password } = e.target.elements

      try {
        await FirebaseApp.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        )
        setTimeout(() => {
          history.push("/")
        }, 400)
      } catch (err) {
        setLoginFormElementErr(LoginFormErrorMessages[err.code] || err.message)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  if (currentUser) {
    <Redirect to="/" />
  }

  return (
    <article className="account_creation_login">
      <h1>login</h1>

      <form onSubmit={handleLogin}>
        {loginFormElementErr && (
          <div className="account_creation_login_error">
            {" "}
            {loginFormElementErr}
          </div>
        )}
        <input type="email" name="email" required placeholder="email" />

        <input
          type="password"
          name="password"
          minLength={6}
          required
          placeholder="password"
        />
        <Button buttonText="Login" />
      </form>
    </article>
  )
}

export default withRouter(Login)
