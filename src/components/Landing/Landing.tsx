import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FullLogo from "../../assets/FullLogo"
import Button from "../Buttons/Button"
import PreviewDesktop from "../../assets/landing.png"
import PreviewMobile from "../../assets/landing-m.png"

function Landing() {
  const [preview, setPreview] = useState<string>()

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setPreview(PreviewDesktop)
    } else {
      setPreview(PreviewMobile)
    }
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setPreview(PreviewDesktop)
      } else {
        setPreview(PreviewMobile)
      }
    })
  }, [])

  return (
    <div className="landing">
      <FullLogo className="landing_logo" />
      <section className="landing_info">
        <p className="landing_info_text">
          halser is a place for upcoming writers to share their knowledge and
          ideas with like-minded individuals. Don't be shy! Connect and
          contribute to the community with your personality and brighten the
          days of others.
        </p>
        <Link to="/signup">
          <Button buttonText="Join us!" />
        </Link>
      </section>
      <div className="landing_preview">
        <img src={preview} alt="Preview of the halser app" />
      </div>
      <footer>
        <p>Made by Gintare Bespalovaite</p>
      </footer>
    </div>
  )
}

export default Landing
