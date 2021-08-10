import { useEffect, useState } from "react"
import { getUserDoc } from "../FirebaseApp"
import { useHistory } from "react-router-dom";
import Email from "../../assets/Email"
import Instagram from "../../assets/Instagram"
import Linkedin from "../../assets/Linkedin"
import Twitter from "../../assets/Twitter"
import Webpage from "../../assets/Webpage"
import ProfileArticleList from "../ProfileArticleList/ProfileArticleList";

function OtherProfile(props: any) {
  let history = useHistory();
  const [profileInformation, setProfileInformation] = useState<any>()

  useEffect(() => {
    getUserDoc(props.location.state).then(data => {
      setProfileInformation(data);
    });
  }, []);

  return (
    <div className="profile">
    <section className="profile-card">
      <article className="profile-card_author">
        <img src={profileInformation?.profileImage} alt="Name of the author" />
        <h1>{"@" + profileInformation?.username}</h1>
        <button
          className="profile-card_author_edit"
          onClick={history.goBack}
        >
          ◀ Back
        </button>
      </article>
      <article className="profile-card_description">
        <p>{profileInformation?.description}</p>
        <div className="profile-card_description_line"></div>
        <ul className="profile-card_description_socials">
          <li>
            <Email />
            <span>{profileInformation?.email}</span>
          </li>
          {profileInformation?.socials?.instagram &&
          profileInformation?.socials?.instagram !== "instagram.com/" ? (
            <li>
              <Instagram />
              <span>{profileInformation.socials.instagram}</span>
            </li>
          ) : (
            ""
          )}
          {profileInformation?.socials?.twitter &&
          profileInformation?.socials?.twitter !== "twitter.com/" ? (
            <li>
              <Twitter />
              <span>{profileInformation.socials.twitter}</span>
            </li>
          ) : (
            ""
          )}
          {profileInformation?.socials?.linkedin &&
          profileInformation?.socials?.linkedin !== "linkedin.com/" ? (
            <li>
              <Linkedin />
              <span>{profileInformation.socials.linkedin}</span>
            </li>
          ) : (
            ""
          )}
          {profileInformation?.socials?.website &&
          profileInformation?.socials?.website !== "/" ? (
            <li>
              <Webpage />
              <span>{profileInformation.socials.website}</span>
            </li>
          ) : (
            ""
          )}
        </ul>
      </article>
    </section>
            <ProfileArticleList userId={props.location.state.uid}/>
    </div>
  )
}

export default OtherProfile
