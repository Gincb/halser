import { useContext } from "react"
import { withRouter, Redirect } from "react-router"
import { AuthContext } from '../../Auth';
import FullLogo from "../../assets/FullLogo"
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

function UserRegister() {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    <Redirect to='/home' />;
  }

  return (
    <div className="account">
      <FullLogo className="account_logo" />
      <section className="account_creation">
        <Signup/>
        <span>-or-</span>
        <Login/>
      </section>
    </div>
  )
}

export default withRouter(UserRegister)
