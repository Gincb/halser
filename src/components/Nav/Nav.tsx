import { useEffect, useState } from "react"
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
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setNavPosition("top")
      } else {
        setNavPosition("bottom")
      }
    })
  }, [])

  return (
    <nav className="nav">
      <ul className="nav_list">
        <NavItem position={navPosition} text="home" icon={<Home />} />
        <NavItem position={navPosition} text="create" icon={<Create />} />
      </ul>
      <Logo className={"nav_logo_" + navPosition} />
      <ul className="nav_list">
        <NavItem position={navPosition} text="profile" icon={<Profile />} />
        <NavItem position={navPosition} text="logout" icon={<Logout />} />
      </ul>
    </nav>
  )
}

export default Nav
