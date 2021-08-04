import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import app from "../FirebaseApp"
import Logo from "../../assets/Logo"
import Home from "../../assets/Home"
import Create from "../../assets/Create"
import Profile from "../../assets/Profile"
import Logout from "../../assets/Signout"
import NavItem from "../NavItem/NavItem"

function Nav() {
  const [navPosition, setNavPosition] = useState<string>("top")

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setNavPosition("top")
    } else {
      setNavPosition("bottom")
    }
  }, [setNavPosition])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setNavPosition("top")
      } else {
        setNavPosition("bottom")
      }
    })
  })

  useEffect(() => {
    if (!localStorage.getItem("nav")) {
      localStorage.setItem("nav", 'home')
    }
  }, [])

  function handleClick(selected: string): void | Error {
    switch (selected) {
      case "home":
        localStorage.setItem("nav", "home")
        break
      case "create":
        localStorage.setItem("nav", "create")
        break
      case "profile":
        localStorage.setItem("nav", "profile")
        break
      default:
        return new Error("failed to change selected nav value")
    }
  }

  function handleSignOut() {
    localStorage.removeItem("nav")
    app.auth().signOut()
  }

  return (
    <nav className="nav">
      <ul className="nav_list">
        <Link
          to="/"
          className={localStorage.getItem("nav") === 'home' ? "nav_list_active" : ""}
          onClick={() => handleClick("home")}
        >
          <NavItem position={navPosition} text="home" icon={<Home />} active={localStorage.getItem("nav") === 'home' }/>
        </Link>
        <Link
          to="/create"
          className={localStorage.getItem("nav") === 'create'  ? "nav_list_active" : ""}
          onClick={() => handleClick("create")}
        >
          <NavItem position={navPosition} text="create" icon={<Create />}  active={localStorage.getItem("nav") === 'create' }/>
        </Link>
      </ul>
      <Logo className={"nav_logo_" + navPosition} />
      <ul className="nav_list">
        <Link
          to="/profile"
          className={localStorage.getItem("nav") === 'profile'  ? "nav_list_active" : ""}
          onClick={() => handleClick("profile")}
        >
          <NavItem position={navPosition} text="profile" icon={<Profile />}  active={localStorage.getItem("nav") === 'profile' }/>
        </Link>
        <NavItem
          position={navPosition}
          text="logout"
          icon={<Logout />}
          onClick={handleSignOut}
        />
      </ul>
    </nav>
  )
}

export default Nav
