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
  const [activeNav, setActiveNav] = useState<string | any>("")

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
    const navSelected = localStorage.getItem("nav")
    setActiveNav(navSelected)
  }, [])

  function handleClick(selected: string): void | Error {
    switch (selected) {
      case "home":
        setActiveNav("home")
        localStorage.setItem("nav", "home")
        break
      case "create":
        setActiveNav("create")
        localStorage.setItem("nav", "create")
        break
      case "profile":
        setActiveNav("profile")
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
          className={activeNav === "home" ? "nav_list_active" : ""}
          onClick={() => handleClick("home")}
        >
          <NavItem position={navPosition} text="home" icon={<Home />} active={activeNav === "home"}/>
        </Link>
        <Link
          to="/create"
          className={activeNav === "create" ? "nav_list_active" : ""}
          onClick={() => handleClick("create")}
        >
          <NavItem position={navPosition} text="create" icon={<Create />}  active={activeNav === "create"}/>
        </Link>
      </ul>
      <Logo className={"nav_logo_" + navPosition} />
      <ul className="nav_list">
        <Link
          to="/profile"
          className={activeNav === "profile" ? "nav_list_active" : ""}
          onClick={() => handleClick("profile")}
        >
          <NavItem position={navPosition} text="profile" icon={<Profile />}  active={activeNav === "profile"}/>
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
