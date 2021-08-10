import { useEffect } from "react"
import { getUserDoc } from "../FirebaseApp"
import app from "../FirebaseApp"
import Email from "../../assets/Email"
import Instagram from "../../assets/Instagram"
import Linkedin from "../../assets/Linkedin"
import Twitter from "../../assets/Twitter"
import Webpage from "../../assets/Webpage"
import EditProfile from "../../assets/EditProfile"
import { LazyLoadImage } from "react-lazy-load-image-component"

export type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
  profileInfo: {
    username: string
    email: string
    description?: string
    socials?: {
      twitter?: string
      instagram?: string
      linkedin?: string
      website?: string
    }
    profileImage: string
    createdAt: { seconds: number; nanoseconds: number }
  }
  setProfileInformation: (arg) => void
}

function ProfileCard(props: Props) {
  useEffect(() => {
    const profileState = props.setProfileInformation
    getUserDoc(app.auth().currentUser).then((data) => {
      profileState(data)
    })
  }, [props.setProfileInformation])

  function handleEditOnclick() {
    props.setEditMode(true)
  }

  return (
    <section className="profile-card">
      <article className="profile-card_author">
        <LazyLoadImage
          alt={props.profileInfo?.username}
          src={props.profileInfo?.profileImage}
        />
        <h1>{"@" + props.profileInfo?.username}</h1>
        <button
          className="profile-card_author_edit"
          onClick={() => handleEditOnclick()}
        >
          <EditProfile />
        </button>
      </article>
      <article className="profile-card_description">
        <p>
          {props.profileInfo?.description
            ? props.profileInfo.description
            : "Say a few things about yourself here!"}
        </p>
        <div className="profile-card_description_line"></div>
        <ul className="profile-card_description_socials">
          <li>
            <Email />
            <span>{props.profileInfo?.email}</span>
          </li>
          {props.profileInfo?.socials?.instagram &&
          props.profileInfo?.socials?.instagram !== "instagram.com/" ? (
            <li>
              <Instagram />
              <span>{props.profileInfo.socials.instagram}</span>
            </li>
          ) : (
            ""
          )}
          {props.profileInfo?.socials?.twitter &&
          props.profileInfo?.socials?.twitter !== "twitter.com/" ? (
            <li>
              <Twitter />
              <span>{props.profileInfo.socials.twitter}</span>
            </li>
          ) : (
            ""
          )}
          {props.profileInfo?.socials?.linkedin &&
          props.profileInfo?.socials?.linkedin !== "linkedin.com/" ? (
            <li>
              <Linkedin />
              <span>{props.profileInfo.socials.linkedin}</span>
            </li>
          ) : (
            ""
          )}
          {props.profileInfo?.socials?.website &&
          props.profileInfo?.socials?.website !== "/" ? (
            <li>
              <Webpage />
              <span>{props.profileInfo.socials.website}</span>
            </li>
          ) : (
            ""
          )}
        </ul>
      </article>
    </section>
  )
}

export default ProfileCard
