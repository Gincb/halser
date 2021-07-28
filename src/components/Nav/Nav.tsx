import { useEffect, useState } from "react"
import Logo from "../../assets/Logo"
import Home from "../../assets/Home"
import Create from "../../assets/Create"
import Profile from "../../assets/Profile"
import Logout from "../../assets/Signout"

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
      {navPosition === "top" ? (
        <>
          <ul className="nav_list">
            <li>Somethin</li>
            <li>Somethin</li>
          </ul>
          <Logo className="nav_logo" />
          <ul className="nav_list">
            <li>Somethin</li>
            <li>Somethin</li>
          </ul>
        </>
      ) : (
        <>
          <ul className="nav_list">
            <li>
              <Home />
            </li>
            <li>
              <Create />
            </li>
            <li>
              <Profile />
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </>
      )}
    </nav>
  )
}

export default Nav
