import { useCallback, useState } from "react"
import { withRouter } from "react-router"
import FirebaseApp from "../FirebaseApp"
import { Link } from "react-router-dom"
import FullLogo from "../../assets/FullLogo"
import Button from "../Buttons/Button"

function SignUp({ history }: { history: any }) {
  const [formElementErr, setFormeElementErr] = useState<null | string>(null)
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
          setFormeElementErr("Passwords do not Match")
        }
      } catch (err) {
        setFormeElementErr(err.message)
        throw new Error(err.message)
      }
    },
    [history]
  )

  return (
    <div className="account">
      <FullLogo className="account_logo" />
      <section className="account_creation">
        <article className="account_creation_signup">
          <h1>signup</h1>
          {formElementErr && (
            <div style={{ color: "red" }}> {formElementErr}</div>
          )}
          <form onSubmit={handleSignup}>
              <input type="text" name="username" placeholder="username" />

              <input type="email" name="email" placeholder="email" />

              <input type="password" name="password" placeholder="password" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
              />
              <Button buttonText='Signup'/>
          </form>
        </article>
        <span>-or-</span>
        <article className="account_creation_login">
          <h1>login</h1>
          {formElementErr && (
            <div style={{ color: "red" }}> {formElementErr}</div>
          )}
          <form onSubmit={handleSignup}>
              <input type="email" name="email" placeholder="email" />

              <input type="password" name="password" placeholder="password" />
            <Button buttonText='Login'/>
          </form>
        </article>
      </section>
    </div>
  )
}

export default withRouter(SignUp)
